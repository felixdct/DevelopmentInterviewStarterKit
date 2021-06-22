import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchPeopleList() {
  return dispatch => {
    return fetch('http://localhost:5000/api', creds).
      then(response => response.json()).
      then(peopleList => dispatch(actions.receivePeopleList(peopleList)));
  }
}

export function fetchUniqueEmailsCharacters() {
  return dispatch => {
    return fetch('http://localhost:5000/api/charactersCount', creds).
      then(response => response.json()).
      then(uniqueCharacters => dispatch(actions.receiveUniqueEmailsCharacters(uniqueCharacters)));
  }
}

export function fetchPossibleEmailsDuplicates() {
  return dispatch => {
    return fetch('http://localhost:5000/api/possibleDuplicates', creds).
      then(response => response.json()).
      then(possibleDuplicates => dispatch(actions.receivePossibleEmailsDuplicate(possibleDuplicates)));
  }
}