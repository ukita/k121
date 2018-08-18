export default class UserInfoController {
  constructor() {}

  edit() {
    this.onEdit({ user: this.user });
  }

  delete() {
    this.onDelete({ user: this.user });
  }
}
