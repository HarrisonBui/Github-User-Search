import Users from '../api/Users'


export function getUsers(request) {
  if (request != "" && request != null) {
    return dispatch => {

      return Users.getUsers(request).then(url => {
        console.log(url);
        dispatch({
          type: "GET_GIT_USERS",
          payload: {
            users: url.items
          }
        })
      }).catch(error => {
        dispatch({
          type: "GET_GIT_USERS",
          payload: {
            users: []
          }
        })
      })
    }
  } else {
    return dispatch => {
      dispatch({
        type: "GET_GIT_USERS",
        payload: {
          users: []
        }
      })
    }
  }
}
