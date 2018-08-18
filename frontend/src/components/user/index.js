import userComponent from "./user.component";
import userListComponent from "./user-list/user-list.component";
import userFormComponent from "./form/form.component";

const userModule = angular.module("app.user", []);

// loading components, services, directives, specific to this module.
userModule.component("appUser", userComponent);
userModule.component("appUserList", userListComponent);
userModule.component("appUserForm", userFormComponent);

// export this module
export default userModule;
