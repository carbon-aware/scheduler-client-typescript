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
  provider: 'aws' | 'gcp' | 'azure' | 'ovh';

  region:
    | 'af-south-1'
    | 'ap-east-1'
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-northeast-3'
    | 'ap-south-1'
    | 'ap-south-2'
    | 'ap-southeast-2'
    | 'ap-southeast-3'
    | 'ap-southeast-4'
    | 'ap-southeast-5'
    | 'ap-southeast-7'
    | 'ca-central-1'
    | 'ca-west-1'
    | 'eu-central-1'
    | 'eu-central-2'
    | 'eu-north-1'
    | 'eu-south-1'
    | 'eu-south-2'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'eu-west-3'
    | 'il-central-1'
    | 'me-central-1'
    | 'mx-central-1'
    | 'sa-east-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-1'
    | 'us-west-2'
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-southeast1'
    | 'europe-north1'
    | 'europe-west1'
    | 'europe-west3'
    | 'europe-west4'
    | 'northamerica-northeast2'
    | 'southamerica-west1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-west1'
    | 'us-west2'
    | 'australiacentral'
    | 'australiaeast'
    | 'australiasoutheast'
    | 'brazilsouth'
    | 'canadacentral'
    | 'canadaeast'
    | 'centralindia'
    | 'centralus'
    | 'chinaeast2'
    | 'chinanorth'
    | 'chinanorth2'
    | 'chinanorth3'
    | 'eastasia'
    | 'eastus'
    | 'eastus2'
    | 'francecentral'
    | 'germanywestcentral'
    | 'indonesiacentral'
    | 'israelcentral'
    | 'italynorth'
    | 'japaneast'
    | 'japanwest'
    | 'koreacentral'
    | 'mexicocentral'
    | 'newzealandnorth'
    | 'northcentralus'
    | 'northeurope'
    | 'norwayeast'
    | 'polandcentral'
    | 'southafricanorth'
    | 'southcentralus'
    | 'southindia'
    | 'spaincentral'
    | 'swedencentral'
    | 'switzerlandnorth'
    | 'uaenorth'
    | 'uksouth'
    | 'ukwest'
    | 'westcentralus'
    | 'westeurope'
    | 'westus'
    | 'westus2'
    | 'westus3'
    | 'fr-strasbourg'
    | 'pl-warsaw';
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
