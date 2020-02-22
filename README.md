<img src="/logo.png" alt="logo" height="200" />

# `rns-manager-react`

[![CircleCI](https://circleci.com/gh/rnsdomains/rns-manager-react.svg?style=svg)](https://circleci.com/gh/circrnsdomains/rns-manager-react)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/rnsdomains/rns-manager-react.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/rnsdomains/rns-manager-react/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/rnsdomains/rns-manager-react.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/rnsdomains/rns-manager-react/context:javascript)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rnsdomains_rns-manager-react&metric=alert_status)](https://sonarcloud.io/dashboard?id=rnsdomains_rns-manager-react)

Live at https://beta.manager.rns.rifos.org

## Setup

Install dependencies:
```
yarn
```

## Develop

Run RNS in a local blockchain, and connect RNS Manager to this local network.

```
git clone https://github.com/rsksmart/rns-suite
cd rns-suite
npm install
truffle develop
truffle(develop)> migrate
```

Copy Addresses to `src/config/contracts.local.json`.

## Run the RNS Manager locally

The manager can be run in mainnet, testnet, or on a local network. It uses .env files for the configuration of each network.

### Connect to a local RSK Network

A full RNS suite can be run on top of a local blockchain via [`rns-suite`](https://github.com/rnsdomains/rns-suite).

#### Configuration

Set the contract addresses in `/src/app/config/contracts.local.json`. The contract names are the same as the JSON variable name except for the following:

- `rif` variable is the `ERC677` contract
- `registrar` variable is the `TokenRegistrar` contract

If you are not using `localhost:8545` as your network, change the .env variable in `.env.local`

#### Run command

```
yarn start
```

### Connect to the RSK Mainnet

#### Run command
```
yarn start:mainnet
```

#### Build command
```
yarn build:mainnet
```

### Connect to the RSK Testnet

#### Run command

```
yarn start:testnet
```

#### Build command
```
yarn build:testnet
```

## Testing

Run the linter and a single test run:

```
yarn test
```

Run a test watcher:

```
yarn test:watch
```

Update snapshots and run watcher:
```
yarn test:watch -u
```

## Running production builds

Mainnet:
```
docker build -t rns-manager-mainnet . -f mainnet.Dockerfile
docker run -d --name rns-manager-mainnet -p 5000:5000 rns-manager-mainnet
```

Testnet:
```
docker build -t rns-manager-testnet . -f testnet.Dockerfile
docker run -d --name rns-manager-testnet -p 5001:5001 rns-manager-testnet
```

---

## Related links

- [RSK](https://rsk.co)
    - [Docs](https://github.com/rsksmart/rskj/wiki)
- [RIF](https://rifos.org)
    - [Docs](https://www.rifos.org/documentation/)
    - [Whitepaper](https://docs.rifos.org/rif-whitepaper-en.pdf)
    - [Testnet faucet](https://faucet.rifos.org)
- RNS
    - [Docs](https://docs.rns.rifos.org)
    - [Manager](https://rns.rifos.org)
    - [Testnet registrar](https://testnet.rns.rifos.org)
