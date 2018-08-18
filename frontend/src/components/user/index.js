import userComponent from "./user.component";

const userModule = angular.module("app.user", []);

// loading components, services, directives, specific to this module.
userModule.component("appUser", userComponent);

// export this module
export default userModule;
