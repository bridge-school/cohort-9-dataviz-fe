export const orderMinority = dataArr => {
  const descData = dataArr
    .concat()
    .sort((a, b) => a.count - b.count)
    .reverse();

  const filtered = descData
    .filter(
      object =>
        (object.name === 'Other') | (object.name === 'Prefer not to disclose')
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const filtered2 = descData.filter(
    object =>
      object.name !== 'Other' && object.name !== 'Prefer not to disclose'
  );

  const result = filtered2.concat(filtered);
  return result;
};

export const orderPrevBootcamp = dataArr => {
  const descData = dataArr
    .concat()
    .sort((a, b) => a.count - b.count)
    .reverse();

  const filtered = descData
    .filter(
      object =>
        (object.name === 'Other') |
        (object.name === 'I have not attended a bootcamp')
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const filtered2 = descData.filter(
    object =>
      object.name !== 'Other' &&
      object.name !== 'I have not attended a bootcamp'
  );

  const result = filtered2.concat(filtered);
  return result;
};

export const sortDesc = dataArr => {
  const descData = dataArr
    .concat()
    .sort((a, b) => a.count - b.count)
    .reverse();

  return descData;
};
