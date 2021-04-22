interface IController {
  notify(sender: object, type: string): void;
}

class BaseComponent {
  protected controller: IController;

  constructor(controller: IController) {
    this.controller = controller;
  }

  public setController(controller: IController): void {
    this.controller = controller;
  }
}

class Checkbox extends BaseComponent {
  public showFields(): void {
    this.controller.notify(this, 'checkbox_show_fields');
  }
}

class Fields extends BaseComponent {
  public showAllFields(): void {
    console.log('All fields opened...');
  }
}

class Controller implements IController {
  private checkbox: Checkbox;
  private fields: Fields;

  constructor(checkbox: Checkbox, fields: Fields) {
    this.checkbox = checkbox;
    this.fields = fields;
  }

  notify(sender: object, type: string) {
    switch (type) {
      case 'checkbox_show_fields':
        this.fields.showAllFields();
        break;
      default:
        return void 0;
    }
  }
}

// @ts-ignore
let checkbox = new Checkbox();
// @ts-ignore
let fields = new Fields();
let controller = new Controller(checkbox, fields);
checkbox.setController(controller);
checkbox.showFields();
