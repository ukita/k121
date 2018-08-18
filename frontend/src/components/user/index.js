import userComponent from "./user.component";
import userFormComponent from "./form/form.component";
import userInfoComponent from "./user-info/user-info.component";

const userModule = angular.module("app.user", []);

// loading components, services, directives, specific to this module.
userModule.component("appUser", userComponent);
userModule.component("appUserForm", userFormComponent);
userModule.component("appUserInfo", userInfoComponent);

// export this module
export default userModule;
