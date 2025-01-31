import { ProviderType } from '../chainkit/providertypes.js';

export const all = {};
all['redstone'] = {
  name: 'redstone',
  type: ProviderType.Web3AuthModal,
  fetch: true
};

/*
all['op-garnet'] = {
  name: 'op-garnet',
  type: ProviderType.Web3AuthModal,
  fetch: true
};

all['op-garnet-rpc'] = {
  id: 'op-garnet-rpc',
  name: 'op-garnet',
  type: ProviderType.NamedRPC,
  fetch: true
};

all['op-sepolia'] = {
  name: 'op-sepolia',
  type: ProviderType.Web3AuthModal,
  fetch: true
};

all['op-sepolia-rpc'] = {
  id: 'op-sepolia-rpc',
  name: 'op-sepolia',
  type: ProviderType.NamedRPC,
  fetch: true
};*/

all['local'] = {
  name: 'local',
  type: ProviderType.Hardhat,
  note: 'this address is for the 10th well known local account',
  arenaDeployer: 'local:10',
  polling: 1000,
  description: 'local connection to a (probably) simulated chain for automated testing',
  url: 'http://127.0.0.1:8545/',
  chainId: 22300,

  // info becomes connectionInfo when a JsonRpcProvider is used. The url is taken from the top level cfg
  info: {
    // skipFetchSetup is crucial. hardhat connections don't work if the
    // default fetch setup is applied.  the default fetch request options
    // include referrer: client. And for reasons I don't understand, this
    // causes ERR_INVALID_URL. All of the other defaults, including cors &
    // same-origin appear to be fine
    skipFetchSetup: true
  }
};

export const testNetworks = {
  local: all.local
};
