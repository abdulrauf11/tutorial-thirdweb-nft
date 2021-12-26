import sdk from './1-init-sdk.js';
import { readFileSync } from 'fs';

const nft = sdk.getNFTModule('INSERT_NFT_MODULE_ADDRESS');

(async () => {
  try {
    await nft.mint({
      name: 'NFT NAME',
      description: 'NFT DESCRIPTION',
      image: readFileSync('assets/nft.png'),
      properties: {},
    });
    console.log('✅ Successfully created a new NFT in the collection!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
