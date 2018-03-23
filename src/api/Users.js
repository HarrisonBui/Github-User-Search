// API Users static class
import KEY from './key';
export default class Users {
  // get a list of users

  static getUsers(username) {
    const access = KEY;
    console.log('username', username);
    return new Promise((resolve) => {
      return fetch(`https://api.github.com/search/users?q=${username}&access_token=${access}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        if (response.status === 200) {
          return resolve(response.json());
        }
      });
    });
  }

}
