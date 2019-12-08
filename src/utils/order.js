export const orderBars = (dataArr, lastBar) => {
  const descData = dataArr.concat().sort((a, b) => b.count - a.count);

  const filtered = descData
    .filter(object => (object.name === 'Other') | (object.name === lastBar))
    .sort((a, b) => a.name.localeCompare(b.name));

  const filtered2 = descData.filter(
    object => object.name !== 'Other' && object.name !== lastBar
  );

  const result = filtered2.concat(filtered);
  return result;
};

export const sortDesc = dataArr => {
  const descData = dataArr.concat().sort((a, b) => b.count - a.count);
  return descData;
};
