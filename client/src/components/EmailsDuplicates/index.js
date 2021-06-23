import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header, Item, TableDefinition, TitleDefinition } from '../../UI'

const Table = TableDefinition(2);

const Title = TitleDefinition(1, 3);

const EmailsDuplicates = ({ possibleDuplicates }) => {
    return (
        <Table>
            <Title>Possible Emails Duplicates</Title>
            <Header>Email 1</Header>
            <Header>Email 2</Header>
            {possibleDuplicates && possibleDuplicates.length > 0 &&
                possibleDuplicates.map((email) => 
                    <React.Fragment key={email[0]}>
                        <Item>{email[0]}</Item>
                        <Item>{email[1]}</Item>
                    </React.Fragment>
                )
            }
        </Table>
    )
}

EmailsDuplicates.propTypes = {
    possibleDuplicates: PropTypes.array.isRequired, 
}

export default EmailsDuplicates;