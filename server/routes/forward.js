const express = require('express');
const router = express.Router();

const util = require('ethereumjs-util');
const tx = require('ethereumjs-tx');
const lightwallet = require('eth-lightwallet');
const txutils = lightwallet.txutils;

const Nonce = 0

router.post('/', async (req, res, next) => {
    const {web3, contracts, addresses, MAIN_ADDR} = req.injections;
    const {dataSign, toAddr} = req.body;

    const txData = {
        nonce: (Nonce+=10),
        gasLimit: web3.utils.toHex(2000000),
        gasPrice: web3.utils.toHex(20000000000),
        to: toAddr,
        from: MAIN_ADDR,
        data: dataSign
    };

    return signTx(txData);

    console.log(identity.options.address);

    res.send({address: identity.options.address});
});

module.exports = router;