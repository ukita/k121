export default class UserController {
  constructor(userService) {
    "ngInject";
    this.userService = userService;
  }

  $onInit = () => {
    this.userService.get().then(users => {
      this.users = users;
    });
  };
}
