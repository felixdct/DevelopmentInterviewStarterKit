import { merge } from '../utils/utils'
import { 
    PEOPLE_LIST,
    UNIQUE_EMAILS_CHARACTERS,
    POSSIBLE_EMAILS_DUPLICATES
} from '../actions/Constants'

const initialState = {
  peopleList: [],
  uniqueCharacters: [],
  possibleDuplicates: [],
  type: ""
}

export function people(state=initialState, action) {
  switch(action.type) {
    case PEOPLE_LIST:
      return merge(state, {
        peopleList: action.peopleList,
        type: action.type
      });
    
    case UNIQUE_EMAILS_CHARACTERS:
      return merge(state, {
        uniqueCharacters: action.uniqueCharacters,
        type: action.type
      });
    
    case POSSIBLE_EMAILS_DUPLICATES:
      return merge(state, {
        possibleDuplicates: action.possibleDuplicates,
        type: action.type
      });

    default:
      return state;
  }
}