export default class UserController {
  selectedUser;

  constructor(userService) {
    "ngInject";
    this.userService = userService;
  }

  $onInit() {
    this.listUsers();
  }

  listUsers() {
    this.userService.get().then(users => {
      this.users = users;
    });
  }

  createUser(user) {
    this.userService.create(user).then(user => {
      this.users = [...this.users, user];
    });
  }
}
