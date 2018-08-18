import controller from "./form.controller";
import template from "./form.html";

export default {
  controller: controller,
  template: template,
  bindings: {
    user: "<",
    onSubmit: "&"
  }
};
