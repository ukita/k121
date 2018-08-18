import userComponent from "./user.component";
import userListComponent from "./user-list/user-list.component";

const userModule = angular.module("app.user", []);

// loading components, services, directives, specific to this module.
userModule.component("appUser", userComponent);
userModule.component("appUserList", userListComponent);

// export this module
export default userModule;
