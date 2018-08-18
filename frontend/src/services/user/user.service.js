export default class UserService {
  constructor($http) {
    "ngInject";

    this.$http = $http;
    this.URL = `${process.env.API_URL}/users`;
  }

  get() {
    return this.$http.get(this.URL).then(response => {
      return response.data;
    });
  }
}