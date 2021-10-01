// test/Airdrop.js
// Load dependencies
const { id } = require('@ethersproject/hash');
const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');
const Web3 = require('web3');

const OWNER_ADDRESS = ethers.utils.getAddress("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

const DECIMALS = 2;

const AMT = 150

///////////////////////////////////////////////////////////
// SEE https://hardhat.org/tutorial/testing-contracts.html
// FOR HELP WRITING TESTS
// USE https://github.com/gnosis/mock-contract FOR HELP
// WITH MOCK CONTRACT
///////////////////////////////////////////////////////////

// Start test block
describe('BtcChainData', function () {
    
    // Preparation
    
    before(async function () {
        BtcChainData = await ethers.getContractFactory("BtcChainData");
        // EthChainData = ...
    });

    beforeEach(async function () {
        btcContract = await BtcChainData.deploy({
            previousBlockHash: "0x00000000000000000008ba2d96eb244acc01ba5a7940f887607d41088312a194",
            merkleRootHash: "0x98ba29fefa83f32aa9430ae6289ecf04f343de3d58f8bd5d8373d3eed8f486c9",
            nonce: 1
        })
        await btcContract.deployed()
    });

    // Test cases

    describe("getLatestHeaders", function () {
        it('prints output', async () => {
            let res = await btcContract.getLatestHeaders()
            console.log(res)
        }) 
    });
});