import policeApi from './police-api.js';

it('returns data for homerton', async() => {
  // TODO: mock fetch for this call
  
  let data = await policeApi.getCrimesForLocation(51.549047, -0.036865, new Date(2017,4));
  expect(data).not.toBe([]);
  expect(data).not.toBe(null);
  expect(data).not.toBeUndefined()
});

