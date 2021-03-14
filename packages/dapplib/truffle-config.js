require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'install loan off seed drift renew noble smart include problem forward sure'; 
let testAccounts = [
"0x28a2fe926c1ea37d8607861165bac531290e822dc24d7222b24c6bbf1872f893",
"0x32e8486c590f747aaa0a65a980b125ccc7044ad1c1393f2c46150aba67c9244a",
"0xc29f584e42d84242cf8e371c468fba2cd1f143df1f87745817fbce27b1d7a02c",
"0x7642b8efffd00367e76e061b25c5ac1fd7bc35fc75c2cdb03118756dab8f35f4",
"0xb33de228abed6d050300172a1b650ec524b040907a28622eba534a134e7b6214",
"0x56f08d5ddeccf35baf94826f2840defe91e4ae64340b0bf6f529085c8dfd3ed1",
"0x6c19f26e38927d9d7ce00c441f20dd24320cdcdede35374e160b8c31ee1bb847",
"0x1356df08f3f5f682369fd4707fe979545a4cb0ac5f0d7494e5d2b3f1d8fee38d",
"0xb836dcd57a45a1c37074153f0d0176746be73925863f12e8984dcc22346fd4fc",
"0x27919d6375c91df4537887183a00a47ff0be76161cfb0570d018edd067ad92c8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

