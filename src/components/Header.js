import styled from "styled-components"
import Heading from "./Heading";
import Web3Button from "./Web3Button";

const StyledHeader = styled.header`
  padding: var(--site-spacing) 0;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Heading tag="h1">Ownership Checker</Heading>
      <Web3Button />
    </StyledHeader>
  )
}