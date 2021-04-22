class Cube {
  public X: number;
  public Y: number;
  public Z: number;

  constructor(X: number, Y: number, Z: number) {
    this.X = X;
    this.Y = Y;
    this.Z = Z;
  }

  public clone(): Cube {
    return Object.create(this);
  }
}

function Client() {
  let cube1 = new Cube(1, 2, 3);
  cube1.Z = 1;
  cube1.Y = 2;
  cube1.X = 3;

  let cube2 = cube1.clone();
  cube2.Z = 10;
  console.log(cube1.Z);
  console.log(cube2.Z);

  console.log(cube1.Z === cube2.Z);
}

Client();
