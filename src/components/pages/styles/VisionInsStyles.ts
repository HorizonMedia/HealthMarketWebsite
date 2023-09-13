import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const PageStyles = css`
  .full-rounded button {
    border-radius: 4px;
    padding-left: 6.5rem;
    padding-right: 6.5rem;
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

  @media only screen and (max-width: 1024px) {

    div.hero {
      padding-bottom: 28rem;

      @media only screen and (min-width: 620px) {
        padding-bottom: 80rem;
      }
    }

    div.section > div.heading > h4 {
      max-width: none;
      color: #4D4D4D;
    }

    div.section > div.heading > h2 {
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
    }

    .hero > img.hide-at-mobile {
      display: none;
    }

    .hero > img.show-at-mobile {
      display: block;
      object-position: bottom;
    }

    .hero > div.half {
      justify-content: flex-start;
    }
  }

  @media only screen and (max-width: 920px) {
    div.hero  .half > h4 {
      padding-right: 26px;
      padding-left: 26px;
    }
  }

  @media only screen and (max-width: 788px) {
    .hero .half {
      display: block;
      flex-basis: 100%;
      text-align: center;
      width: 100%;
    }

    .hero + .section {
      padding-top: 4rem;
    }
  }

  @media only screen and (max-width: 620px) {
    .hero > img {
      bottom: -8rem;
      top: auto;
    }

    .button-container {
      min-width: 100%;
    }

    .button-container button {
      padding-left: 0px;
      padding-right: 0px;
     }
  }

  @media screen and (min-width: 1280px) {
    div.hero {
      padding-left: 5.5rem;
      padding-right: 5.5rem;
      padding-top: 5.5rem;
    }
  }
`

export const HeroHeading = styled.h1`
  color: #009FDA !important;
  margin-bottom: 2.4rem;  
`

export const HeroSubheading = styled.h4`
  color: var(--color-dark);
  font-family: var(--font-body);
  margin-bottom: 4rem;
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

  p {
    color: #4D4D4D;
  }

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

  .card {
    .card-content {
      p {
        margin-bottom: 0;
      }
    }
  
    .card-header {
      h4 {
        text-align: center
      }
    }
  }
`

export const ResourceWrapper = styled.div`
  &> div.related-content {
    justify-content: flex-start;
    margin-bottom: 0;
  }

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

  .card {
    .card-content {
      p {
        margin-bottom: 0;
      }
    }
  
    .card-header {
      h4 {
        text-align: center
      }
    }
  }
`