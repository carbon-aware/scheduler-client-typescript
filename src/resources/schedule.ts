// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Schedule extends APIResource {
  /**
   * Schedule
   */
  create(body: ScheduleCreateParams, options?: RequestOptions): APIPromise<ScheduleCreateResponse> {
    return this._client.post('/v0/schedule/', { body, ...options });
  }
}

export interface CloudZone {
  provider: 'aws' | 'gcp' | 'azure';

  region:
    | 'us-east-1'
    | 'us-west-1'
    | 'eu-central-1'
    | 'ap-southeast-2'
    | 'us-central1'
    | 'eastus'
    | 'eastus2'
    | 'southcentralus'
    | 'westus2'
    | 'westus3'
    | 'northeurope'
    | 'swedencentral'
    | 'uksouth'
    | 'westeurope'
    | 'centralus'
    | 'francecentral'
    | 'germanywestcentral'
    | 'italynorth'
    | 'norwayeast'
    | 'polandcentral'
    | 'eastus2euap'
    | 'eastusstg'
    | 'northcentralus'
    | 'westus'
    | 'centraluseuap'
    | 'westcentralus'
    | 'francesouth'
    | 'germanynorth'
    | 'norwaywest'
    | 'ukwest';
}

export interface ScheduleOption {
  co2_intensity: number;

  time: string;

  zone: CloudZone;
}

export interface ScheduleCreateResponse {
  carbon_savings: ScheduleCreateResponse.CarbonSavings;

  ideal: ScheduleOption;

  median_case: ScheduleOption;

  naive_case: ScheduleOption;

  options: Array<ScheduleOption>;

  worst_case: ScheduleOption;
}

export namespace ScheduleCreateResponse {
  export interface CarbonSavings {
    vs_median_case: number;

    vs_naive_case: number;

    vs_worst_case: number;
  }
}

export interface ScheduleCreateParams {
  duration: string;

  /**
   * List of time windows to schedule (start and end must be in the future)
   */
  windows: Array<ScheduleCreateParams.Window>;

  zones: Array<CloudZone>;

  num_options?: number | null;
}

export namespace ScheduleCreateParams {
  export interface Window {
    end: string;

    start: string;
  }
}

export declare namespace Schedule {
  export {
    type CloudZone as CloudZone,
    type ScheduleOption as ScheduleOption,
    type ScheduleCreateResponse as ScheduleCreateResponse,
    type ScheduleCreateParams as ScheduleCreateParams,
  };
}
