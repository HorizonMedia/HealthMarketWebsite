import styled from "@emotion/styled"

export const Wrapper = styled.div`
  &.centered {
    text-align: center;
  }

  &.agent {
    // ...
  }
`

export const Buttons = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  .centered & {
    justify-content: center;
  }

  div {
    min-width: 410px;
  }

  @media only screen and (min-width: 1200px) {
    justify-content: left;
  }

  @media only screen and (max-width: 920px) {
    div {
      align-items: center;
      display: flex;
      font-size: 1.6rem;
      justify-content: center;
      line-height: 3.4rem;
      min-height: 5.6rem;
      min-width: calc(50% - 2.1rem);
      padding: 0.9rem 1.1rem;
    }
  }

  @media only screen and (max-width: 620px) {
    display: block;

    div {
      min-width: normal;
      width: 100%;
    }
  }
`

export const Radio = styled.div`
  background-color: var(--color-light);
  border: 2px solid var(--color-light);
  color: var(--color-accent-alt);
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  padding: 13px 34px;
  text-align: center;

  &.accented {
    background-color: var(--color-accent-alt);
    color: var(--color-light);
  }

  input[type=radio] {
    height: 0;
    visibility: hidden;
    width: 0;
  }
`

export const Form = styled.form`
  /* change to styled.form */
`

export const InputGroup = styled.div`
  display: inline-block;
  margin-top: 3.4rem;
  position: relative;
  text-align: center;

  img {
    height: 24px;
    left: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-14px);
    z-index: 1;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 1.6rem;
    width: 100%;

    img {
      left: 14px;
    }
  }
`

export const Input = styled.input`
  border-bottom: 7px solid var(--color-accent);
  border-left: none;
  border-right: none;
  border-top: none;
  color: var(--color-dark);
  display: block;
  font-size: 2rem;
  margin: 0 auto;
  min-width: 82rem;
  padding: 2.1rem 2.1rem 2.1rem 6.2rem;
  position: relative;

  &::placeholder {
    color: var(--color-accent-alt);
    opacity: 0.6;
  }

  @media only screen and (max-width: 788px) {
    font-size: 1.6rem;
    max-width: 100%;
    min-width: 100%;
    width: 68.8vw;
  }

  @media only screen and (max-width: 620px) {
    padding: 1.6rem 5.6rem 1.8rem 4.2rem;
  }
`

export const Footer = styled.div`
  margin-top: 3.2rem;

  .centered & {
    margin-left: auto;
    margin-right: auto;
  }

  button {
    max-width: 33.3rem;
    width: 100%;

    @media only screen and (max-width: 620px) {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 788px) {
    margin-top: 2.4rem;
    max-width: 100%;
  }
`

export const CTA = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: no-wrap;
  margin-top: 1.6rem;

  .home & { display: none; }

  .centered & {
    justify-content: center;
  }

  img {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }

  a, span {
    color: var(--color-dark);
  }

  span > p > a, span > p {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 620px) {
    span > p > a, span > p {
      font-size: 18px;
    }
  }

  .light & {
    img {
      filter: brightness(0) invert(1);
    }
  
    a, span {
      color: var(--color-light);
    }
  }

  @media only screen and (max-width: 900px) {
    align-items: flex-start;
    justify-content: center;
    
    a, span {
      font-size: 1.6rem;
      font-weight: 600;
    }

    img {
      margin-top: 5px;
      max-height: 18px;
    }
  }
`