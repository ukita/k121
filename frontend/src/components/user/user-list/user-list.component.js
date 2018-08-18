import controller from "./user-list.controller";
import template from "./user-list.html";

export default {
  controller: controller,
  template: template,
  bindings: {
    users: "<",
    onDelete: "&"
  }
};
