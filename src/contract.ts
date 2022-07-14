import { Store } from "@subsquid/typeorm-store";
import { ethers, BigNumber } from "ethers";
import * as erc721 from "./abi/erc721";
import * as rmrk2 from "./abi/rmrk2";
import { Contract } from "./model";

export const CHAIN_NODE = "wss://wss.api.moonriver.moonbeam.network";

export const contract = new ethers.Contract(
  "0xa90f3fc517d9126976dd59c5efec8de447f7ff7e",
  rmrk2.abi,
  new ethers.providers.WebSocketProvider(CHAIN_NODE)
);

export function createContractEntity(): Contract {
  return new Contract({
    id: contract.address,
    name: "NCVerse MultiResource Posters",
    symbol: "NCPOSTER",
    totalSupply: 741n,
  });
}

let contractEntity: Contract | undefined;

export async function getContractEntity(store: Store): Promise<Contract> {
  if (contractEntity == null) {
    contractEntity = await store.get(Contract, contract.address);
    if (contractEntity == null) {
      contractEntity = createContractEntity();
      await store.insert(contractEntity);
    }
  }
  return contractEntity;
}

export async function getTokenURI(tokenId: string): Promise<string> {
  return retry(async () => timeout(contract.tokenURI(tokenId)));
}

export async function getFullResources(tokenId: string): Promise<Array<any>> {
  return retry(async () => timeout(contract.getFullResources(tokenId)));
}

async function timeout<T>(res: Promise<T>, seconds = 30): Promise<T> {
  return new Promise((resolve, reject) => {
    let timer: NodeJS.Timeout | undefined = setTimeout(() => {
      timer = undefined;
      reject(new Error(`Request timed out in ${seconds} seconds`));
    }, seconds * 1000);

    res
      .finally(() => {
        if (timer != null) {
          clearTimeout(timer);
        }
      })
      .then(resolve, reject);
  });
}

async function retry<T>(promiseFn: () => Promise<T>, attempts = 3): Promise<T> {
  for (let i = 0; i < attempts; i += 1) {
    try {
      return await promiseFn();
    } catch (err) {
      console.log(err);
    }
  }
  throw new Error(`Error after ${attempts} attempts`);
}
