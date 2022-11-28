import useResults from "../hooks/useResults";

function Results() {
  const { results, loading } = useResults();

  const exportToCsv = (arr, title) => {
    const encodedUri = encodeURI(["data:text/csv;charset=utf-8,", arr.join(",\n")].join(''));
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${title}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  }

  const dedupe = (arr) => {
    const d = [...new Set(arr)];

    exportToCsv(d, 'deduplicated');
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <>
      <button onClick={() => exportToCsv(results, 'raw')}>Export raw</button>
      <button onClick={() => dedupe(results)}>Deduplicated</button>
    </>
  );
}

export default Results;
