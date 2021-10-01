//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

struct BlockHeader {
  bytes32 previousBlockHash;
  bytes32 merkleRootHash;
  //uint32 time;
  uint32 nonce;
} 

contract BtcChainData {


  BlockHeader[] private headers;


  constructor(BlockHeader memory genesisHeader) {
    headers.push(genesisHeader);
  }


  function getLatestHeaders() public view returns(BlockHeader[] memory) {
    return headers;
  }


  function appendHeader(BlockHeader memory newHeader) public {
    
    headers.push(newHeader);

    if (headers.length > 10) {
      delete headers[0];
    }

  }

}
