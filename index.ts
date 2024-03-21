import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log("✅ Generated keypair!!");

console.log("The secret key is ",keypair.secretKey);
console.log("The public key is ",keypair.publicKey.toBase58());