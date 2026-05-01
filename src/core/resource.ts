// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { CarbonawareScheduler } from '../client';

export abstract class APIResource {
  protected _client: CarbonawareScheduler;

  constructor(client: CarbonawareScheduler) {
    this._client = client;
  }
}
