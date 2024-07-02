import { KeyClient, WalletClient, ShinamiWalletSigner  } from "@shinami/clients/aptos";


const WALLET_ID = "id_2"; // "{{walletID}}";
const WALLET_SECRET = "secret_2";// "{{walletSecret}}";

const DEVNET_WALLET_KEY = "aptos_testnet_b8d61d8a759e83dbca877c7c93a444eb";

const KEY_RPC_URL_DEVNET = "https://api.dev.shinami.com/aptos/key/v1";
const WALLET_RPC_URL_DEVNET = "https://api.dev.shinami.com/aptos/wallet/v1";

const keyClient = new KeyClient(DEVNET_WALLET_KEY, KEY_RPC_URL_DEVNET);
const walletClient = new WalletClient(DEVNET_WALLET_KEY, WALLET_RPC_URL_DEVNET);

// const sessionToken = await keyClient.createSession(WALLET_ID);
// console.log(sessionToken);

// const createWalResp = await walletClient.createWallet(WALLET_ID, sessionToken);
// console.log(createWalResp);

const signer = new ShinamiWalletSigner(
    WALLET_ID,
    walletClient,
    WALLET_SECRET,
    keyClient
);


const INITIALIZE_ON_CHAIN = false;
const createWalletResp = await signer.tryCreate(INITIALIZE_ON_CHAIN);



