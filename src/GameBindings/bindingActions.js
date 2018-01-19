import axios from 'axios'
import { dataSource } from 'src/constants'

export const FETCH_BINDINGS = 'FETCH_BINDINGS.GameBindings'
export const FETCH_BINDINGS_ERROR = 'FETCH_BINDINGS_ERROR.GameBindings'
export const BINDINGS_FETCHED = 'BINDINGS_FETCHED.GameBindings'

function notifyFetching () {
  return {
    type: FETCH_BINDINGS
  }
}

function handleError (eObj) {
  const error = eObj.response
    ? eObj.response.statusText : eObj.request
      ? eObj.request : eObj.message

  return {
    type: FETCH_BINDINGS_ERROR,
    error
  }
}

function handleReceiveGameData (response) {
  return {
    type: BINDINGS_FETCHED,
    data: response.data
  }
}

export function fetchGameData (game) {
  return (dispatch) => {
    dispatch(notifyFetching())

    return axios.get(`${dataSource}/games/${game}.json`)
      .then((response) => dispatch(handleReceiveGameData(response)))
      .catch((eObj) => dispatch(handleError(eObj)))
  }
}
