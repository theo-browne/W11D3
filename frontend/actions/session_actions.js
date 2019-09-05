import * as APIUtil from "../util/session_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})

export const createUser = (user) => dispatch => {
  return APIUtil.createUser(user).then((user) => dispatch(receiveUser(user)))
}

export const loginUser = (user) => dispatch => {
  return APIUtil.login(user).then((user) => dispatch(receiveUser(user)))
}

export const logout = () => dispatch => {
  return APIUtil.logout().then(() => dispatch(logoutUser()))
}

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

window.receiveSessionErrors = receiveSessionErrors;