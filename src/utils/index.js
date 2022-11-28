/**
 * Chunk an array into smaller pieces
 *
 * @param arr  Source array
 * @param size Size of chunk
 *
 * @returns Array[]
 */
 export const chunk = (arr, size) => {
  const chunks = [];
  let i = 0;
  const n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += size));
  }
  return chunks;
};

export const getTokensFromContract = (contract, address, totalSupply) => {
  const CHUNK_LIMIT = 1000;
  const chunks = chunk(Array.from(Array(totalSupply > CHUNK_LIMIT ? totalSupply : CHUNK_LIMIT).keys()), CHUNK_LIMIT);
  const splits = chunks.map((c) => {
    return [c[0], c[c.length - 1]];
  });

  return Promise.all(splits.map((split) => {
    return contract.methods.safeOwnersOfBetween(
      address,
      split[0],
      split[1]
    ).call().then((res) => {
      return res;
    }).catch((e) => {
      console.error(e)
      return [];  
    });
  })).then((addresses) => {
    // Merge addresses into one array
    return [].concat.apply([], addresses);
  }).catch((e) => {
    console.error(e)
    return [];  
  });
}