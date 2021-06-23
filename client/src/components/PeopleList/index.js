import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header, Item, TableDefinition, TitleDefinition } from '../../UI'

const Table = TableDefinition(3);

const Title = TitleDefinition(1, 4);

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