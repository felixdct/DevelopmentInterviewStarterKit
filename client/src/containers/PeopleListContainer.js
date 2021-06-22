import { connect } from "react-redux";
import {fetchPeopleList, fetchUniqueEmailsCharacters, fetchPossibleEmailsDuplicates} from "../actions/AsyncActions";
import People from "../components/people";

const mapStateToProps = ({ people }) => {
    return { 
        peopleList: people.peopleList,
        uniqueCharacters: people.uniqueCharacters,
        possibleDuplicates: people.possibleDuplicates,
        type: people.type
    }
};

const mapDispatchToProps = dispatch => {
    return {
        peopleListFn: () => dispatch(fetchPeopleList()),
        uniqueCharactersFn: () => dispatch(fetchUniqueEmailsCharacters()),
        possibleDuplicatesFn: () => dispatch(fetchPossibleEmailsDuplicates())
    }
}

export const PeopleListContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleListContainer;