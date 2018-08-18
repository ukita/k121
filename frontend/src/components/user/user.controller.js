export default class UserController {
  selectedUser;

  constructor(userService, $mdToast) {
    "ngInject";
    this.userService = userService;
    this.$mdToast = $mdToast;
  }

  $onInit() {
    this.listUsers();
  }

  showToast(message) {
    this.$mdToast.show(
      this.$mdToast
        .simple()
        .position("bottom left")
        .textContent(message)
        .hideDelay(3000)
    );
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
      this.showToast(`Created user: ${user.name}`);
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

      this.showToast(`Updated user: ${user.name}`);
    });
  }

  editUser(user) {
    this.selectedUser = user;
  }

  deleteUser(user) {
    this.userService.delete(user).then(() => {
      this.users = this.users.filter(u => u._id !== user._id);
      this.showToast(`Deleted user: ${user.name}`);
    });
  }

  raffle() {
    this.userService.raffle().then(result => {
      this.showToast(result.message);
    });
  }
}
