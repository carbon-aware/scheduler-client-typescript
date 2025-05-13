// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CarbonawareScheduler from 'carbonaware-scheduler';

const client = new CarbonawareScheduler({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schedule', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.schedule.create({
      duration: 'PT1H',
      windows: [{ end: '2019-12-27T18:11:19.117Z', start: '2019-12-27T18:11:19.117Z' }],
      zones: [{ provider: 'aws', region: 'us-east-1' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.schedule.create({
      duration: 'PT1H',
      windows: [{ end: '2019-12-27T18:11:19.117Z', start: '2019-12-27T18:11:19.117Z' }],
      zones: [{ provider: 'aws', region: 'us-east-1' }],
      num_options: 0,
    });
  });
});
