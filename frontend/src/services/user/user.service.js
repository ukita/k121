export default class UserService {
  constructor($http) {
    "ngInject";

    this.$http = $http;
    this.BASE_URL = process.env.API_URL;
    this.URL = `${this.BASE_URL}/users`;
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

  update(user) {
    return this.$http
      .put(`${this.URL}/${user._id}`, { user })
      .then(response => {
        return response.data;
      });
  }

  delete(user) {
    return this.$http.delete(`${this.URL}/${user._id}`).then(response => {
      return response.date;
    });
  }

  raffle() {
    return this.$http.post(`${this.BASE_URL}/raffle`).then(response => {
      return response.data;
    });
  }
}
