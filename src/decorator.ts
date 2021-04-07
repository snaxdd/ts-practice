interface IGameConsole {
  playGames(): void;
}

class GameConsole implements IGameConsole {
  constructor(public storage: number, public ram: number) {}

  playGames(): void {
    console.log('Playing game ...');
  }
}

class Decorator implements IGameConsole {
  protected gameConsole: IGameConsole;

  constructor(gameConsole: IGameConsole) {
    this.gameConsole = gameConsole;
  }

  playGames() {
    return this.gameConsole.playGames();
  }
}

class PlayVideo extends Decorator {
  public playVideo(): void {
    console.log('Playing video ...');
  }
}

class SonyPlaystation implements IGameConsole {
  public storage: number;
  public ram: number;

  constructor(storage: number, ram: number) {
    this.storage = storage;
    this.ram = ram;
  }

  playGames(): void {
    console.log('Sony play games');
  }
}

let sony = new SonyPlaystation(200, 100);
sony.playGames();
let newSony = new PlayVideo(sony);
newSony.playVideo();
console.log(sony.ram);
console.log(sony.storage);
