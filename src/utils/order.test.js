import { orderBars, sortDesc } from './order';

const input = [
  { name: 'Person of colour', count: 50 },
  { name: 'Person with a disability', count: 10 },
  { name: 'Other', count: 7 },
  { name: 'Prefer not to disclose', count: 9 }
];
const output1 = [
  { name: 'Person of colour', count: 50 },
  { name: 'Person with a disability', count: 10 },
  { name: 'Prefer not to disclose', count: 9 },
  { name: 'Other', count: 7 }
];

const output2 = [
  { name: 'Person of colour', count: 50 },
  { name: 'Person with a disability', count: 10 },
  { name: 'Other', count: 7 },
  { name: 'Prefer not to disclose', count: 9 }
];
describe('Tests for descending sort function', () => {
  it('sorts an array from the highest to lowest', () => {
    const result = sortDesc(input);
    expect(result).toEqual(output1);
  });
});

describe('Tests for order of barplot input array', () => {
  it('sorts an array from the highest to lowest, Other is second last, second parameter is last', () => {
    const result = orderBars(input, 'Prefer not to disclose');
    expect(result).toEqual(output2);
  });
  it('checks the order if second argument is invalid', () => {
    const result = orderBars(input, 'I am not valid');
    expect(result).toEqual(output1);
  });
});
