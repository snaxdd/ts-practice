interface IBraceletBuilder {
  addMetal(metal: string): void;
  addStones(stones: string): void;
  addTechnologies(tech: string): void;
}

class Bracelet {
  public metal: string = '';
  public stones: string = '';
  public technologies: string = '';

  public getProductInfo(): string {
    return `This product have ${this.metal}, ${this.stones}. ${this.technologies}`;
  }
}

class BraceletBuilder implements IBraceletBuilder {
  private product: Bracelet;

  constructor() {
    this.product = new Bracelet();
  }

  public addMetal(metal: string): void {
    this.product.metal = metal;
  }

  public addStones(stones: string) {
    this.product.stones = stones;
  }

  public addTechnologies(tech: string) {
    this.product.technologies = tech;
  }

  public reset(): void {
    this.product = new Bracelet();
  }

  public getProduct(): Bracelet {
    let product = this.product;
    this.reset();
    return product;
  }
}

function clientBuilder() {
  let builder = new BraceletBuilder();

  builder.addMetal('Gold');
  builder.addStones('Diamonds');
  builder.addTechnologies('Apple Tech');

  let goldBracelet = builder.getProduct();
  console.log('GOLD BRACELET : ', goldBracelet.getProductInfo());
}

clientBuilder();
