import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .split-section .inner h3 {
    color: var(--color-primary);
  }

  .split-section .inner p {
    padding: 3.2rem 0;
  }

  @media only screen and (max-width: 788px) {
    .hero {
      padding-bottom: 197px;
    }

    .hero > img {
      object-position: 95%;
    }

    .hero + .section {
      padding-top: 3.4rem;
    }

    .hero + .section > div[class*=Heading] {
      width: calc(100% + 3.4rem);
    }

    .split-section {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }

    .split-section + .split-section {
      padding-top: 0rem;
    }

    .split-section .inner {
      background-color: var(--color-light);
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
      padding: 3rem 1.6rem 4rem;
    }

    .split-section .inner img {
      margin: 0;
    }

    .split-section .inner h3 {
      padding: 2.4rem 0 0.8rem;
    }

    .split-section .inner p {
      font-size: 1.8rem;
      line-height: 120%;
      padding: 0.8rem 0 2.4rem;
    }

    .split-section .inner button {
      border-radius: 4px;
      width: 100%;
    }
  }

  .split-section + .section.light {
    padding-top: 4rem;
  }

  .split-section + .section.light + .section.primary > div[class*=Heading] {
    width: calc(100% + 8.9rem);
  }

  .split-section + .section.light + .section.primary .heading h2 {
    max-width: 50%;
  }

  .split-section + .section.light + .section.primary .card > div:first-of-type h2 {
    font-size: 2rem;
  }

  .split-section + .section.light + .section.primary .card > div:first-of-type p {
    display: none;
  }

  @media only screen and (max-width: 788px) {
    .split-section + .section.light + .section.primary .heading h2 {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 1024px) {
    .flexed.section {
      display: block;
    }

    .flexed.section > div[class*=Heading] {
      display: block;
      flex-basis: 100%;
      margin-bottom: 3.4rem;
      transform: translateX(-2.1rem);
      width: 100%;
    }

    .flexed.section > div[class*=Inner] {
      flex-basis: 100%;
      width: 100%;
      margin: 0 auto;
      max-width: 55rem;
    }

    .flexed.section > div[class*=Inner] .list {
      margin-left: 4rem;
    }

    .flexed.section > div[class*=Inner] > a button {
      border-radius: 4px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 3.4rem;
      max-width: 33.3rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 1280px) and (min-width: 1025px) {
    .flexed.section > div[class*=Inner] {
      flex-basis: 32%;
      width: 32%;
    }
  }
`

export const HeroHeading = styled.h1`
  margin-bottom: 2.4rem;
  text-align: center;
`

export const HeroSubheading = styled.h4`
  font-family: var(--font-body);
  margin-bottom: 4rem;
  text-align: center;
`