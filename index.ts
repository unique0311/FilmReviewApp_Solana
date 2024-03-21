import { Keypair, Connection, clusterApiUrl, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log("✅ Generated keypair!!");

console.log("The secret key is ",keypair.secretKey);
console.log("The public key is ",keypair.publicKey.toBase58());

//Connected in devnet
// const connection = new Connection(clusterApiUrl("devnet")); 
// console.log("Connected in devnet");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

//Read from the network
const address = new PublicKey('7UdRZX6GhNnodj8P8Q17DHvbbs94wRSiWU8X9qbQ7tE2');
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;  // 1 SOl = 1 billion lamports

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL.`);