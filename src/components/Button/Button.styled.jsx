import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.gotTypeFromProps.background};
  color: black;
  padding: 1rem;
  font-size: 20px;
  border-radius: 7px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
