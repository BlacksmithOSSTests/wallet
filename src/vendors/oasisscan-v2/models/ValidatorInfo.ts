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
 * @interface ValidatorInfo
 */
export interface ValidatorInfo {
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfo
     */
    rank: number;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    entityId: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    entityAddress: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    nodeId: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    nodeAddress: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    website: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    twitter: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    keybase: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    escrow: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    escrowChange24: string;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfo
     */
    escrowPercent: number;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    balance: string;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    totalShares: string;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfo
     */
    signs: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfo
     */
    proposals: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfo
     */
    nonce: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfo
     */
    score: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfo
     */
    delegators: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidatorInfo
     */
    nodes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidatorInfo
     */
    uptime: string;
    /**
     * 
     * @type {boolean}
     * @memberof ValidatorInfo
     */
    active: boolean;
    /**
     * 
     * @type {number}
     * @memberof ValidatorInfo
     */
    commission: number;
    /**
     * 
     * @type {Bound}
     * @memberof ValidatorInfo
     */
    bound?: Bound;
    /**
     * 
     * @type {Array<Rate>}
     * @memberof ValidatorInfo
     */
    rates: Array<Rate>;
    /**
     * 
     * @type {Array<Bound>}
     * @memberof ValidatorInfo
     */
    bounds: Array<Bound>;
    /**
     * 
     * @type {EscrowStatus}
     * @memberof ValidatorInfo
     */
    escrowSharesStatus?: EscrowStatus;
    /**
     * 
     * @type {EscrowStatus}
     * @memberof ValidatorInfo
     */
    escrowAmountStatus?: EscrowStatus;
    /**
     * 
     * @type {Array<ValidatorRuntime>}
     * @memberof ValidatorInfo
     */
    runtimes?: Array<ValidatorRuntime>;
    /**
     * 
     * @type {boolean}
     * @memberof ValidatorInfo
     */
    status: boolean;
}

export function ValidatorInfoFromJSON(json: any): ValidatorInfo {
    return ValidatorInfoFromJSONTyped(json, false);
}

export function ValidatorInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rank': json['rank'],
        'entityId': json['entityId'],
        'entityAddress': json['entityAddress'],
        'nodeId': json['nodeId'],
        'nodeAddress': json['nodeAddress'],
        'name': json['name'],
        'icon': json['icon'],
        'website': json['website'],
        'twitter': json['twitter'],
        'keybase': json['keybase'],
        'email': json['email'],
        'description': json['description'],
        'escrow': json['escrow'],
        'escrowChange24': json['escrowChange24'],
        'escrowPercent': json['escrowPercent'],
        'balance': json['balance'],
        'totalShares': json['totalShares'],
        'signs': json['signs'],
        'proposals': json['proposals'],
        'nonce': json['nonce'],
        'score': json['score'],
        'delegators': json['delegators'],
        'nodes': !exists(json, 'nodes') ? undefined : json['nodes'],
        'uptime': json['uptime'],
        'active': json['active'],
        'commission': json['commission'],
        'bound': !exists(json, 'bound') ? undefined : BoundFromJSON(json['bound']),
        'rates': ((json['rates'] as Array<any>).map(RateFromJSON)),
        'bounds': ((json['bounds'] as Array<any>).map(BoundFromJSON)),
        'escrowSharesStatus': !exists(json, 'escrowSharesStatus') ? undefined : EscrowStatusFromJSON(json['escrowSharesStatus']),
        'escrowAmountStatus': !exists(json, 'escrowAmountStatus') ? undefined : EscrowStatusFromJSON(json['escrowAmountStatus']),
        'runtimes': !exists(json, 'runtimes') ? undefined : ((json['runtimes'] as Array<any>).map(ValidatorRuntimeFromJSON)),
        'status': json['status'],
    };
}

export function ValidatorInfoToJSON(value?: ValidatorInfo | null): any {
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
        'rates': ((value.rates as Array<any>).map(RateToJSON)),
        'bounds': ((value.bounds as Array<any>).map(BoundToJSON)),
        'escrowSharesStatus': EscrowStatusToJSON(value.escrowSharesStatus),
        'escrowAmountStatus': EscrowStatusToJSON(value.escrowAmountStatus),
        'runtimes': value.runtimes === undefined ? undefined : ((value.runtimes as Array<any>).map(ValidatorRuntimeToJSON)),
        'status': value.status,
    };
}


