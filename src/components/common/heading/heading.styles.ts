import styled from 'styled-components';


export const StyledHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;
export const StyledTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #0C831F;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: black;
  }
`;