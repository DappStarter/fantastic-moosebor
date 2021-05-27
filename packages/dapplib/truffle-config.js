require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million pumpkin hunt knee sun shell'; 
let testAccounts = [
"0x343583ad5917957e3635b1bdabcd8da14cf7a6c89aaca884799695b5cc5560f3",
"0x77f7aae436ce75deac5ae502bdf562db7333939f7bf313c2d346948f44ce2d13",
"0x4d4ba8051cef75e4150df2a8a55726d7e378940e7bed2373606d171c7efe5dfc",
"0xf27e95f3de082b09c32d26a911a3821333293eb67c3aa71ed308ea9f4cdf1bd0",
"0x42874119a30d4ab1dbafa0fc25be6b86510e7c8fbd481d6a9cf6616406d70df9",
"0x25ae440426917de59bf658451b28b8df217a9b7205a454d0d6c8d6a616309d2a",
"0xfe4c1ce29b2f0ffffa4ffba08f1e16f614e04f0aa09498c49246b3bb46baceaf",
"0x6a09b9fef824fecee50b3552d6ce2d9b8919eae2d654c4f132c064bbbe67a215",
"0x61621f6373938ef78842f031b27940d9e6a0b15285b4b69fa9dc87f17567ab5d",
"0x0483fc4f263c66da65ed5f4393b45651c1416a7185b029998ab29af3192b63d5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


