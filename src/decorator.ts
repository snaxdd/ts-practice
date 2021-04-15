interface IGameConsole {
  playGames(): void;
}

class GameConsole implements IGameConsole {
  public playGames(): void {
    console.log('Playing game');
  }
}

class BaseDecorator implements IGameConsole {
  private gameConsole: IGameConsole;

  constructor(console: IGameConsole) {
    this.gameConsole = console;
  }

  public playGames(): void {
    this.gameConsole.playGames();
  }
}

class PlayVideosAndPlayGamesDecorator extends BaseDecorator {
  public playVideos(): void {
    console.log('Playing video...');
  }
  public playGames() {
    super.playGames();
    this.playVideos();
  }
}

function clientCode(gameConsole: GameConsole): void {
  gameConsole.playGames();
}

let gameConsole = new GameConsole();
let newConsole = new PlayVideosAndPlayGamesDecorator(gameConsole);

clientCode(gameConsole);
clientCode(newConsole);
