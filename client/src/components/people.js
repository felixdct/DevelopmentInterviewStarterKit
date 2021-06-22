import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { 
    PEOPLE_LIST,
    UNIQUE_EMAILS_CHARACTERS,
    POSSIBLE_EMAILS_DUPLICATES
} from '../actions/Constants';
import EmailsUniqueCharacters from './EmailsUniqueCharacters';
import EmailsDuplicates from './EmailsDuplicates';
import PeopleList from './PeopleList';


const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height:100%;
  width:100%;
`;

const FlexBoxMenu = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
`;

const People = (props) => {
    const { peopleList, uniqueCharacters, possibleDuplicates, type, peopleListFn, uniqueCharactersFn, possibleDuplicatesFn } = props;

    return (
        <FlexBox>
            <FlexBoxMenu>
                <h1>People</h1>
                <button
                    type="button"
                    onClick={peopleListFn}
                >
                    People
                </button>
                
                <button
                    type="button"
                    onClick={uniqueCharactersFn}
                >
                    Unique Emails Character Count
                </button>

                <button
                    type="button"
                    onClick={possibleDuplicatesFn}
                >
                    Possible Emails Duplicate
                </button>
            </FlexBoxMenu>
            {type === PEOPLE_LIST && 
                <PeopleList peopleList={peopleList}/>
            }
            {type === UNIQUE_EMAILS_CHARACTERS && 
                <EmailsUniqueCharacters uniqueCharacters={uniqueCharacters}/>
            }

            {type === POSSIBLE_EMAILS_DUPLICATES && 
                <EmailsDuplicates possibleDuplicates={possibleDuplicates}/>
            }
        </FlexBox>
        
        
    )
}

People.propTypes = {
    peopleList: PropTypes.array.isRequired,
    uniqueCharacters: PropTypes.array.isRequired, 
    possibleDuplicates: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    peopleListFn: () => {},
    uniqueCharactersFn: () => {},
    possibleDuplicatesFn: () => {}
};

export default People;