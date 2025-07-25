// Déclarations globales pour le front TypeScript (non inclus dans le JS final)

//--> Permet d'ajouter des fonctions utilisable dans la console

//Virer les useless plus tard, beaucoup sont la pour le debug
declare global
{
	interface Window
	{
		joinOrCreateRoom: (maxPlayers: number, isLocalGame?: boolean) => Promise<void>;
		sendPing: () => void;
		sendMessage: (type: MessageType, data: MessageData) => void;
		controlledPaddle: 'left' | 'right' | 'A' | 'B' | 'C' | null;
		isLocalGame: boolean;
		setIsLocalGame: (isLocal: boolean) => void;
		_pongControlsRoomJoinedListener: boolean;
		sendKeyEvent: (type: 'keydown' | 'keyup', player: 'left' | 'right' | 'A' | 'B' | 'C', direction: 'up' | 'down') => void;
	}
}
export {};
