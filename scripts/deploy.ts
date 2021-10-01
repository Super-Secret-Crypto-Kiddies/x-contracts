import { 
  Contract, 
  ContractFactory 
} from "ethers"
import { ethers } from "hardhat"

const main = async(): Promise<any> => {
  const BtcContract: ContractFactory = await ethers.getContractFactory("BtcChainData")
  const btcContract: Contract = await BtcContract.deploy({
    previousBlockHash: "0000000000000000000d7f2c93a754b23b86a9dc342cbdd14d1e0c606a296ada",
    merkleRootHash: "d1dcfeb710d820f16e8fc5439930fda2862071f61c143ffe73ca1a58a67bf4ee",
    nonce: 3492997540
  })

  await btcContract.deployed()
  console.log(`BTC Chain Header Data Contract deployed to: ${btcContract.address}`)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})
