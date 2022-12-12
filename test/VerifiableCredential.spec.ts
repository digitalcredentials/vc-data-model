import { expect } from 'chai'
import { VerifiableCredential, VerifiablePresentation } from '../src'

describe('VerifiableCredential', () => {
  it('exists', async () => {
    const vc = {} as VerifiableCredential;
    expect(vc).to.exist;
  })
})

describe('VerifiablePresentation', () => {
  it('exists', async () => {
    const vp = {} as VerifiablePresentation;
    expect(vp).to.exist;
  })
})
