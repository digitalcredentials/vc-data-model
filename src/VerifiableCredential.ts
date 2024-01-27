/*!
 * Copyright (c) 2022-2024 Digital Credentials Consortium. All rights reserved.
 */
export type Type = string | string[]

export interface ImageObject {
  id: string
  type?: Type
  [x: string]: any
}

export interface LinkedDataObject {
  // id and type are very common to all Linked Data objects
  id?: string
  type?: Type

  name?: string
  image?: string | ImageObject
}

export interface IssuerObject extends LinkedDataObject {
  id: string
  url?: string
  name?: string;
  image?: string | ImageObject;

  [x: string]: any
}

export type VerifiableCredential = VerifiableCredentialDataModelV1 | CompactJWT

// Represents a Json Web Token in compact form: "header.payload.signature"
export type CompactJWT = string

// Represents a Verifiable Credential protected by
//   the Verifiable Credential Data Integrity 1.0 spec
// @see https://www.w3.org/TR/vc-data-integrity/
export interface VerifiableCredentialDataModelV1 extends LinkedDataObject {
  // The first element of the @context array must be the VC context itself
  // Subsequent elements are either URLs for other contexts OR
  // inline context objects.
  // https://w3c.github.io/vc-data-model/#contexts
  '@context': string[] | any

  // https://w3c.github.io/vc-data-model/#identifiers
  id?: string

  // https://w3c.github.io/vc-data-model/#types
  type: Type

  // https://w3c.github.io/vc-data-model/#issuer
  issuer: string | IssuerObject

  // https://w3c.github.io/vc-data-model/#issuance-date
  // http://www.w3.org/2001/XMLSchema#dateTime
  issuanceDate: string
  // alias of issuanceDate. VC DM v2 spec replaces issuanceDate with validFrom
  validFrom?: string

  // https://w3c.github.io/vc-data-model/#expiration
  // http://www.w3.org/2001/XMLSchema#dateTime
  expirationDate?: string
  // alias of expirationDate. VC DM v2 spec replaces expirationDate with expirationDate
  validUntil?: string

  // https://w3c.github.io/vc-data-model/#credential-subject
  credentialSubject: CredentialSubject

  // https://w3c.github.io/vc-data-model/#status
  credentialStatus?: CredentialStatus

  // https://w3c.github.io/vc-data-model/#data-schemas
  credentialSchema?: CredentialSchema

  // https://w3c.github.io/vc-data-model/#evidence
  evidence?: Evidence | Evidence[]

  // https://w3c.github.io/vc-data-model/#refreshing
  refreshService?: RefreshService | RefreshService[]

  // https://w3c.github.io/vc-data-model/#terms-of-use
  termsOfUse?: LinkedDataObject | LinkedDataObject[]

  renderMethod?: LinkedDataObject | LinkedDataObject[]

  // For W3C Linked Data Integrity-protected VCs, a 'proof' is required
  // However, for JWT-protected VCs, 'proof' is optional (is external)
  // @see https://w3c-ccg.github.io/ld-cryptosuite-registry/
  // for examples of cryptographic suites used for VC proofs
  proof?: LinkedDataObject | LinkedDataObject[]

  // Implementers are free to add any other properties to a VC
  [x: string]: any
}

// https://w3c.github.io/vc-data-model/#credential-subject
export interface CredentialSubject extends LinkedDataObject {
  // although a VC is required to have a `credentialSubject` property,
  // the spec does not require any properties inside it.
}

// https://w3c.github.io/vc-data-model/#status
export interface CredentialStatus extends LinkedDataObject {
  // id and type are required for `credentialStatus` by the VC spec
  id: string
  type: Type
  [x: string]: any

  // Each status type has its own required fields. For example:
  // https://w3c-ccg.github.io/vc-status-list-2021
  statusPurpose?: string
  statusListIndex?: string | number
  statusListCredential?: string
}

// https://w3c.github.io/vc-data-model/#data-schemas
export interface CredentialSchema {
  id: string
  type: string
}

// https://w3c.github.io/vc-data-model/#refreshing
export interface RefreshService {
  id: string
  type: string
}

// https://w3c.github.io/vc-data-model/#evidence
export interface Evidence extends LinkedDataObject {}
