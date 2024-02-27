import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
export const Tooltip = styled.div`
  position: relative;

  > p {
    display: none;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);

    padding: 0.5rem;
    background-color: ${(props) => props.theme['red-700']};
    color: ${(props) => props.theme['gray-100']};
    border-radius: 0.5rem;

    font-size: 0.5rem;
    text-align: center;
  }

  > button {
    background-color: transparent;
    box-shadow: none;
    border: none;
    color: ${(props) => props.theme['red-700']};

    &:hover {
      color: ${(props) => props.theme['red-500']};
      cursor: pointer;
    }
  }

  &:hover {
    > p {
      display: flex;
    }
  }
`
