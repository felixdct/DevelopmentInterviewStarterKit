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

const Title = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
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