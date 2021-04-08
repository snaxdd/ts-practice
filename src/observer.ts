import axios from 'axios';

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(dataType: string): void;
}

interface Observer {
  update(subject: Subject, dataType: string): void;
}

class DataParser implements Subject {
  public dataTypes: any;
  public currentType: string;
  public currentData: object[];
  private observers: Observer[] = [];

  constructor() {
    this.dataTypes = {
      POSTS: 'posts',
      USERS: 'users',
    };
    this.currentType = '';
    this.currentData = [{}];
  }

  public attach(observer: Observer): void {
    let isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('DataParser: наблюдатель уже существует!');
    }

    this.observers.push(observer);
    console.log('Data parser: наблюдатель успешно добавлен!');
  }

  public detach(observer: Observer): void {
    let observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Data parser: наблюдатель не найден!');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Data parser: наблюдатель удален!');
  }

  public notify(dataType: string): void {
    for (let observer of this.observers) {
      observer.update(this, dataType);
    }
  }

  public async fetchingPosts() {
    console.log('Data parser: Загрузка данных...');
    let counter = 0;
    let interval = setInterval(async () => {
      let randomizer = Math.round(Math.random());
      this.currentType = randomizer
        ? this.dataTypes.POSTS
        : this.dataTypes.USERS;

      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.currentType}/`
      );
      if (response.status === 200) {
        this.currentData = response.data;
        this.notify(this.currentType);
      } else {
        return console.log(
          `Error: ${response.status} - ${response.statusText}`
        );
      }

      counter++;
      if (counter === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }
}

class UsersObserver implements Observer {
  public update(subject: DataParser, dataType: string): void {
    if (dataType === 'users') {
      let data = subject.currentData.filter((_, index) => index < 3);
      console.log('Получаем пользователей');
      console.log(data);
    }
  }
}

class PostsObserver implements Observer {
  public update(subject: DataParser, dataType: string): void {
    if (dataType === 'posts') {
      let data = subject.currentData.filter((_, index) => index < 3);
      console.log('Получаем посты');
      console.log(data);
    }
  }
}

let dataParser = new DataParser();
let usersObserver = new UsersObserver();
dataParser.attach(usersObserver);

let postsObserver = new PostsObserver();
dataParser.attach(postsObserver);

dataParser.fetchingPosts();
