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

const StyledError = styled.blockquote`
  width: 100%;
  background: red;
  color: white;
`;

function ContractFormError({ error }) {
  const [closed, setClosed] = useState(false);
  if (closed) {
    return null;
  }

  return (
    <StyledError>
      {error.message}
    </StyledError>
  )
}

function ContractForm() {
  const { library } = useWeb3();
  const { contract } = useContract();
  const { loading } = useResults();
  const { setLoading, setError: setResultsError, setResults } = useSetResults();
  const [event, setEvent] = useState();
  const [lastTokenEvent, setLastTokenEvent] = useState();
  const [contractAddress, setContractAddress] = useState('');
  const [lastToken, setLastToken] = useState(0);
  const [error, setError] = useState();
  const [lastTokenError, setLastTokenError] = useState();
  const [formData, setFormData] = useState();

  useEffect(() => {
    if (contract && formData && !loading) {
      setLoading(true);
      getTokensFromContract(contract, formData.contractAddress, Number(formData.lastToken)).then((res) => {
        setResults(res);
      }).finally(() => {
        setFormData(undefined);
        setLoading(false);
      })
    }
  }, [contract, formData, loading])

  useEffect(() => {
    const errs = [error, lastTokenError].filter(e => e);
    setResultsError(errs.length > 0 ? errs : undefined);
    setResults([]);
  }, [error, lastTokenError]);

  useEffect(() => {
    setResults([]);
  }, [contractAddress, lastToken]);

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
      if (lastTokenEvent && lastTokenEvent.target && lastTokenEvent.target.value) {
        try {
          const ts = Number(lastTokenEvent.target.value);
          if (typeof ts !== 'number' || ts === NaN) {
            throw new Error('Last token id not a number');
          }
          if (ts < 0) {
            throw new Error('Last token id less than zero');
          }
          setLastTokenError(undefined);
          setLastToken(ts);
        } catch(e) {
          setLastTokenError(e);
        }
      } else {
        setLastToken(0);
        setLastTokenError(undefined);
      }
    },
    [lastTokenEvent],
    200
  );

  const onInputChange = (e) => {
    setEvent(e);
  };

  const onLastTokenChange = (e) => {
    setLastTokenEvent(e);
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
    <>
      {error && <ContractFormError error={error} />}
      {lastTokenError && <ContractFormError error={lastTokenError} />}
      <StyledForm onSubmit={onSubmit} disabled={(formData || false)}>
        <StyledInput onChange={onInputChange} disabled={(formData || false)} name="contractAddress" placeholder="Contract Address" />
        <StyledInput onChange={onLastTokenChange} disabled={(formData || false)} name="lastToken" type="number" min={0} placeholder="Last Token Id" />
        <StyledButton disabled={!contractAddress || !lastToken || error || lastTokenError || (formData || false)} type="submit">Search</StyledButton>
      </StyledForm>
    </>
  );
}

export default ContractForm;
