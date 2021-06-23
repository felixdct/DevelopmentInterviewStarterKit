import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header, Item, TableDefinition, TitleDefinition } from '../../UI'

const Table = TableDefinition(2);

const Title = TitleDefinition(1, 3);

export const EmailsUniqueCharacters = ({ uniqueCharacters }) => {
    return (
        <Table>
            <Title>Unique Emails Characters Sorted</Title>
            <Header>Character</Header>
            <Header>Count</Header>
            {uniqueCharacters && uniqueCharacters.length > 0 &&
                uniqueCharacters.map((ch) => 
                    <React.Fragment key={ch[0]}>
                        <Item>{ch[0]}</Item>
                        <Item>{ch[1]}</Item>
                    </React.Fragment>
                )
            }
        </Table>
    )
}

EmailsUniqueCharacters.propTypes = {
    uniqueCharacters: PropTypes.array.isRequired, 
}

export default EmailsUniqueCharacters;