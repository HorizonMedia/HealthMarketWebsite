import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .contact-us-page > div:last-of-type > div.section > div:last-of-type  {
    padding-top: 0;
  }

  .contact.section {
    margin-top: 8.9rem;
  }

  .contact.section [class*=Inner] {
    padding-top: 0;
  }

  .contact.section .section {
    align-items: flex-start;
    margin-top: 2.1rem;
    padding: 0;
  }

  .contact.section .section div h4 {
    font-family: var(--font-body);
  }
  
  .contact.section .section .inner .left h4 {
    font-size: 3.6rem;
    line-height: 115%;
    margin-bottom: 6.4rem;
    margin-top: 2.4rem;
  }
    
  .contact.section .section div .inner .left form p:last-of-type {
    margin-bottom: 4.3rem;
    margin-top: 4.8rem;
  }

  .contact.section .inner .right .callout {
    background-color: var(--color-light);
    margin-left: auto;
    margin-right: auto;
  }

  .contact.section .inner .right .callout h1 {
    color: var(--color-accent-alt);
  }

  .contact.section .contact-disclaimer {
    margin-bottom: 4rem;
  }

  .phone-cta.hide-at-mobile {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 30px;
    line-height: 32px;
    font-weight: 500;
    letter-spacing: 0.02em;
    text-align: center;
    text-decoration: underline;

    @media only screen and (min-width: 1025px) {
      font-size: 40px;
      line-height: 44px;
    }
  }

  @media only screen and (max-width: 1440px) {
    .contact.section .section .inner .left h4 {
      font-size: 3.2rem;
    }

    .contact.section .inner .right .callout {
      margin-top: 2.6rem;
    }
  }

  @media only screen and (max-width: 788px) {

    .contact.section .section .inner .left h4 {
      font-size: 2.4rem;
      margin-bottom: 4rem;
    }
    
    .contact.section .section div h4 + form input {
      margin-top: 0;
      margin-bottom: 4.2rem;
    }
    
    .contact.section .section div h4 + form input:last-of-type {
      margin-bottom: 4rem;
    }
    
    .contact.section .section div h4 + form input[type="checkbox"] {
      margin-bottom: 0;
    }
    
    .contact.section .section div h4 + form h6 {
      display: none;
    }

    .contact.section .contact-disclaimer {
      text-align: center;
    }
    
    .contact.section .section div h4 + form button {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 2.4rem;
      max-width: 33.3rem;
      width: 100%;
    }

    .contact.section .inner .right .callout {
      margin-top: 4rem;
    }

    .contact.section {
      padding-bottom: 4rem;
    }
  }

  @media only screen and (max-width: 1025px) {
    .contact.section {
      margin-top: 0px;
    }
  }
`

export const SectionOneInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SectionOneSubheading = styled.div`
  margin-bottom: 3.2rem;

  h4 {
    font-family: 'IvyPresto Display-SemiBold', serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #009FDA;
  }

  @media only screen and (min-width: 788px) {
    h4 {
      font-size: 48px;
      line-height: 48px;
    }
  }

  @media only screen and (min-width: 1025px) {
    h4 {
      font-size: 65px;
      line-height: 65px;
    }
  }
`

export const CalloutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.5rem;

  &> div {
    background-color: #FFFFFF;
    max-width: 100%;
  }

  .callout > div:first-of-type {
    border-bottom: none;
  }

  .callout > div:last-of-type {
    display: none;
  }

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-between;

    .callout > div:first-of-type {
      border-bottom: 2px solid var(--color-accent-alt)
    }

    .callout > div:last-of-type {
      display: block;
    }

    &> div {
      flex: 1;
      flex-basis: 0;
      box-sizing: border-box;
      calc(33.33% - 3.5rem);
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1650px) {
    &> div {
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1280px) {
    &> div h1 {
      font-size: 8rem;
    }
  }
`

export const PageContainer = styled.div`

`