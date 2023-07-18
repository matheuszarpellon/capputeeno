import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const InputComponent = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  background: var(--bg-secondary);
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  line-height: 22px;
  color: var(--text-dark);
`;