// loading shared module
import "./services/core.module";
// loading all module components
import "./app.components";

import "angular-material/angular-material.css";

const appModule = angular.module("app", [
  // shared module
  "app.core",
  // application specific modules
  "app.header",
  "app.user"
]);

export default appModule;
