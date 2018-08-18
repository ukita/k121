import controller from "./user-info.controller";
import template from "./user-info.html";

export default {
  controller: controller,
  template: template,
  bindings: {
    user: "<",
    onEdit: "&",
    onDelete: "&"
  }
};
