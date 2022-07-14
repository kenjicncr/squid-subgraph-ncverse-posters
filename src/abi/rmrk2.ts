import * as ethers from "ethers";

export const abi = new ethers.utils.Interface(getJsonAbi());

export interface Approval0Event {
  owner: string;
  approved: string;
  tokenId: ethers.BigNumber;
}

export interface ApprovalForAll0Event {
  owner: string;
  operator: string;
  approved: boolean;
}

export interface OwnershipTransferred0Event {
  previousOwner: string;
  newOwner: string;
}

export interface ResourceAccepted0Event {
  tokenId: ethers.BigNumber;
  resourceId: ethers.BigNumber;
}

export interface ResourceAddedToToken0Event {
  tokenId: ethers.BigNumber;
  resourceId: ethers.BigNumber;
}

export interface ResourceCustomDataAdded0Event {
  resourceId: ethers.BigNumber;
  customResourceId: ethers.BigNumber;
}

export interface ResourceCustomDataRemoved0Event {
  resourceId: ethers.BigNumber;
  customResourceId: ethers.BigNumber;
}

export interface ResourceCustomDataSet0Event {
  resourceId: ethers.BigNumber;
  customResourceId: ethers.BigNumber;
}

export interface ResourceOverwriteProposed0Event {
  tokenId: ethers.BigNumber;
  resourceId: ethers.BigNumber;
  overwrites: ethers.BigNumber;
}

export interface ResourceOverwritten0Event {
  tokenId: ethers.BigNumber;
  overwritten: ethers.BigNumber;
}

export interface ResourcePrioritySet0Event {
  tokenId: ethers.BigNumber;
}

export interface ResourceRejected0Event {
  tokenId: ethers.BigNumber;
  resourceId: ethers.BigNumber;
}

export interface ResourceSet0Event {
  resourceId: ethers.BigNumber;
}

export interface Transfer0Event {
  from: string;
  to: string;
  tokenId: ethers.BigNumber;
}

export interface EvmEvent {
  data: string;
  topics: string[];
}

export const events = {
  "Approval(address,address,uint256)":  {
    topic: abi.getEventTopic("Approval(address,address,uint256)"),
    decode(data: EvmEvent): Approval0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("Approval(address,address,uint256)"),
        data.data || "",
        data.topics
      );
      return  {
        owner: result[0],
        approved: result[1],
        tokenId: result[2],
      }
    }
  }
  ,
  "ApprovalForAll(address,address,bool)":  {
    topic: abi.getEventTopic("ApprovalForAll(address,address,bool)"),
    decode(data: EvmEvent): ApprovalForAll0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ApprovalForAll(address,address,bool)"),
        data.data || "",
        data.topics
      );
      return  {
        owner: result[0],
        operator: result[1],
        approved: result[2],
      }
    }
  }
  ,
  "OwnershipTransferred(address,address)":  {
    topic: abi.getEventTopic("OwnershipTransferred(address,address)"),
    decode(data: EvmEvent): OwnershipTransferred0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("OwnershipTransferred(address,address)"),
        data.data || "",
        data.topics
      );
      return  {
        previousOwner: result[0],
        newOwner: result[1],
      }
    }
  }
  ,
  "ResourceAccepted(uint256,uint64)":  {
    topic: abi.getEventTopic("ResourceAccepted(uint256,uint64)"),
    decode(data: EvmEvent): ResourceAccepted0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourceAccepted(uint256,uint64)"),
        data.data || "",
        data.topics
      );
      return  {
        tokenId: result[0],
        resourceId: result[1],
      }
    }
  }
  ,
  "ResourceAddedToToken(uint256,uint64)":  {
    topic: abi.getEventTopic("ResourceAddedToToken(uint256,uint64)"),
    decode(data: EvmEvent): ResourceAddedToToken0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourceAddedToToken(uint256,uint64)"),
        data.data || "",
        data.topics
      );
      return  {
        tokenId: result[0],
        resourceId: result[1],
      }
    }
  }
  ,
  "ResourceCustomDataAdded(uint64,uint128)":  {
    topic: abi.getEventTopic("ResourceCustomDataAdded(uint64,uint128)"),
    decode(data: EvmEvent): ResourceCustomDataAdded0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourceCustomDataAdded(uint64,uint128)"),
        data.data || "",
        data.topics
      );
      return  {
        resourceId: result[0],
        customResourceId: result[1],
      }
    }
  }
  ,
  "ResourceCustomDataRemoved(uint64,uint128)":  {
    topic: abi.getEventTopic("ResourceCustomDataRemoved(uint64,uint128)"),
    decode(data: EvmEvent): ResourceCustomDataRemoved0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourceCustomDataRemoved(uint64,uint128)"),
        data.data || "",
        data.topics
      );
      return  {
        resourceId: result[0],
        customResourceId: result[1],
      }
    }
  }
  ,
  "ResourceCustomDataSet(uint64,uint128)":  {
    topic: abi.getEventTopic("ResourceCustomDataSet(uint64,uint128)"),
    decode(data: EvmEvent): ResourceCustomDataSet0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourceCustomDataSet(uint64,uint128)"),
        data.data || "",
        data.topics
      );
      return  {
        resourceId: result[0],
        customResourceId: result[1],
      }
    }
  }
  ,
  "ResourceOverwriteProposed(uint256,uint64,uint64)":  {
    topic: abi.getEventTopic("ResourceOverwriteProposed(uint256,uint64,uint64)"),
    decode(data: EvmEvent): ResourceOverwriteProposed0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourceOverwriteProposed(uint256,uint64,uint64)"),
        data.data || "",
        data.topics
      );
      return  {
        tokenId: result[0],
        resourceId: result[1],
        overwrites: result[2],
      }
    }
  }
  ,
  "ResourceOverwritten(uint256,uint64)":  {
    topic: abi.getEventTopic("ResourceOverwritten(uint256,uint64)"),
    decode(data: EvmEvent): ResourceOverwritten0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourceOverwritten(uint256,uint64)"),
        data.data || "",
        data.topics
      );
      return  {
        tokenId: result[0],
        overwritten: result[1],
      }
    }
  }
  ,
  "ResourcePrioritySet(uint256)":  {
    topic: abi.getEventTopic("ResourcePrioritySet(uint256)"),
    decode(data: EvmEvent): ResourcePrioritySet0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourcePrioritySet(uint256)"),
        data.data || "",
        data.topics
      );
      return  {
        tokenId: result[0],
      }
    }
  }
  ,
  "ResourceRejected(uint256,uint64)":  {
    topic: abi.getEventTopic("ResourceRejected(uint256,uint64)"),
    decode(data: EvmEvent): ResourceRejected0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourceRejected(uint256,uint64)"),
        data.data || "",
        data.topics
      );
      return  {
        tokenId: result[0],
        resourceId: result[1],
      }
    }
  }
  ,
  "ResourceSet(uint64)":  {
    topic: abi.getEventTopic("ResourceSet(uint64)"),
    decode(data: EvmEvent): ResourceSet0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("ResourceSet(uint64)"),
        data.data || "",
        data.topics
      );
      return  {
        resourceId: result[0],
      }
    }
  }
  ,
  "Transfer(address,address,uint256)":  {
    topic: abi.getEventTopic("Transfer(address,address,uint256)"),
    decode(data: EvmEvent): Transfer0Event {
      const result = abi.decodeEventLog(
        abi.getEvent("Transfer(address,address,uint256)"),
        data.data || "",
        data.topics
      );
      return  {
        from: result[0],
        to: result[1],
        tokenId: result[2],
      }
    }
  }
  ,
}

function getJsonAbi(): any {
  return [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "NCRV2_",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "NCRTicket_",
          "type": "address"
        },
        {
          "internalType": "string[]",
          "name": "initMetadataURIs",
          "type": "string[]"
        },
        {
          "internalType": "string[]",
          "name": "mimeTypes",
          "type": "string[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        }
      ],
      "name": "ResourceAccepted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        }
      ],
      "name": "ResourceAddedToToken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "customResourceId",
          "type": "uint128"
        }
      ],
      "name": "ResourceCustomDataAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "customResourceId",
          "type": "uint128"
        }
      ],
      "name": "ResourceCustomDataRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint128",
          "name": "customResourceId",
          "type": "uint128"
        }
      ],
      "name": "ResourceCustomDataSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "overwrites",
          "type": "uint64"
        }
      ],
      "name": "ResourceOverwriteProposed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "overwritten",
          "type": "uint64"
        }
      ],
      "name": "ResourceOverwritten",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ResourcePrioritySet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        }
      ],
      "name": "ResourceRejected",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        }
      ],
      "name": "ResourceSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "acceptResource",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "internalType": "uint128",
          "name": "customResourceId",
          "type": "uint128"
        }
      ],
      "name": "addCustomDataToResource",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "id",
          "type": "uint64"
        },
        {
          "internalType": "string",
          "name": "metadataURI",
          "type": "string"
        },
        {
          "internalType": "uint128[]",
          "name": "customRefs",
          "type": "uint128[]"
        }
      ],
      "name": "addResourceEntry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "overWrites",
          "type": "uint64"
        }
      ],
      "name": "addResourceToToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "numTickets",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "aNum",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bcdNum",
          "type": "uint256"
        }
      ],
      "name": "calculateCostNetTickets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "costNetTickets",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "ticketsUsed",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        }
      ],
      "name": "check136claims",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "hasClaimed",
          "type": "bool[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        }
      ],
      "name": "fetchMimeType",
      "outputs": [
        {
          "internalType": "string",
          "name": "mimeType",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getActiveResourcePriorities",
      "outputs": [
        {
          "internalType": "uint16[]",
          "name": "",
          "type": "uint16[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getActiveResources",
      "outputs": [
        {
          "internalType": "uint64[]",
          "name": "",
          "type": "uint64[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllResources",
      "outputs": [
        {
          "internalType": "uint64[]",
          "name": "",
          "type": "uint64[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "internalType": "uint128",
          "name": "customResourceId",
          "type": "uint128"
        }
      ],
      "name": "getCustomResourceData",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getFallbackURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getFullPendingResources",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "id",
              "type": "uint64"
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            },
            {
              "internalType": "uint128[]",
              "name": "custom",
              "type": "uint128[]"
            }
          ],
          "internalType": "struct IMultiResource.Resource[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getFullResources",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "id",
              "type": "uint64"
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            },
            {
              "internalType": "uint128[]",
              "name": "custom",
              "type": "uint128[]"
            }
          ],
          "internalType": "struct IMultiResource.Resource[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getPendingResObjectByIndex",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "id",
              "type": "uint64"
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            },
            {
              "internalType": "uint128[]",
              "name": "custom",
              "type": "uint128[]"
            }
          ],
          "internalType": "struct IMultiResource.Resource",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getPendingResources",
      "outputs": [
        {
          "internalType": "uint64[]",
          "name": "",
          "type": "uint64[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getResObjectByIndex",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "id",
              "type": "uint64"
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            },
            {
              "internalType": "uint128[]",
              "name": "custom",
              "type": "uint128[]"
            }
          ],
          "internalType": "struct IMultiResource.Resource",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        }
      ],
      "name": "getResource",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint64",
              "name": "id",
              "type": "uint64"
            },
            {
              "internalType": "string",
              "name": "metadataURI",
              "type": "string"
            },
            {
              "internalType": "uint128[]",
              "name": "custom",
              "type": "uint128[]"
            }
          ],
          "internalType": "struct IMultiResource.Resource",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        }
      ],
      "name": "getResourceOverwrites",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getUnclaimed136Tokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "unclaimed",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        }
      ],
      "name": "isTokenEnumeratedResource",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "ticketIds",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "aNum",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bNum",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cNum",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "dNum",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        }
      ],
      "name": "mint136",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isPaused",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "rejectAllResources",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "rejectResource",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "removeCustomDataFromResource",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "internalType": "uint128",
          "name": "customResourceId",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "setCustomResourceData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "fallbackURI",
          "type": "string"
        }
      ],
      "name": "setFallbackURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "state",
          "type": "bool"
        }
      ],
      "name": "setPaused",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint16[]",
          "name": "priorities",
          "type": "uint16[]"
        }
      ],
      "name": "setPriority",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "resourceId",
          "type": "uint64"
        },
        {
          "internalType": "bool",
          "name": "state",
          "type": "bool"
        }
      ],
      "name": "setTokenEnumeratedResource",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenURIAtIndex",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint128",
          "name": "customResourceId",
          "type": "uint128"
        },
        {
          "internalType": "bytes",
          "name": "customResourceValue",
          "type": "bytes"
        }
      ],
      "name": "tokenURIForCustomValue",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "walletOfOwner",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
}
