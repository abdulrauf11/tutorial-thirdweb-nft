import sdk from './1-init-sdk.js';
import { readFileSync } from 'fs';

import dotenv from 'dotenv';
dotenv.config();

const app = sdk.getAppModule('INSERT_APP_ADDRESS');

(async () => {
  try {
    const nftModule = await app.deployNftModule({
      // The collection's name, ex. CryptoPunks
      name: 'COLLECTION NAME',
      // A description for the collection.
      description: 'COLLECTION DESCRIPTION',
      // The image for the collection that will show up on OpenSea.
      image: readFileSync('assets/collection.png'),
      // The amount of royalty collected on all royalties represented as basis points. The default is 0 (no royalties).
      // 1 basis point = 0.01%
      // For example: if this value is 100, then the royalty is 1% of the total sales.
      sellerFeeBasisPoints: 0,
      // The address of the royalty recipient. All royalties will be sent to this address.
      feeRecipient: process.env.WALLET_ADDRESS,
      // The symbol for the NFT Collection
      symbol: 'JS',
    });

    console.log(
      '✅ Successfully deployed nft module, address:',
      nftModule.address
    );
  } catch (error) {
    console.log('failed to deploy nft module', error);
  }
})();
