import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.div`
    width: 90%;
    background: white;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 50px;
`;

const Header = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5em;
`;

const ItemWrapper = styled.div`
    grid-column-start: 1;
    grid-column-end:34;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 250px 0 250px;
    font-size: 1.2em;
`;

export const EmailsUniqueCharacters = ({ uniqueCharacters }) => {
    return (
        <Table>
            <Header>Character</Header>
            <Header>Count</Header>
            {uniqueCharacters && uniqueCharacters.length > 0 &&
                uniqueCharacters.map((ch, index) => 
                    <ItemWrapper key={ch[0]}>
                        <Item>{ch[0]}</Item>
                        <Item>{ch[1]}</Item>
                    </ItemWrapper>
                )
            }
        </Table>
    )
}

EmailsUniqueCharacters.propTypes = {
    uniqueCharacters: PropTypes.array.isRequired, 
}

export default EmailsUniqueCharacters;