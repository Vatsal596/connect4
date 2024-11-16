# Connect4 X ZkNoid

"Connect4" is a classic two-player strategy game where players take turns dropping colored discs into a vertical grid. The goal is to connect four of your discs in a row — horizontally, vertically, or diagonally — before your opponent does. By integrating with ZkNoid, this version of Connect4 ensures secure, provable gameplay with gasless transactions, all powered by the Mina Protocol.

This project was built during the EthBangkok Hackathon to demonstrate the power of ZK (Zero-Knowledge) technology in enhancing trust, transparency, and seamless gaming experiences.

## What is ZkNoid?

ZkNoid is a gaming platform for ZK games built on the [Mina Protocol](https://minaprotocol.com/). It provides a modular framework for developers to create and deploy provable games with secure gameplay and efficient transaction processes.

🚀 Highlights:
- Founded during a hackathon in Istanbul, ZkNoid has unified the gaming ecosystem on Mina Protocol.
- Grand prize winner in the Mina Navigators Program and hosted a successful testnet event.
- A gaming store for provable games with infrastructure for developers to deploy games seamlessly.

Learn more about ZkNoid:
- [Website](https://www.zknoid.io/)
- [Games Store](https://app.zknoid.io/)
- [Documentation](https://docs.zknoid.io/)
- [Blog](https://zknoid.medium.com/)

---

## Get Started

If you'd like to create your own provable game, explore the [Hacker's Guide](https://zknoid.medium.com/building-a-simple-zknoid-game-from-scratch-hackers-guide-0898bf30fdfb).

## Repository Overview

This repository contains the code for Connect4, including game logic, ZK integration, and frontend and backend components. Built using ZkNoid's modular framework, this project leverages ZK proofs to ensure fair gameplay without exposing strategies.

---

## Setup

To run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/YourGithubUsername/connect4
cd connect4

# Ensure you are using the correct Node.js version
# If you don't have nvm installed, install it first
nvm use

# Install dependencies
pnpm install

# Start the development environment
pnpm env:inmemory dev
