import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .cards[class*=Wrapper] {
    justify-content: center;
  }

  .card {
    flex-basis: 33%;
    width: 33%;
  }
  
  .card:nth-of-type(3n-1),
  .card:nth-of-type(3n-2) {
    margin-right: 2.1rem;
  }

  .card:last-of-type {
    margin-right: 0;
  }
  
  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  @media only screen and (max-width: 620px) {
    .supplemental-insurance .hero + .section .heading h2 {
      max-width: 68%;
      padding-right: 3.6rem;
    }
  
    .card:nth-of-type(3n-1),
    .card:nth-of-type(3n-2) {
      margin-right: 0px;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-dark);
  margin-bottom: 3.4rem;
  text-align: center;
`

export const HeroSubheading = styled.h4`
  color: var(--color-dark);
  font-family: var(--font-body);
  margin-bottom: 3.4rem;
  text-align: center;
`

export const BestPriceImage = styled.img `
  display: block;
  left: 67vw;
  position: absolute;
  top: 82px;

  @media only screen and (max-width: 920px) {
    left: 520px;
    max-height: 132px;
    top: 90px;
  }

  @media only screen and (max-width: 620px) {
    display: none;
  }
`

export const BestPriceImageMobile = styled.img `
  display: none;
  position: absolute;
  left: 329px;
  top: 15px;

  @media only screen and (max-width: 620px) {
    display: block;
  }

  @media only screen and (max-width: 395px) {
    display: none;
  }
`