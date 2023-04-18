import {css} from "@emotion/react";
import styled from "@emotion/styled";
import React, {CSSProperties, FC, ReactNode, useEffect, useState} from "react";
import {fadeIn} from "../../../static/scripts/global";
import {Wrapper as MedialWrapper} from "../../Medials/styles";
import {Img} from "../../Hero/styles";
import {Inner} from "../../Sections/FlexedSection/styles";
import {Heading, OuterWrapper} from "../../Sections/styles";
import {BREAKPOINT_LG, BREAKPOINT_SM, BREAKPOINT_XL} from "../../../breakpoints";

export const PageStyles = css`
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

  .card-disclaimer {
    font-size: 2rem;
    font-weight: 400;
    margin: 6.4rem auto 0;
    max-width: 106.8rem;
    text-align: center;
  }

  .card-link > p:first-of-type {
    margin-bottom: 23px;
  }

  .flexed.section.primary {
    padding-bottom: 0;
  }

  .hero .half {
    flex-basis: 50% !important;
    width: 50% !important;
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

    .button-container button {
      max-width: 38.6rem;
    }

    .card-disclaimer {
      font-size: 1.6rem;
      margin-top: 2.7rem;
    }
  }

  @media only screen and (max-width: 620px) {
    .button-container {
      min-width: 100%;
    }

    .hero .half .light a,
    .hero .half .light p {
      color: var(--color-dark);
    }

    .hero .half .light img {
      filter: none;
    }

    .hero > img {
      bottom: -8rem;
      //top: auto;
      // In order to match figma, we need -100px.
      top: -100px;
    }

    .hero-disclaimer {
      color: var(--color-dark);
    }

    .card-header .icon {
      margin-left: 19px;
    }
  }
`

export const HeroHeading = styled.h1`
  color: var(--color-light);
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 1280px) {
    font-size: 50px;
    line-height: 115%;
  }

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
  }
`

export const HeroSubheading = styled.h4`
  color: var(--color-light);
  font-family: var(--font-body);
  margin-bottom: 4rem;
  line-height: 120%;

  @media only screen and (max-width: 620px) {
    color: var(--color-dark);
  }
`

export const GuideCTA = styled.div`
  background-color: var(--color-primary-light);
  text-align: center;
  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 788px) {
    padding-left: 4.8rem;
    padding-right: 4.8rem;
  }

  @media screen and (max-width: 620px) {
    padding: 0 32px;
    text-align: left;
  }
`

export const PostAccordionText = styled.div`
  margin-top: 104px;
  padding: 0 15px;

  &, a, p {
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
  }

  @media only screen and (max-width: 620px) {
    margin-top: 40px;

    p {
      font-size: 16px;
      text-align: left;
    }
  }
`

const MedicareAccordionTitle = styled.div`
  border-bottom: 1px solid var(--color-dark);
  margin-bottom: 0;
  padding: 2.2rem 0 2.4rem 10px;

  h2 {
    color: var(--color-primary);
    font-size: 3.6rem;
    margin: 0px;
    line-height: 130%;
  }

  @media only screen and (max-width: 788px) {
    padding: 1.6rem 0 1.6rem 10px;
  }

  @media only screen and (max-width: 620px) {
    margin-bottom: 0px;

    h2 {
      font-family: var(--font-body);
      font-size: 2rem;
      font-weight: 600;
      max-width: 225px;
    }
  }
`

interface AccordionProps {
  title: string,
  content: string,
  html?: boolean
}

const MedicareAccordionWrapper = styled.div`
  cursor: pointer;
  margin: 0;
  position: relative;
  text-align: left;
  z-index: 1;

  &:after {
    content: '';
    border-bottom: 2px solid var(--color-primary);
    border-right: 2px solid var(--color-primary);
    display: block;
    position: absolute;
    transform: rotateZ(45deg);
    z-index: -1;
    top: 39px;
    right: 5px;
    height: 13px;
    width: 13px;
  }

  &:last-of-type {
    margin-bottom: 3.2rem;
  }

  .content {
    height: 0;
    position: relative;
    top: -9999px;
  }

  .title {
    border-color: var(--color-dark);
  }

  &.active {
    &:after {
      transform: rotateZ(-135deg)
    }

    .title {
      border-color: transparent;
    }

    .content {
      height: auto;
      top: 0px;
    }
  }

  // centered accordions
  .centered & {
    margin-left: auto;
    margin-right: auto;
    max-width: 90rem;
  }

  @media only screen and (max-width: 788px) {
    margin-bottom: 1.6rem;

    &:after {
      top: 39px;
    }
  }

  @media only screen and (max-width: 620px) {
    margin-bottom: 0;

    &:last-of-type {
      margin-bottom: 0rem;
    }
  }
`

export const MedicareAccordion: FC<AccordionProps> = ({title, content, html = false}) => {
  const toggleAccordion = el => el.target.closest('.accordion').classList.toggle('active');
  return (
    <MedicareAccordionWrapper className="accordion">
      <MedicareAccordionTitle className="title" onClick={toggleAccordion}>
        <h2>{title}</h2>
      </MedicareAccordionTitle>
      <MedicareAccordionContent className="content">
        {(!html) ? (
          <p>{content}</p>
        ) : (
          <p dangerouslySetInnerHTML={{__html: content}}/>
        )}
      </MedicareAccordionContent>
    </MedicareAccordionWrapper>
  )
};

interface MedicareAccordionFixedProps {
  title: string,
  showByDefault?: boolean,
  children?: ReactNode,
}

export const MedicareAccordionFixed: FC<MedicareAccordionFixedProps> = ({title, children, showByDefault}) => {
  const [show, setShow] = useState(showByDefault);

  return (
    <MedicareAccordionFixedStyled>
      <MedicareAccordionFixedTitle onClick={() => setShow(old => !old)}>
        {title}
        {show ? <ChevronUp/> : <ChevronDown/>}
      </MedicareAccordionFixedTitle>
      {show ? children : null}
    </MedicareAccordionFixedStyled>
  );
}

export const AccordionPadding = styled.div`
  padding: 0px 0 0px 30px;
  margin-top: 41px;
  @media only screen and (min-width: ${BREAKPOINT_LG}px) {
    margin-top: 0;
    padding: 0px 0 0px 98px;
  }
`;

const MedicareAccordionFixedStyled = styled.div`
  position: relative;

  :not(:first-child) {
    margin-top: 31px;

    @media only screen and (min-width: ${BREAKPOINT_LG}px) {
      margin-top: 64px;
    }
  }

  ::after {
    content: '';
    position: absolute;
    left: 1px;
    right: 24px;
    bottom: -12px;
    height: 1px;
    background: #828282;

    @media only screen and (min-width: ${BREAKPOINT_LG}px) {
      margin-bottom: -20px;
      right: 80px;
      left: 9px;
    }

    @media only screen and (min-width: ${BREAKPOINT_XL}px) {
      right: 243px;
    }
  }
`;

const MedicareAccordionFixedTitle = styled.h2`
  cursor: pointer;
  color: #0065BD;
  font-family: 'IvyPresto Display-SemiBold', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 130%;
  padding-right: 22px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: ${BREAKPOINT_LG}px) {
    font-family: 'IvyPresto Display-SemiBold', serif;
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0.02em;
    padding-left: 9px;
    padding-right: 80px;
  }

  @media only screen and (min-width: ${BREAKPOINT_XL}px) {
    padding-right: 243px;
  }


  svg {
    width: 19px;

    @media only screen and (min-width: ${BREAKPOINT_LG}px) {
      width: 25px;
    }
  }
`;

const ChevronUp = () => (
  <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 11.5L12.8265 2.14507C12.4337 1.7839 11.8266 1.79473 11.4469 2.16969L2 11.5" stroke="#009FDA" strokeWidth={3} strokeLinecap="round"/>
  </svg>

)

const ChevronDown = () => (
  <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 1.5L12.8265 10.8549C12.4337 11.2161 11.8266 11.2053 11.4469 10.8303L2 1.5" stroke="#009FDA" strokeWidth={3} strokeLinecap="round"/>
  </svg>
)

export const MedicareAccordionFixedContent = styled.div`
  margin-top: 17px;
  padding-left: 9px;
  padding-right: 32px;

  @media only screen and (min-width: ${BREAKPOINT_LG}px) {
    margin-top: 38px;
    padding-right: 80px;
  }

  @media only screen and (min-width: ${BREAKPOINT_XL}px) {
    padding-right: 237px;
  }

  &, p, a {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #4D4D4D;

    @media only screen and (min-width: ${BREAKPOINT_LG}px) {
      font-size: 20px;
      line-height: 140%;
    }
  }

  p {
    margin: 0;
  }

  > p:not(:last-child) {
    margin-bottom: 19px;
  }
`;

export const MedicareCardText = styled.p`
  p {
    font-weight: 400;
    line-height: 140%;
  }
`;

export const MedicareCtaTitle = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #4D4D4D;
  padding: 0px 0px 26px;
  display: ${({only}: { only: 'desktop' | 'mobile' }) => only === 'mobile' ? 'block' : 'none'};

  @media only screen and (min-width: ${BREAKPOINT_SM}px) {
    display: ${({only}: { only: 'desktop' | 'mobile' }) => only === 'desktop' ? 'block' : 'none'};
  }
`;

interface MedicareMedialProps {
  color: string
  children: ReactNode
}

export const MedicareMedial: FC<MedicareMedialProps> = ({color, children}) => {
  const columnCount = (children?.length > 2) ? 'three-columns' : 'two-columns';
  useEffect(() => {
    fadeIn('.medial')
  }, []);
  return (
    <MedialWrapper className={`medial ` + color + ` ` + columnCount}>
      <MedicareInner>
        {children}
      </MedicareInner>
    </MedialWrapper>
  )
}

const MedicareInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 2.1rem;

  background-color: var(--color-light);
  border-radius: 4px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

  opacity: 0;
  transform: translateY(100%);
  transition: all 0.56s linear;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }

  .two-columns & {
    padding: 8.3rem 12.0rem 8.3rem 12.0rem;

    @media only screen and (max-width: 1460px) {
      padding: 5.5rem 12.8rem 5.5rem 10.3rem;
    }

    @media only screen and (max-width: 788px) {
      padding: 4rem 2.1rem;
    }
  }

  .three-columns & {
    padding: 4rem 9.6rem;

    @media only screen and (max-width: 1280px) {
      padding: 4rem 2.1rem;
    }
  }

  h3 {
    color: var(--color-primary-dark);
    line-height: 110%;
    margin: 0px;
    letter-spacing: 0.02em;

    &:last-of-type {
      margin-bottom: 2.4rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    display: block;
    padding: 2.1rem 1.3rem;
    text-align: center;

    p {
      margin-bottom: 1.3rem;
      margin-top: 1.3rem;
    }
  }
`

interface MedicareAdvantageHeroProps {
  image: string,
  mobileImage?: string,
  bgColor?: string,
  centered?: boolean,
  boxed?: boolean,
  half?: boolean,
  color?: string,
  children: ReactNode
  wrapperStyle?: CSSProperties
  desktopImgStyle?: CSSProperties
  mobileImgStyle?: CSSProperties
  innerStyle?: CSSProperties
}

export const MedicareAdvantageHeroInner = styled.div`
  margin: 0;
  max-width: 144rem;
  position: relative;
  width: 100%;
  z-index: 12;

  &.half {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    flex-basis: 72%;
    width: 72%;

    @media only screen and (max-width: 1280px) {
      flex-basis: 100%;
      width: 100%;
    }

    @media only screen and (max-width: 1024px) {
      text-align: center;
    }
  }

  &.left {
    padding-bottom: 11rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 620px) {
      padding-top: 4rem;
      padding-bottom: 31rem;
      align-items: center;
      width: 100%;
    }
  }

  .boxed & {
    margin: 3.4rem 14.4rem;
    padding: 6rem 12rem;
    @media only screen and (max-width: 788px) {
      margin: 0 auto;
      padding: 4rem 8rem;
    }
    @media only screen and (max-width: 620px) {
      margin: 0 auto;
      padding: 0;
    }
  }

  .boxed.primary & {
    background-color: var(--color-primary);
    @media only screen and (max-width: 620px) {
      background-color: transparent;
    }
  }

  .boxed.accent & {
    background-color: var(--color-accent);
    @media only screen and (max-width: 620px) {
      background-color: transparent;
    }
  }

  .half & {
    flex-basis: 50%;
    width: 50%;
    background-color: var(--color-light);
    justify-content: flex-start;
    padding: 65px 77px 55px;
    padding-right: 89px;
    @media only screen and (max-width: 1200px) {
      flex-basis: 100%;
      width: 100%;
      margin-top: 360px;
      padding: 65px 55px 55px;
    }
    @media only screen and (max-width: 620px) {
      padding: 65px 21px 55px;
    }
  }

  @media only screen and (max-width: 340px) {
    width: 100%;
  }
`

export const MedicareAdvantageHero: FC<MedicareAdvantageHeroProps> = ({image, mobileImage, bgColor, centered, boxed, half, color, children, desktopImgStyle, mobileImgStyle, wrapperStyle, innerStyle}) => {
  let classes = "hero"
  if (centered) {
    classes += " centered"
  }
  if (boxed) {
    classes += " boxed"
  }
  if (half) {
    classes += " half"
  }
  if (color != null) {
    classes = classes + " " + color
  }

  return (
    <HeroWrapper className={classes} background={bgColor} style={wrapperStyle}>
      <Img className={(mobileImage) ? "hide-at-mobile" : ""} src={image} alt="Hero" style={desktopImgStyle}/>
      {(mobileImage) ? (
        <Img className="show-at-mobile" src={mobileImage} alt="Hero" style={mobileImgStyle}/>
      ) : null}
      <MedicareAdvantageHeroInner className={(!centered) ? "half" : ""} style={innerStyle}>
        {children}
      </MedicareAdvantageHeroInner>
    </HeroWrapper>
  )
}

export const HeroWrapper = styled.div`
  background-color: ${props => `${props.background}`};
  display: flex;
  min-height: 600px;
  min-height: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  padding-bottom: 10.4rem;
  padding-top: 21rem;
  padding-left: 8.9rem;
  padding-right: 8.9rem;

  &.centered {
    align-items: center;
    justify-content: flex-start;
    vertical-align: middle;
  }

  &.half {
    align-items: stretch;
    justify-content: flex-end;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 120px;

    &.half > div > h1 {
      color: var(--color-primary);
      text-shadow: none;
    }

    &.half > div > h4 {
      font-size: 24px;
      font-weight: 500;
    }
  }

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
    min-height: 65%;
    min-height: 65vh;
  }

  @media screen and (min-width: 1281px) {
    margin-top: 120px;
    padding-top: 0;
  }

  @media screen and (max-width: 1280px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
    padding-top: 5.5rem;
  }
  @media screen and (max-width: 920px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
  }
  @media only screen and (max-width: 788px) {
    padding-top: 14px;
    padding-bottom: 22rem;
    &.centered {
      display: block;
      min-height: auto;
    }
  }
`

interface MedicareFlexedSectionProps {
  heading: string,
  color: string,
  children: ReactNode
}

const switchBgColor = (bgColor: string) => {
  switch (bgColor) {
    case 'primary':
      return "#F3FAFD"
    case 'accent':
      return "#F1FBEA"
    case 'dark':
      return "#4D4D4D"
    case 'muted':
      return "#F6F4F2"
    default:
      return "#FFFFFF"
  }
}

export const MedicareFlexedSection: FC<MedicareFlexedSectionProps> = ({heading, color, children}) => {
  const bgColor = switchBgColor(color)

  return (
    <FlexedWrapper backgroundColor={bgColor} className={`flexed section ` + color}>
      <FlexedHeading>
        <h2>{heading}</h2>
      </FlexedHeading>
      <Inner>
        {children}
      </Inner>
    </FlexedWrapper>
  )
};

const FlexedWrapper = styled.div`
  background-color: ${({backgroundColor}) => backgroundColor};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 10.4rem 8.9rem;

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 788px) {
    display: block;
    padding: 8rem 4.8rem;
  }

  @media screen and (max-width: 620px) {
    padding: 4rem 2.1rem;
  }
`

const FlexedHeading = styled.div`
  display: block;
  flex-basis: 50%;
  width: 50%;

  h2 {
    color: var(--color-light);
    display: inline-block;
    letter-spacing: 1px;
    margin: 0;
    padding: 2.8rem 8.8rem 2.8rem 0rem;
    position: relative;
    z-index: 1;
    line-height: 100%;

    &:before {
      background-color: var(--color-primary);
      bottom: 0;
      content: '';
      left: -14.4rem;
      position: absolute;
      top: 0;
      width: calc(100% + 14.4rem);
      z-index: -1;
    }

    @media only screen and (min-width: 1921px) {
      &:before {
        left: -40rem;
        width: calc(100% + 40rem);
      }
    }

    @media only screen and (max-width: 1460px) {
      &:before {
        left: -8.9rem;
        width: calc(100% + 8.9rem);
      }
    }

    @media only screen and (max-width: 788px) {
      font-size: 5.6rem;
      letter-spacing: 0.02em;
      max-width: 100%;
      padding: 16px 32px;

      &:before {
        left: -4.8rem;
        width: calc(100% + 4.8rem);
      }
    }

    @media only screen and (max-width: 620px) {
      max-width: 250px;
      font-size: 4rem;

      &:before {
        left: -2.1rem;
        width: calc(100% + 2.1rem);
      }
    }
  }

  @media only screen and (max-width: 788px) {
    display: block;
    flex-basis: 100%;
    margin-bottom: 3.4rem;
    transform: translateX(-2.1rem);
    width: 100%;
  }

  @media only screen and (max-width: 620px) {
    margin-bottom: 2.4rem;
  }
`

export const MedicareAccordionContent = styled.div`
  color: var(--color-dark);
  margin: 0 0 1.7rem 0;
  padding-left: 18px;
  padding-right: 12px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #4D4D4D;

    margin-bottom: 19px;

    & + p {
      margin-top: 1.6rem;
    }
  }

  @media only screen and (max-width: 788px) {
    margin-bottom: 0px;
  }

  @media only screen and (max-width: 620px) {
    margin-bottom: 0px;
  }
`;

interface MedicareAdvantageSectionProps {
  color: string,
  children: ReactNode
  heading?: string,
  subheading?: string,
  guarantee?: boolean,
  bestPrice?: ReactNode,
  classes?: string,
  page?: string
}


export const MedicareAdvantageSection: FC<MedicareAdvantageSectionProps> = ({heading, subheading, guarantee, bestPrice, classes, page, color, children}) => {
  const bgColor = switchBgColor(color)

  let classList = "section";
  if (page) {
    classList += ` ${page}`
  }
  if (classes) {
    classList += ` ${classes}`
  }

  return (
    <OuterWrapper>
      <MedicareAdvantageSectionWrapper backgroundColor={bgColor} className={classList}>
        <Heading className="heading">
          {(heading) ? (<h2>{heading}</h2>) : null}
          {(subheading) ? (<h4>{subheading}</h4>) : null}
          {(guarantee !== 'false') ? bestPrice : <></>}
        </Heading>
        <MedicareAdvantageSectionInner>
          {children}
        </MedicareAdvantageSectionInner>
      </MedicareAdvantageSectionWrapper>
    </OuterWrapper>
  )
};

export const MedicareAdvantageSectionInner = styled.div`
  .heading + & {
    padding-top: 8rem;

    @media only screen and (max-width: 1460px) {
      padding-top: 4.8rem;
    }

    @media only screen and (max-width: 620px) {
      padding-top: 2.4rem;
    }
  }
`;

export const MedicareAdvantageSectionWrapper = styled.div`
  background-color: ${({backgroundColor}) => backgroundColor};
  position: relative;

  padding-bottom: 10.4rem;
  padding-top: 10.4rem;

  padding-left: 8.9rem;
  padding-right: 8.9rem;

  @media screen and (min-width: 1921px) {
    padding-left: 40rem;
    padding-right: 40rem;
  }

  @media screen and (max-width: 1044px) {
    padding-left: 5.5rem;
    padding-right: 5.5rem;
  }

  @media screen and (max-width: 788px) {
    padding-left: 4.8rem;
    padding-right: 4.8rem;
    padding-bottom: 8rem;
    padding-top: 8rem;
  }

  @media screen and (max-width: 620px) {
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    padding-bottom: 4rem;
    padding-top: 14px;
  }

  // if section below has the same background, remove its padding-top
  &.primary + .primary {
    padding-top: 0;
  }

  &.accent + .accent {
    padding-top: 0;
  }

  &.light + .light {
    padding-top: 0;
  }
`
