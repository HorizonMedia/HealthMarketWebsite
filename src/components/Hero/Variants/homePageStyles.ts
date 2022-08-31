import styled from "@emotion/styled";

export const HeroHeading = styled.h1`
  color: var(--color-light);
  margin-bottom: 3.4rem;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 5rem;
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 3.4rem;
  text-align: center;

  @media only screen and (max-width: 620px) {
    font-size: 1.6rem;
    font-weight: normal;

    & + div .home-hero-buttons {
      display: flex;

      > button {
        flex-basis: 50%;
        width: 50%;
        font-size: 1.4rem;
        padding: 1.2rem;
      }
    }
  }
`