export default class UserController {
  selectedUser;

  constructor(userService) {
    "ngInject";
    this.userService = userService;
  }

  $onInit() {
    this.listUsers();
  }

  handleSubmit(user) {
    if (this.selectedUser) {
      this.updateUser(user);
      this.selectedUser = null;
    } else {
      this.createUser(user);
    }
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

  updateUser(user) {
    this.userService.update(user).then(user => {
      this.users = this.users.map(u => {
        if (u._id === user._id) {
          return user;
        }
        return u;
      });
    });
  }

  editUser(user) {
    this.selectedUser = user;
  }

  deleteUser(user) {
    this.userService.delete(user).then(() => {
      this.users = this.users.filter(u => u._id !== user._id);
    });
  }
}
