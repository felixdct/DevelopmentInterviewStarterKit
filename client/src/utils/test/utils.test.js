import {merge} from '../utils'

describe('test utils folder', () => {
    it('merge should merge two objects', () => {
        const currentState = {
            peopleList: [],
            uniqueCharacters: [],
            possibleDuplicates: [],
            type: ""
        };
    
        const nextState = {
            possibleDuplicates: [[0,1], [1,2]],
            type: "Test"
        };
    
        expect(merge(currentState, nextState)).toEqual({
            peopleList: [],
            uniqueCharacters: [],
            possibleDuplicates: [[0,1], [1,2]],
            type: "Test"
        });
    });
});