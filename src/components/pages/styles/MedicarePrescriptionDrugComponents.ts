import styled from "@emotion/styled";
import {BREAKPOINT_LG, BREAKPOINT_MD, BREAKPOINT_SM, BREAKPOINT_XL} from "../../../breakpoints";
import checkImgSvg from "../../../static/images/list-check.svg";

export const SectionColumns = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    display: flex;
    flex-direction: row;
  }
`;

export const SectionColumnLeft = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    width: 40.6%;
    flex-shrink: 0;
    max-width: 780px;
  }
`;

export const SectionColumnRight = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    flex-grow: 1;
    padding-left: 37px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'IvyPresto Display-SemiBold', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;

  letter-spacing: 0.02em;

  color: #FFFFFF;
  background: #009FDA;

  padding: 18px 26px 14px;
  width: 70%;

  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    width: unset;
    font-size: 4.7vw;
    margin: 0;
    padding: 2.2vw 2.2vw 2.2vw 12.5vw;
  }
`;

export const SectionText = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  color: #4D4D4D;
  padding: 0 36px;
  margin-top: 40px;

  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    font-weight: 600;
    // Same size as list items
    font-size: 24px;
    line-height: 140%;
    margin-top: 0px;
    padding: 3px 35px 3px 35px;
  }

  @media only screen and (min-width: ${BREAKPOINT_LG}px) {
    padding: 3px 60px 3px 35px;
  }

  @media only screen and (min-width: ${BREAKPOINT_XL}px) {
    //Big size (originally 32px) until large screens
    padding: 3px 22% 3px 35px;
    font-size: 1.67vw;
  }
`;

export const SectionSubtitle = styled.h2`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  color: var(--color-primary-dark);

  padding: 0 30px;
  margin-top: 40px;

  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    font-family: 'IvyPresto Display-SemiBold', serif;
    font-weight: 600;
    font-size: 65px;
    line-height: 110%;
    letter-spacing: 0.02em;
    margin-top: 101px;
  }
`;

export const ListContainer = styled.ul`
  padding: 0px 30px;
  list-style: none;
  margin: 22px 0 40px;

  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    margin-top: 46px;
    max-width: 710px;
    margin-bottom: 43px;
  }
`;


export const ListItem = styled.li`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin: 0 0 24px;
  padding-left: 44px;
  position: relative;
  color: #4D4D4D;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    font-size: 24px;
    padding-left: 71px;
  }

  &::after {
    content: '';
    width: 26px;
    height: 26px;
    @media only screen and (min-width: ${BREAKPOINT_MD}px) {
      width: 40px;
      height: 40px;
      top: calc(50% - 17px);
      left: 2px;
    }
    display: block;
    border-radius: 100%;
    position: absolute;
    left: 1px;
    top: calc(50% - 13px);
    border: 2px solid var(--color-accent);
  }

  &::before {
    content: '';
    width: 26px;
    height: 26px;
    @media only screen and (min-width: ${BREAKPOINT_MD}px) {
      width: 40px;
      height: 40px;
      background-size: contain;
      top: calc(50% - 23px);
      left: 8px;
    }
    display: block;
    position: absolute;
    left: 5px;
    background-repeat: no-repeat;
    top: calc(50% - 14px);
    background-image: url("${checkImgSvg}");
  }
`;

export const CtaButton = styled.a`
  background: #009FDA;
  border: 3px solid #FFFFFF;
  border-radius: 4px;

  margin: 0 auto;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: center;
  max-width: 335px;

  @media only screen and (min-width: ${BREAKPOINT_SM}px) {
    max-width: unset;
    width: fit-content;
    padding: 15px 34px;
  }

  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    display: inline-flex;
    padding: 18px 96px;
    font-size: 24px;
    line-height: 33px;
    background: #009B3A;
    margin-left: 31px;
  }
`;
