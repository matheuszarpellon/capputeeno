import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  gap: 32px;
  max-width: 100%;
  margin-top: 32px;
`;