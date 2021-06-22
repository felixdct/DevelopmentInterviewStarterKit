import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.div`
    width: 90%;
    background: white;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 50px;
`;

const Title = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.9em;  
`;

const Header = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5em;
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
`;

export const PeopleList = ({ peopleList }) => {
    return (
        <Table>
            <Title>SalesLoft People Information</Title>
            <Header>Name</Header>
            <Header>Email</Header>
            <Header>Job title</Header>
            {peopleList && peopleList.length > 0 &&
                peopleList.map((person) => (
                    <React.Fragment key={person.fullName}>
                        <Item>{person.fullName}</Item>
                        <Item>{person.email}</Item>
                        <Item>{person.jobTitle}</Item>
                    </React.Fragment>
                ))
            }
        </Table>
    )
}

PeopleList.propTypes = {
    peopleList: PropTypes.array.isRequired, 
}

export default PeopleList;