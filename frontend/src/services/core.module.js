import userService from "./user/user.service";

const coreModule = angular.module("app.core", []);

coreModule.service("userService", userService);

export default coreModule;
