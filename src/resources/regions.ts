// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ScheduleAPI from './schedule';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Regions extends APIResource {
  /**
   * Returns list of available regions.
   */
  list(options?: RequestOptions): APIPromise<RegionListResponse> {
    return this._client.get('/v0/regions/', options);
  }
}

export interface RegionListResponse {
  regions: Array<ScheduleAPI.CloudZone>;
}

export declare namespace Regions {
  export { type RegionListResponse as RegionListResponse };
}
