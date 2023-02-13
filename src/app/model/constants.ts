export const apiParam = {
  BASE_URL: "http://localhost:8080",
  /*PUBLIC API*/
  LOGIN_PATH: "/login",
  LOGOUT_PATH: "/logout",
  REGISTER_PATH: "/register",
  PROFILE_PATH: "/api-client/profile",
  GET_ALL_CAR_DESCRIPTION_PATH: "/api-public/car-description",

  /*CLIENT API*/
  RENTAL_REQUEST_PATH: "/api-client/rental",
  RENTAL_DETAIL_PATH: "/api-client/history",
  CANCEL_RENTAL_PATH: "/api-client/cancel",
  ADD_PAYMENT_CLIENT_PATH: "/api-client/add/payment",

  /*AGENT API*/
  RENTAL_HISTORY_PATH: "/api-agent/rental/history",
  ADD_PAYMENT_AGENT_PATH: "/api-agent/add/payment",
  UPDATE_RENTAL_STATUS_PATH: "/api-agent/rental/update-status",


}

export const localStorageKey = {
  USER_INFO: "USER_INFO_KEY"
}

export const userRole = {
  CLIENT: "CLIENT",
  AGENT: "AGENT",
  DRIVER: "DRIVER",
}
