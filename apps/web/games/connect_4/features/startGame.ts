import { DEFAULT_PARTICIPATION_FEE } from 'zknoid-chain-dev/dist/src/engine/LobbyManager';
import { getEnvContext } from '@/lib/envContext';
import { PublicKey, UInt64 } from 'o1js';
import { GameState } from '../lib/gameState';
import { api } from '@/trpc/react';
import { useStore } from 'zustand';
import { useSessionKeyStore } from '@/lib/stores/sessionKeyStorage';
import { useMinaBridge } from '@/lib/stores/protokitBalances';
import { client } from 'zknoid-chain-dev';
import { useNetworkStore } from '@/lib/stores/network';
import { type PendingTransaction } from '@proto-kit/sequencer';

export const useStartGame = (competitionID: string, setGameState: any) => {
  const gameStartedMutation = api.logging.logGameStarted.useMutation();
  const sessionPublicKey = useStore(useSessionKeyStore, (state) =>
    state.getSessionKey()
  ).toPublicKey();
  const bridge = useMinaBridge();
  const networkStore = useNetworkStore();
  const progress = api.progress.setSolvedQuests.useMutation();

  return async () => {
    if (await bridge(DEFAULT_PARTICIPATION_FEE.toBigInt())) return;

    gameStartedMutation.mutate({
      gameId: 'connect-4',
      userAddress: networkStore.address ?? '',
      envContext: getEnvContext(),
    });

    const connect4Game = client.runtime.resolve('Connect4Game');

    const tx = await client.transaction(
      PublicKey.fromBase58(networkStore.address!),
      async () => {
        connect4Game.register(
          sessionPublicKey,
          UInt64.from(Math.round(Date.now() / 1000))
        );
      }
    );

    await tx.sign();
    await tx.send();

    await progress.mutateAsync({
      userAddress: networkStore.address!,
      section: 'CONNECT4GAME',
      id: 0,
      txHash: JSON.stringify((tx.transaction! as PendingTransaction).toJSON()),
      roomId: competitionID,
      envContext: getEnvContext(),
    });

    await progress.mutateAsync({
      userAddress: networkStore.address!,
      section: 'CONNECT4GAME',
      id: 1,
      txHash: JSON.stringify((tx.transaction! as PendingTransaction).toJSON()),
      roomId: competitionID,
      envContext: getEnvContext(),
    });

    setGameState(GameState.MatchRegistration);
  };
};