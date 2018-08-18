import userService from "./user/user.service";

const coreModule = angular.module("app.core", ["ngMaterial", "ngMessages"]);

coreModule.service("userService", userService);

export default coreModule;
