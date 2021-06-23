import * as actions from './Actions'

export const creds = { credentials: 'same-origin' };

export function fetchPeopleList() {
  return dispatch => {
    return fetch('https://salesloft-app-felix-delacruz.herokuapp.com/api', creds)
      .then(response => response.json())
      .then(peopleList => dispatch(actions.receivePeopleList(peopleList)))
      .catch((error) => console.log(error));
  }
}

export function fetchUniqueEmailsCharacters() {
  return dispatch => {
    return fetch('https://salesloft-app-felix-delacruz.herokuapp.com/api/charactersCount', creds)
      .then(response => response.json())
      .then(uniqueCharacters => dispatch(actions.receiveUniqueEmailsCharacters(uniqueCharacters)))
      .catch((error) => console.log(error));
  }
}

export function fetchPossibleEmailsDuplicates() {
  return dispatch => {
    return fetch('https://salesloft-app-felix-delacruz.herokuapp.com/api/possibleDuplicates', creds)
      .then(response => response.json())
      .then(possibleDuplicates => dispatch(actions.receivePossibleEmailsDuplicate(possibleDuplicates)))
      .catch((error) => console.log(error));
  }
}