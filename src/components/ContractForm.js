import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import useDebounce from '../hooks/useDebounce';
import useWeb3 from '../hooks/useWeb3';
import useContract from '../hooks/useContract';
import { styledButtonPartial, styledInputPartial } from './GlobalStyle';
import { getTokensFromContract } from '../utils';
import useResults, { useSetResults } from '../hooks/useResults';

const StyledForm = styled.form`
  ${(props) => {
    if (props.loading) {
      return css`
        opacity: 0.8;
      `;
    }
    return css``;
  }}
`;
const StyledButton = styled.button`
  ${styledButtonPartial}
  width: 100%;
`;
const StyledInput = styled.input`
  ${styledInputPartial}
  width: 100%;
`;

function ContractForm() {
  const { library } = useWeb3();
  const { contract } = useContract();
  const { loading } = useResults();
  const { setLoading, setError: setResultsError, setResults } = useSetResults();
  const [event, setEvent] = useState();
  const [totalSupplyEvent, setTotalSupplyEvent] = useState();
  const [contractAddress, setContractAddress] = useState('');
  const [totalSupply, setTotalSupply] = useState(0);
  const [error, setError] = useState();
  const [totalSupplyError, setTotalSupplyError] = useState();
  const [formData, setFormData] = useState();

  useEffect(() => {
    if (contract && formData && !loading) {
      setLoading(true);
      getTokensFromContract(contract, formData.contractAddress, Number(formData.totalSupply)).then((res) => {
        setResults(res);
      }).finally(() => {
        setFormData(undefined);
        setLoading(false);
      })
    }
  }, [contract, formData, loading])

  useEffect(() => {
    const errs = [error, totalSupplyError].filter(e => e);
    setResultsError(errs.length > 0 ? errs : undefined);
    setResults([]);
  }, [error, totalSupplyError]);

  useDebounce(
    () => {
      if (event && event.target && event.target.value) {
        setError(!library.utils.isAddress(event.target.value) ? new Error('Invalid address') : undefined);
        setContractAddress(event.target.value);
      } else {
        setError(undefined);
        setContractAddress('');
      }
    },
    [event],
    200
  );

  useDebounce(
    () => {
      if (totalSupplyEvent && totalSupplyEvent.target && totalSupplyEvent.target.value) {
        try {
          const ts = Number(totalSupplyEvent.target.value);
          if (typeof ts !== 'number' || ts === NaN) {
            throw new Error('Total supply not a number');
          }
          if (ts < 0) {
            throw new Error('Total supply less than zero');
          }
          setTotalSupplyError(undefined);
          setTotalSupply(ts);
        } catch(e) {
          setTotalSupplyError(e);
        }
      } else {
        setTotalSupply(0);
        setTotalSupplyError(undefined);
      }
    },
    [totalSupplyEvent],
    200
  );

  const onInputChange = (e) => {
    setEvent(e);
  };

  const onTotalSupplyChange = (e) => {
    setTotalSupplyEvent(e);
  };

  const onSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    const data = {};
    (new FormData(e.target)).fd.forEach((value, key) => (data[key] = value));

    setFormData(data);

    return false;
  }

  return (
    <StyledForm onSubmit={onSubmit} disabled={(formData || false)}>
      <StyledInput onChange={onInputChange} disabled={(formData || false)} name="contractAddress" placeholder="Contract Address" />
      <StyledInput onChange={onTotalSupplyChange} disabled={(formData || false)} name="totalSupply" type="number" min={0} placeholder="Total Supply" />
      <StyledButton disabled={!contractAddress || !totalSupply || error || totalSupplyError || (formData || false)} type="submit">Search</StyledButton>
    </StyledForm>
  );
}

export default ContractForm;
