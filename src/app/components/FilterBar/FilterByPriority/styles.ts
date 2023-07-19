import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
    cursor: pointer;

    svg {
      margin-left: 16px;
    }
  }
`;

export const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`