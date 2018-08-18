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

  create(user) {
    return this.$http.post(this.URL, { user }).then(response => {
      return response.data;
    });
  }

  delete(user) {
    return this.$http.delete(`${this.URL}/${user._id}`).then(response => {
      return response.date;
    });
  }
}
