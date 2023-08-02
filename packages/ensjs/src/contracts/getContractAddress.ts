import { ContractName, SupportedNetworkId } from './types'

const addresses: Record<
  ContractName,
  Partial<Record<SupportedNetworkId, string>> | string
> = {
  /* eslint-disable @typescript-eslint/naming-convention */
  BaseRegistrarImplementation: {
    '10': '0x8e2b5A1b524d287deCfFa4642CA4908eb128EabF',
    '5': '0x8e2b5A1b524d287deCfFa4642CA4908eb128EabF',
  },
  DNSRegistrar: {
    '10': '0xC621C34395d730AF1f675181dB340cA2557dF00d',
    '5': '0xC621C34395d730AF1f675181dB340cA2557dF00d',
  },
  ETHRegistrarController: {
    '10': '0x2eB50643fa16Bc4d41a865B0dE0035cF3c821Ad6',
    '5': '0x2eB50643fa16Bc4d41a865B0dE0035cF3c821Ad6',
  },
  Multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
  NameWrapper: {
    '10': '0x86260ad23921180715c64F31423875449C84b796',
    '5': '0x86260ad23921180715c64F31423875449C84b796',
  },
  PublicResolver: {
    '10': '0x461f5D15E66d47f51760f15E721a2Ffd9c105a20',
    '5': '0x461f5D15E66d47f51760f15E721a2Ffd9c105a20',
  },
  ENSRegistry: {
    '10': '0x198AC64bb74146913d5a27229CD495CC2faDD5B4',
    '5': '0x198AC64bb74146913d5a27229CD495CC2faDD5B4',
  },
  ReverseRegistrar: {
    '10': '0xd29E89c4151ca7972fC4665Ffe7B2a23357Bcbf7',
    '5': '0xd29E89c4151ca7972fC4665Ffe7B2a23357Bcbf7',
  },
  UniversalResolver: {
    '10': '0xd06eb2aD389f09820894577d655cF033d2FDb376',
    '5': '0x212D0282aA469F766108d9Bd770aEC70eBA91CbD',
  },
  BulkRenewal: {
    '10': '0x65495fe08192fF1A503C89fF3Ccf21E0CA8Ce214',
    '5': '0x65495fe08192fF1A503C89fF3Ccf21E0CA8Ce214',
  },
  /* eslint-enable @typescript-eslint/naming-convention */
}

export type ContractAddressFetch = (contractName: ContractName) => string

export const getContractAddress = (networkId: SupportedNetworkId) =>
  ((contractName: ContractName) => {
    try {
      return typeof addresses[contractName] === 'string'
        ? addresses[contractName]
        : addresses[contractName][networkId]
    } catch {
      throw new Error(
        `No address for contract ${contractName} on network ${networkId}`,
      )
    }
  }) as ContractAddressFetch
