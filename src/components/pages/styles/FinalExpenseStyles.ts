import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
.form-container form div:nth-child(1) div:nth-child(1),
.form-container form div:nth-child(1) div:nth-child(1) + div {
  border: 1px solid var(--color-accent-alt);
}

.form-container input.geocode.input {
  border-bottom: 2px solid var(--color-accent-alt);
  min-width: 65rem;

  @media only screen and (max-width: 620px) {
    min-width: 12.5rem;
  }
}

.section:first-of-type .heading {
  align-items: flex-start;
}

.heading h4 > p {
  color: var(--color-dark);
  font-size: 32px;
  font-weight: 600;
}

.form-container button {
  min-width: 45rem;

  @media only screen and (max-width: 620px) {
    min-width: 20rem;
  }

}

.form-container button .desktop-button {
  min-width: 100%;
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

  .list-item h5 {
    color: var(--color-dark);
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

    .section:first-of-type .heading { 
      display: block;
    }

    .section:first-of-type .heading h4 > p {
      font-size: 16px;
      font-weight: 400;
      line-height: 19.2px;
    }

    .hero + .section {
      padding-top: 4rem;
    }
    
    .section:first-of-type .heading > h2 {
      font-size: 40px !important;
    }

    .section:first-of-type .heading > h4 {
      margin-top: 2.125em;
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
    .header div:nth-child(1){
      background-color: #F4F3F1;
      box-shadow: none;
    }

    .header div:nth-child(1) button div {
      background-color: var(--color-primary)
  }

    .header div:nth-child(1) nav div {
      background-color: var(--color-primary)
  }

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
      margin-top: 5rem;
    }

    .hero + div .section {
      margin-top: 5rem;
    }

    div:nth-child(1)+div  {
      overflow: visible;
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
    line-height: 57.5px;
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

  li.list-item > div > h5 {
    font-size: 24px;
  }

  @media only screen and (max-width: 820px) {
    li.list-item > div > h5 {
      font-size: 16px;
      line-height: 24px;
    }
  }
`

export const RelatedContentWrapper = styled.div`

h4 {
font-weight: 600;
line-height: 36px;
}
  p {
    color: #828282;
font-size: 17px;
font-weight: 600;
line-height: 28px;
  }
`