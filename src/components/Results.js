import { useState } from "react";
import styled from "styled-components";
import useResults from "../hooks/useResults";
import { styledBorderPartial } from "./GlobalStyle";

const StyledResultsButtons = styled.section`
  margin: var(--site-spacing) 0;
  display: flex;
  justify-content: space-between;
`;

const StyledResults = styled.div`
  height: 300px;
  overflow: auto;
  ${styledBorderPartial}

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  
    tr {
      th,
      td {
        padding: var(--site-spacing);
  
        &:last-of-type {
          padding-left: calc(var(--site-spacing) * 4);
        }
      }
    }
  
    thead {
      font-family: var(--coolcats-font);

      th {
        position: sticky;
        top: 0;
        background-color: var(--disabled);
      }
    }
  
    tbody {
      th {
        &:hover {
          background-color: var(--disabled);
        }
      }
    }
  }

  + button {
    width: 100%;
  }
`;

function Results() {
  const { results, loading } = useResults();
  const resultsSlice = 1000;
  const [slice, setSlice] = useState(resultsSlice);

  const exportToCsv = (arr, title) => {
    const encodedUri = encodeURI(["data:text/csv;charset=utf-8,", arr.join(",\n")].join(''));
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${title}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  }

  const basicExport = (arr) => {
    exportToCsv(arr, 'raw');
  }

  const dedupe = (arr) => {
    const d = [...new Set(arr.unshift('Address'))];

    exportToCsv(d, 'deduplicated');
  }

  const withTokens = (arr) => {
    const tokenArr = arr.reduce((a, v, i) => {
      if (!a[v]) {
        a[v] = ''
      }
      
      a[v] = a[v].split(',');
      a[v].push(i);
      a[v] = a[v].filter(k => k).join(',');
      return a;
    }, {});

    // Flatten to array
    const flattened = [['Address', 'Tokens'].join(",")];
    for (var k in tokenArr) {
      flattened.push([k, tokenArr[k]].join(","));
    }

    return exportToCsv(flattened, 'tokens');
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <>
      <StyledResultsButtons>
        <button onClick={() => basicExport(results)}>Export raw</button>
        <button onClick={() => dedupe(results)}>Export Deduplicated</button>
        <button onClick={() => withTokens(results)}>Export Token Breakdown</button>
      </StyledResultsButtons>
      <StyledResults>
        <table>
          <thead>
            <tr>
              <th>Address</th>
              <th>Token Id</th>
            </tr>
          </thead>
          <tbody>
            {results.slice(0, slice).map((add, tokenId) => {
              return (
                <tr key={tokenId}>
                  <td>{add}</td>
                  <td>{tokenId}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </StyledResults>
      <button onClick={() => setSlice(s => s + resultsSlice)}>Load more</button>
    </>
  );
}

export default Results;
