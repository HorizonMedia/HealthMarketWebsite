import styled from "@emotion/styled"

export const Wrapper = styled.div`
  &.centered {
    text-align: center;
  }

  &.agent {
    // ...
  }
`
export const FirstWrapper = styled.div`
.phone-link {
  color: white;
  text-decoration: none;
}
@media only screen and (max-width: 620px) {
  margin-top: 200px;
}
`

export const HideOnDesktopWrapper = styled.div`
display: none;

@media only screen and (max-width: 620px) {
  display: block;
}
`

export const Buttons = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;

  .centered & {
    justify-content: center;
  }

  div {
    min-width: 410px;
  }

  @media only screen and (min-width: 1024px) {
    justify-content: left;
  }

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    text-align: center;
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
  @media only screen and (max-width: 1024px) {
    text-align: center;
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

    .mobile-button {
      display: none;
    }

    .desktop-button {
      width: 300px;
    }

    @media only screen and (max-width: 620px) {
      max-width: 100%;

      .mobile-button {
        display: block;
      }

      .desktop-button {
        display: none;
      }
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

    @media only screen and (max-width: 620px) {
        width: 85%;
        margin-left: 3.6rem;
        margin-top: 1rem;
      }

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
      font-size: 16px;
        color: var(--color-dark);
        text-align: left;
        margin-top: 5px;
    }
  }

  .light & {
    img {
      filter: brightness(0) invert(1);
      z-index: -999;
       @media only screen and (max-width: 620px) {
        filter: brightness(0);
        margin-top: 14px;
        margin-right: 13px;
      }
    }
  
    a, span {
      color: var(--color-light);
      @media only screen and (max-width: 620px) {
        color: var(--color-dark);
      }
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