/* tslint:disable */
/* eslint-disable */
/**
 * 
 * This api document example is the Mainnet document, and the Testnet base URL is api.oasisscan.com/v2/testnet
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ChainBlockInfoResponse
 */
export interface ChainBlockInfoResponse {
    /**
     * 
     * @type {number}
     * @memberof ChainBlockInfoResponse
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof ChainBlockInfoResponse
     */
    epoch?: number;
    /**
     * 
     * @type {number}
     * @memberof ChainBlockInfoResponse
     */
    timestamp?: number;
    /**
     * 
     * @type {number}
     * @memberof ChainBlockInfoResponse
     */
    time?: number;
    /**
     * 
     * @type {string}
     * @memberof ChainBlockInfoResponse
     */
    hash?: string;
    /**
     * 
     * @type {number}
     * @memberof ChainBlockInfoResponse
     */
    txs?: number;
    /**
     * 
     * @type {string}
     * @memberof ChainBlockInfoResponse
     */
    entityAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof ChainBlockInfoResponse
     */
    name?: string;
}

export function ChainBlockInfoResponseFromJSON(json: any): ChainBlockInfoResponse {
    return ChainBlockInfoResponseFromJSONTyped(json, false);
}

export function ChainBlockInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainBlockInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': !exists(json, 'height') ? undefined : json['height'],
        'epoch': !exists(json, 'epoch') ? undefined : json['epoch'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'hash': !exists(json, 'hash') ? undefined : json['hash'],
        'txs': !exists(json, 'txs') ? undefined : json['txs'],
        'entityAddress': !exists(json, 'entityAddress') ? undefined : json['entityAddress'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ChainBlockInfoResponseToJSON(value?: ChainBlockInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'epoch': value.epoch,
        'timestamp': value.timestamp,
        'time': value.time,
        'hash': value.hash,
        'txs': value.txs,
        'entityAddress': value.entityAddress,
        'name': value.name,
    };
}


