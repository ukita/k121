export default class FormController {
  constructor() {}

  submit() {
    if (!this.form.$valid) {
      return;
    }

    this.onSubmit({ user: this.user });
    this.reset();
  }

  reset() {
    this.user = {};
    this.form.$setPristine();
    this.form.$setUntouched();
  }
}
