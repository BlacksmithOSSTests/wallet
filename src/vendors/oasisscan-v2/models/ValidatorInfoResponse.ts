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
import {
    Bound,
    BoundFromJSON,
    BoundFromJSONTyped,
    BoundToJSON,
    EscrowStatus,
    EscrowStatusFromJSON,
    EscrowStatusFromJSONTyped,
    EscrowStatusToJSON,
    Rate,
    RateFromJSON,
    RateFromJSONTyped,
    RateToJSON,
    ValidatorRuntime,
    ValidatorRuntimeFromJSON,
    ValidatorRuntimeFromJSONTyped,
    ValidatorRuntimeToJSON,
} from './';

/**
 * 
 * @export
 * @interface ValidatorInfoResponse
 */
export interface ValidatorInfoResponse {
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfoResponse
     */
    rank?: number;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    entityAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    nodeAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    twitter?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    keybase?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    escrow?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    escrowChange24?: string;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfoResponse
     */
    escrowPercent?: number;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    balance?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    totalShares?: string;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfoResponse
     */
    signs?: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfoResponse
     */
    proposals?: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfoResponse
     */
    nonce?: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfoResponse
     */
    score?: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfoResponse
     */
    delegators?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidatorInfoResponse
     */
    nodes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfoResponse
     */
    uptime?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ValidatorInfoResponse
     */
    active?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfoResponse
     */
    commission?: number;
    /**
     * 
     * @type {Bound}
     * @memberof ValidatorInfoResponse
     */
    bound?: Bound;
    /**
     * 
     * @type {Array<Rate>}
     * @memberof ValidatorInfoResponse
     */
    rates?: Array<Rate>;
    /**
     * 
     * @type {Array<Bound>}
     * @memberof ValidatorInfoResponse
     */
    bounds?: Array<Bound>;
    /**
     * 
     * @type {EscrowStatus}
     * @memberof ValidatorInfoResponse
     */
    escrowSharesStatus?: EscrowStatus;
    /**
     * 
     * @type {EscrowStatus}
     * @memberof ValidatorInfoResponse
     */
    escrowAmountStatus?: EscrowStatus;
    /**
     * 
     * @type {Array<ValidatorRuntime>}
     * @memberof ValidatorInfoResponse
     */
    runtimes?: Array<ValidatorRuntime>;
    /**
     * 
     * @type {boolean}
     * @memberof ValidatorInfoResponse
     */
    status?: boolean;
}

export function ValidatorInfoResponseFromJSON(json: any): ValidatorInfoResponse {
    return ValidatorInfoResponseFromJSONTyped(json, false);
}

export function ValidatorInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
        'entityId': !exists(json, 'entityId') ? undefined : json['entityId'],
        'entityAddress': !exists(json, 'entityAddress') ? undefined : json['entityAddress'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'nodeAddress': !exists(json, 'nodeAddress') ? undefined : json['nodeAddress'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'twitter': !exists(json, 'twitter') ? undefined : json['twitter'],
        'keybase': !exists(json, 'keybase') ? undefined : json['keybase'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'escrow': !exists(json, 'escrow') ? undefined : json['escrow'],
        'escrowChange24': !exists(json, 'escrowChange24') ? undefined : json['escrowChange24'],
        'escrowPercent': !exists(json, 'escrowPercent') ? undefined : json['escrowPercent'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'totalShares': !exists(json, 'totalShares') ? undefined : json['totalShares'],
        'signs': !exists(json, 'signs') ? undefined : json['signs'],
        'proposals': !exists(json, 'proposals') ? undefined : json['proposals'],
        'nonce': !exists(json, 'nonce') ? undefined : json['nonce'],
        'score': !exists(json, 'score') ? undefined : json['score'],
        'delegators': !exists(json, 'delegators') ? undefined : json['delegators'],
        'nodes': !exists(json, 'nodes') ? undefined : json['nodes'],
        'uptime': !exists(json, 'uptime') ? undefined : json['uptime'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'commission': !exists(json, 'commission') ? undefined : json['commission'],
        'bound': !exists(json, 'bound') ? undefined : BoundFromJSON(json['bound']),
        'rates': !exists(json, 'rates') ? undefined : ((json['rates'] as Array<any>).map(RateFromJSON)),
        'bounds': !exists(json, 'bounds') ? undefined : ((json['bounds'] as Array<any>).map(BoundFromJSON)),
        'escrowSharesStatus': !exists(json, 'escrowSharesStatus') ? undefined : EscrowStatusFromJSON(json['escrowSharesStatus']),
        'escrowAmountStatus': !exists(json, 'escrowAmountStatus') ? undefined : EscrowStatusFromJSON(json['escrowAmountStatus']),
        'runtimes': !exists(json, 'runtimes') ? undefined : ((json['runtimes'] as Array<any>).map(ValidatorRuntimeFromJSON)),
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function ValidatorInfoResponseToJSON(value?: ValidatorInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rank': value.rank,
        'entityId': value.entityId,
        'entityAddress': value.entityAddress,
        'nodeId': value.nodeId,
        'nodeAddress': value.nodeAddress,
        'name': value.name,
        'icon': value.icon,
        'website': value.website,
        'twitter': value.twitter,
        'keybase': value.keybase,
        'email': value.email,
        'description': value.description,
        'escrow': value.escrow,
        'escrowChange24': value.escrowChange24,
        'escrowPercent': value.escrowPercent,
        'balance': value.balance,
        'totalShares': value.totalShares,
        'signs': value.signs,
        'proposals': value.proposals,
        'nonce': value.nonce,
        'score': value.score,
        'delegators': value.delegators,
        'nodes': value.nodes,
        'uptime': value.uptime,
        'active': value.active,
        'commission': value.commission,
        'bound': BoundToJSON(value.bound),
        'rates': value.rates === undefined ? undefined : ((value.rates as Array<any>).map(RateToJSON)),
        'bounds': value.bounds === undefined ? undefined : ((value.bounds as Array<any>).map(BoundToJSON)),
        'escrowSharesStatus': EscrowStatusToJSON(value.escrowSharesStatus),
        'escrowAmountStatus': EscrowStatusToJSON(value.escrowAmountStatus),
        'runtimes': value.runtimes === undefined ? undefined : ((value.runtimes as Array<any>).map(ValidatorRuntimeToJSON)),
        'status': value.status,
    };
}


