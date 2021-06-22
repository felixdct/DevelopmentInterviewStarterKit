import * as actions from './Constants';

export function receiveMe(me) {
  return {
    type: actions.RECEIVE_ME,
    me
  }
}

export function receivePeopleList(peopleList) {
  return {
    type: actions.PEOPLE_LIST,
    peopleList
  };
}

export function receiveUniqueEmailsCharacters(uniqueCharacters) {
  return {
    type: actions.UNIQUE_EMAILS_CHARACTERS,
    uniqueCharacters
  };
}

export function receivePossibleEmailsDuplicate(possibleDuplicates) {
  return {
    type: actions.POSSIBLE_EMAILS_DUPLICATES,
    possibleDuplicates
  };
}