interface ICompaniesStrategy {
  greetings(greetingsString: string): string;
}

class AppleStrategy implements ICompaniesStrategy {
  public greetings(greetingsString: string): string {
    return `Apple ${greetingsString}`;
  }
}

class SamsungStrategy implements ICompaniesStrategy {
  public greetings(greetingsString: string): string {
    return `Samsung ${greetingsString}`;
  }
}

class CompaniesGreetings {
  private strategy: ICompaniesStrategy;

  constructor(strategy: ICompaniesStrategy) {
    this.strategy = strategy;
  }

  public setNewStrategy(strategy: ICompaniesStrategy): void {
    this.strategy = strategy;
  }

  public greetingCompany() {
    console.log(this.strategy.greetings('the best company in the world!'));
  }
}

let context = new CompaniesGreetings(new AppleStrategy());
context.greetingCompany();
context.setNewStrategy(new SamsungStrategy());
context.greetingCompany();
