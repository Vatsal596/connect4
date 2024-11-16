# Connect4 X ZkNoid

Connect4 is a modern reimagination of the classic two-player strategy game where players take turns dropping colored discs into a vertical seven-column, six-row grid. The objective is simple yet challenging: connect four of your discs in a row—horizontally, vertically, or diagonally—while blocking your opponent from doing the same.

By leveraging the power of **ZkNoid**, the game integrates Zero-Knowledge Proofs (ZKPs) to ensure secure, provable fairness while delivering gasless transactions. This project, built for the **EthBangkok Hackathon**, demonstrates the intersection of blockchain technology and gaming innovation.

---

## Why Choose Connect4 with ZkNoid?

### Benefits of Zk Integration:
1. **Provable Fairness**: Moves and outcomes are cryptographically verified without revealing the player's strategy.
2. **Gasless Transactions**: Enjoy seamless gameplay without transaction fees.
3. **Security**: Protect players from tampering or fraud with ZK technology.
4. **Transparency**: Every action is logged and verified, fostering trust among players.

### Features:
- Competitive leaderboard system for global rankings.
- Real-time matchmaking for a seamless multiplayer experience.
- Modular, scalable infrastructure for developers to extend or customize the game.

---

## What is ZkNoid?

ZkNoid is a modular ZK (Zero-Knowledge) gaming platform built on the [Mina Protocol](https://minaprotocol.com/). It provides the essential tools and infrastructure for developers to create and deploy provable games. ZkNoid's modularity allows developers to integrate Zero-Knowledge Proofs into game mechanics easily.

### Highlights:
- **Hackathon Provenance**: Originated at a hackathon in Istanbul, ZkNoid has grown into a robust ecosystem for ZK-based gaming.
- **Award-Winning Platform**: Grand prize winner in the Mina Navigators Program.
- **Developer-Friendly**: A modular framework that simplifies game deployment and integration with ZKPs.

Learn more about ZkNoid:
- [Website](https://www.zknoid.io/)
- [Games Store](https://app.zknoid.io/)
- [Documentation](https://docs.zknoid.io/)
- [Blog](https://zknoid.medium.com/)

---

## Repository Overview

This repository hosts the complete implementation of Connect4, featuring:
1. **Frontend**: A dynamic and responsive user interface for the game.
2. **Smart Contracts**: Zero-Knowledge-enabled contracts for move verification and game outcomes.
3. **Game Logic**: Core game functionality, implemented using ZkNoid's modular framework.
4. **Matchmaking**: Automated player pairing for real-time gameplay.
5. **Leaderboard System**: Persistent global rankings for competitive play.


---

## About Connect4

### Gameplay:
1. Two players take turns dropping their colored discs into the grid.
2. The game ends when a player connects four discs in a row (horizontally, vertically, or diagonally).
3. If the grid is filled without any player achieving a connect-four, the game ends in a draw.
4. Moves are validated using Zero-Knowledge Proofs to ensure fairness and prevent tampering.

### Innovations:
- **Zero-Knowledge Proofs**: Cryptographic verification ensures secure and transparent gameplay.
- **Matchmaking System**: Players are paired in real time based on availability and ranking.
- **Leaderboard Integration**: Persistent global rankings encourage competition.

---

## Deployment Instructions

### Local Setup

To set up and run Connect4 locally:

```bash
# Clone the repository
git clone https://github.com/Vatsal596/connect4
cd connect4

# Use the correct Node.js version
nvm use

# Install dependencies
pnpm install

# Start the development server
pnpm env:inmemory dev
