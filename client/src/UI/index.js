import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height:100%;
  width:100%;
`;

export const FlexBoxMenu = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const TableDefinition = (numberOfcolumns) => {
  return styled.div`
    width: 90%;
    background: white;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(${numberOfcolumns}, 1fr);
    grid-auto-rows: 50px;
  `;
}

export const TitleDefinition = (start, end) => {
  return styled.div`
    grid-column-start: ${start};
    grid-column-end: ${end};
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.9em;  
  `;
}

export const Header = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5em;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
`;