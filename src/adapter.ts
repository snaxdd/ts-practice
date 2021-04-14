class PrintJPG {
  public jpgPrinter(): string {
    return 'Print JPG ...';
  }
}

class PrintSVG {
  public svgPrinter(): string {
    return 'Print SVG ...';
  }
}

class Adapter extends PrintJPG {
  private svgAdapter: PrintSVG;

  constructor(svgAdapter: PrintSVG) {
    super();
    this.svgAdapter = svgAdapter;
  }

  public jpgPrinter(): string {
    return this.svgAdapter.svgPrinter();
  }
}

function client(target: PrintJPG) {
  console.log(target.jpgPrinter());
}

let jpg = new PrintJPG();

client(jpg);

let svg = new PrintSVG();
let adapter = new Adapter(svg);

client(adapter);
