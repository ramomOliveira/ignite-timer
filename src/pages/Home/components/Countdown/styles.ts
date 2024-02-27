import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto-Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 40em) {
    font-size: 7rem;
    line-height: 6rem;
  }

  // responsive 520px
  @media (max-width: 32.5em) {
    font-size: 5rem;
    line-height: 4rem;
  }

  // responsive 400px
  @media (max-width: 25em) {
    font-size: 3rem;
    line-height: 2rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 40em) {
    width: 3.5rem;
  }

  // responsive 520px
  @media (max-width: 32.5em) {
    width: 2.5rem;
  }

  // responsive 400px
  @media (max-width: 25em) {
    width: 1.5rem;
  }
`
