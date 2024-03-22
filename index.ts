import {
  Keypair,
  Connection,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
  SystemProgram,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// const keypair = Keypair.generate();

// console.log("✅ Generated keypair!!");

// console.log("The secret key is ", keypair.secretKey);
// console.log("The public key is ", keypair.publicKey.toBase58());

// //Connected in devnet
// // const connection = new Connection(clusterApiUrl("devnet"));
// // console.log("Connected in devnet");

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// //Read from the network
// const address = new PublicKey("7UdRZX6GhNnodj8P8Q17DHvbbs94wRSiWU8X9qbQ7tE2");
// const balance = await connection.getBalance(address);
// const balanceInSol = balance / LAMPORTS_PER_SOL; // 1 SOl = 1 billion lamports

// console.log(`The balance of the account at ${address} is ${balanceInSol} SOL.`);

const suppliedToPubkey = process.argv[2] || null;

if (!suppliedToPubkey) {
  console.log("Please provide a publi key to send to");
  process.exit(1);
}

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`suppliedToPubkeyL: ${suppliedToPubkey}`);

const toPubkey = new PublicKey(suppliedToPubkey);

console.log("toPubKey", toPubkey);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log(
  "Loaded our own tekpair, the destination public key, and connected to Solana"
);
