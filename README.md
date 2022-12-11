# Verifiable Credentials Data Model _(@digitalcredentials/vc-data-model)_

[![Build status](https://img.shields.io/github/workflow/status/digitalcredentials/vc-data-model/Node.js%20CI)](https://github.com/digitalcredentials/vc-data-model/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalcredentials/vc-data-model.svg)](https://npm.im/@digitalcredentials/vc-data-model)

> Typescript types for the W3C Verifiable Credentials Data Model.

## Table of Contents

- [Background](#background)
- [Security](#security)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background

See [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/)
specification.

## Security

TBD

## Install

- Node.js 16+ is recommended.

### NPM

To install via NPM:

```
npm install @digitalcredentials/vc-data-model
```

### Development

To install locally (for development):

```
git clone https://github.com/digitalcredentials/vc-data-model.git
cd vc-data-model
npm install
```

## Usage

```ts
import { VerifiableCredential, VerifiablePresentation } from '@digitalcredentials/vc-data-model'

// for example, in an Express route definition:
const vp = req.body.presentation as VerifiablePresentation
```

## Contribute

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT License](LICENSE.md) © 2022 Digital Credentials Consortium.
