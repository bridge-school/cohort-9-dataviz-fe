export const orderBars = (dataArr, lastBar) => {
  const objectNames = dataArr.map(obj => obj.name);
  if (!objectNames.includes(lastBar)) {
    return dataArr.concat().sort((a, b) => b.count - a.count);
  } else {
    const descData = dataArr.concat().sort((a, b) => b.count - a.count);

    const filtered = descData.filter(
      object => (object.name === 'Other') | (object.name === lastBar)
    );

    const sortedFiltered =
      filtered[0].name === 'Other' ? filtered : filtered.reverse();

    const filtered2 = descData.filter(
      object => object.name !== 'Other' && object.name !== lastBar
    );

    const result = filtered2.concat(sortedFiltered);
    return result;
  }
};

export const sortDesc = dataArr => {
  const descData = dataArr.concat().sort((a, b) => b.count - a.count);
  return descData;
};
