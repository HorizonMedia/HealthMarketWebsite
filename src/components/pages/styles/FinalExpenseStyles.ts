import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
.form-container form div:nth-child(1) div:nth-child(1),
.form-container form div:nth-child(1) div:nth-child(1) + div {
  border: 1px solid var(--color-accent-alt);
}

.form-container input.geocode.input {
  border-bottom: 2px solid var(--color-accent-alt);
}

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 320px;
  }

  .button-container a:first-of-type {
    margin-bottom: 2.1rem;
  }

  .button-container button {
    max-width: 45rem;
    width: 100%;
  }
  
  .hero-disclaimer {
    color: var(--color-light);
    font-size: 2rem;
    font-weight: 400;
  }

  .section:first-of-type .heading h4 > p {
    font-size: 16px;
    line-height: 20.8px;
    color: var(--color-dark);
  }

  .list-item h5 {
    color: var(--color-dark);
    font-size: 16px;
  }

  .card-link > p:first-of-type {
    margin-bottom: 23px;
  }

  @media only screen and (min-width: 789px) {
    .flexed.section > div:first-of-type {
      flex-basis: 62%%;
      width: 62%;
    }

    .flexed.section > div:last-of-type {
      flex-basis: 38%;
      width: 38%;
    }
  }

  @media only screen and (min-width: 621px) and (max-width: 820px) {
    .section:first-of-type .heading {
      width: calc(100% + 1.3125rem);
    }

    .section:first-of-type .heading h4 {
      max-width: 100%;
      padding-left: 20px;
    }

    .list + .full-rounded {
      margin-left: -60px;
    }

    .flexed.section > div:last-of-type {
      max-width: 100%;
    }

    .medial.primary.two-columns {
      padding-left: 3.125rem;
      padding-right: 3.125rem;
    }
  }

  @media only screen and (max-width: 820px) {
    .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .hero + div .section {
      background-color: var(--color-primary-light);
    }

    .hero + .section {
      padding-top: 4rem;
    }

    .button-container button {
      max-width: 38.6rem;
    }

    .list + .full-rounded {
      margin-left: 0px;
    }

    .flexed.section > div:last-of-type .accordion .title h2 {
      max-width: calc(100% - 24px);
    }
  }

  @media only screen and (max-width: 620px) {
    .form-container div:nth-child(1){
      display: flex;
    }

    .form-container div:nth-child(1), div:nth-child(1) + div{
      line-height: 2rem;
      font-weight: 400;
    }

    .button-container {
      min-width: 100%;
    }

    .button-container button {
      padding-left: 0px;
      padding-right: 0px;
     }

    .section:first-of-type .heading h4 {
      max-width: 100%;
      padding-left: 20px;
      padding-right: 0px;
    }
    
    .hero > img {
      bottom: -8rem;
      top: auto;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-light);
  margin-top: 10rem;
  margin-bottom: 2.4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.15);

  @media only screen and (max-width: 620px) {
    margin-top: 0;
    color: var(--color-dark); 
    font-size: 50px !important;
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 4rem;

  @media only screen and (max-width: 620px) {
    color: var(--color-dark); 
    font-size: 20px !important;
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const SectionOneInner = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SectionOneInnerContent = styled.div`
  flex-basis: calc(38% - 60px);
  width: calc(38% - 60px);

  @media only screen and (max-width: 820px) {
    flex-basis: calc(50% - 38px);
    width: calc(50% - 38px);
  }

  @media only screen and (max-width: 788px) {
    flex-basis: 100%;
    width: 100%;
  }
`

export const ListHeading = styled.h4`
  color: var(--color-primary);
  font-family: var(--font-heading);
  font-size: 32px;
  letter-spacing: 0.02em;
  line-height: 110%;
  margin-bottom: 34px;
  margin-left: -60px;

  @media only screen and (max-width: 620px) {
    margin-left: -38px;
    font-size: 20px;
    font-family: var(--font-body);
    font-weight: 700;
  }
`
export const ListWrapper = styled.div`
  margin-top: 50px;

  @media only screen and (max-width: 620px) {
   margin-top: 40px;
  }
`