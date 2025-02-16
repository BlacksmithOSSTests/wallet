/* tslint:disable */
/* eslint-disable */
/**
 * Oasis Nexus API V1
 * An API for accessing indexed data from the Oasis Network.  <!-- Acts as a separator after search in sidebar --> # Endpoints 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    VerificationLevel,
    VerificationLevelFromJSON,
    VerificationLevelFromJSONTyped,
    VerificationLevelToJSON,
} from './';

/**
 * 
 * @export
 * @interface RuntimeEvmContractVerification
 */
export interface RuntimeEvmContractVerification {
    /**
     * 
     * @type {VerificationLevel}
     * @memberof RuntimeEvmContractVerification
     */
    verification_level?: VerificationLevel;
    /**
     * The smart contract's [metadata.json](https://docs.soliditylang.org/en/latest/metadata.html) file in JSON format as defined by Solidity.
     * Includes the smart contract's [ABI](https://docs.soliditylang.org/en/develop/abi-spec.html).
     * @type {object}
     * @memberof RuntimeEvmContractVerification
     */
    compilation_metadata?: object;
    /**
     * Array of all contract source files, in JSON format as returned by [Sourcify](https://sourcify.dev/server/api-docs/#/Repository/get_files_any__chain___address_).
     * @type {Array<object>}
     * @memberof RuntimeEvmContractVerification
     */
    source_files?: Array<object>;
}

export function RuntimeEvmContractVerificationFromJSON(json: any): RuntimeEvmContractVerification {
    return RuntimeEvmContractVerificationFromJSONTyped(json, false);
}

export function RuntimeEvmContractVerificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeEvmContractVerification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'verification_level': !exists(json, 'verification_level') ? undefined : VerificationLevelFromJSON(json['verification_level']),
        'compilation_metadata': !exists(json, 'compilation_metadata') ? undefined : json['compilation_metadata'],
        'source_files': !exists(json, 'source_files') ? undefined : json['source_files'],
    };
}

export function RuntimeEvmContractVerificationToJSON(value?: RuntimeEvmContractVerification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'verification_level': VerificationLevelToJSON(value.verification_level),
        'compilation_metadata': value.compilation_metadata,
        'source_files': value.source_files,
    };
}


