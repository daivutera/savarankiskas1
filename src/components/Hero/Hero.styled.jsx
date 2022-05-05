import styled from 'styled-components';

export const Hero = styled.div`
  background: ${(props) => props.color.background};
  padding: 1rem;
  text-align: justify;
  width: 15rem;
  border-radius: 5px;
`;
export const Heroh1 = styled.h1`
  color: blue;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0.25rem;
`;
export const Heroh3 = styled.h3`
  color: black;
  font-weight: 600;
  font-size: 18px;
`;
export const Herop = styled.p`
  color: black;
  font-weight: 500;
`;
