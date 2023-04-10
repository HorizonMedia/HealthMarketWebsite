// Library
import * as React from "react"
import { Global } from "@emotion/react";

// Query
import { useMedicareAdvantagePageQuery } from "../../../hooks/insurance/useMedicareAdvantagePageQuery"

// Styles
import {
    PageStyles,
    HeroHeading,
    HeroSubheading,
    GuideCTA,
    PostAccordionText,
    MedicareAccordion,
    MedicareCardText,
    MedicareCtaTitle,
    MedicareMedial,
    MedicareAdvantageHero,
} from "../../../components/pages/styles/MedicareAdvantageStyles";

// Scripts
import { routeLink } from '../../../static/scripts/global';

// Components
import Layout from "../../../components/Layout";
import PageHead from "../../../components/PageHead";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import Button from "../../../components/Buttons/Button";
import Section from "../../../components/Sections";
import Cards from "../../../components/Cards";
import Card from "../../../components/Cards/Card";
import FlexedSection from "../../../components/Sections/FlexedSection";
import Footer from "../../../components/Footer";
import RelatedContent from "../../../components/RelatedContent";
import styled from "@emotion/styled";
import {BREAKPOINT_LG, BREAKPOINT_SM} from "../../../breakpoints";

const CallUsCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 38px 0 45px;

  @media only screen and (min-width: ${BREAKPOINT_SM}px) {
    margin-top: 64px;
    padding: 0 0;
  }

  @media only screen and (min-width: ${BREAKPOINT_LG}px) {
    justify-content: flex-start;
  }
`;

const PhoneIcon = () => (
    <StyledSvg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.5907 28C18.2242 28 16.7851 27.6484 15.2977 26.9712C13.8465 26.307 12.3833 25.3953 10.9563 24.2884C9.5414 23.1684 8.17488 21.9181 6.88093 20.5507C5.59907 19.1572 4.43814 17.6856 3.41023 16.1749C2.37023 14.6121 1.53581 13.0493 0.943256 11.5386C0.314419 9.92372 0 8.36093 0 6.8893C0 5.87349 0.169302 4.90977 0.495814 4.01116C0.834419 3.08651 1.3786 2.22698 2.11628 1.48465C3.04744 0.494884 4.11163 0 5.24837 0C5.72 0 6.20372 0.117209 6.61488 0.325581C7.08651 0.56 7.48558 0.911628 7.77581 1.38047L10.5814 5.63907C10.8353 6.01674 11.0288 6.3814 11.1619 6.74605C11.3191 7.13674 11.4037 7.52744 11.4037 7.90512C11.4037 8.4 11.2707 8.88186 11.0167 9.33767C10.8353 9.6893 10.5572 10.067 10.2065 10.4447L9.38419 11.3693C9.39628 11.4084 9.40837 11.4344 9.42046 11.4605C9.56558 11.734 9.85581 12.2028 10.4121 12.906C11.0047 13.6353 11.5609 14.2995 12.1172 14.9116C12.8307 15.667 13.4233 16.266 13.9795 16.7609C14.6688 17.386 15.1163 17.6986 15.3823 17.8419L16.2409 16.9693C16.6158 16.5656 16.9786 16.266 17.3293 16.0707C17.9944 15.6279 18.8409 15.5498 19.6874 15.9274C20.0019 16.0707 20.3405 16.266 20.7033 16.5395L24.7181 19.613C25.1656 19.9386 25.4921 20.3554 25.6856 20.8502C25.867 21.3451 25.9516 21.8009 25.9516 22.2567C25.9516 22.8819 25.8186 23.507 25.5646 24.093C25.3107 24.6791 24.9963 25.187 24.5972 25.6558C23.9079 26.4763 23.1581 27.0623 22.2874 27.44C21.453 27.8046 20.546 28 19.5907 28ZM5.24837 1.95349C4.58326 1.95349 3.96651 2.26605 3.37395 2.89116C2.81767 3.45116 2.4307 4.06326 2.18884 4.72744C1.93488 5.40465 1.81395 6.12093 1.81395 6.8893C1.81395 8.10046 2.08 9.41581 2.61209 10.7702C3.15628 12.1507 3.91814 13.5833 4.88558 15.0158C5.85302 16.4484 6.95349 17.8419 8.16279 19.1572C9.37209 20.4465 10.6781 21.6447 12.0205 22.6995C13.3265 23.7284 14.6688 24.5619 15.9991 25.1609C18.067 26.1116 20.0019 26.333 21.5981 25.6167C22.2149 25.3433 22.7591 24.9265 23.2549 24.3274C23.533 24.0019 23.7507 23.6502 23.9321 23.2335C24.0772 22.9079 24.1498 22.5693 24.1498 22.2307C24.1498 22.0223 24.1135 21.814 24.0167 21.5795C23.9805 21.5014 23.9079 21.3581 23.6781 21.1888L19.6633 18.1153C19.4214 17.933 19.2037 17.8028 18.9981 17.7116C18.7321 17.5944 18.6233 17.4772 18.2121 17.7507C17.9702 17.8809 17.7526 18.0763 17.5107 18.3367L16.5916 19.3135C16.12 19.8084 15.3944 19.9256 14.8381 19.7042L14.5116 19.5479C14.0158 19.2614 13.4353 18.8186 12.7944 18.2326C12.214 17.6986 11.5851 17.0735 10.8233 16.266C10.2307 15.6149 9.63814 14.9247 9.02139 14.1563C8.45302 13.44 8.04186 12.8279 7.78791 12.32L7.64279 11.9293C7.57023 11.6298 7.54605 11.4605 7.54605 11.2781C7.54605 10.8093 7.70325 10.3926 8.00558 10.067L8.91256 9.05116C9.15442 8.7907 9.33581 8.54326 9.45674 8.32186C9.55349 8.15256 9.58977 8.0093 9.58977 7.87907C9.58977 7.77488 9.55349 7.6186 9.49302 7.46233C9.40837 7.25395 9.27535 7.01953 9.10605 6.77209L6.30046 2.50047C6.17953 2.31814 6.03442 2.18791 5.85302 2.09674C5.65953 2.00558 5.45395 1.95349 5.24837 1.95349Z"
            fill="white"/>
        <path
            d="M20.8602 11.0697C20.3644 11.0697 19.9533 10.6269 19.9533 10.093C19.9533 9.62415 19.5179 8.64741 18.7923 7.81392C18.0788 6.99345 17.2928 6.51159 16.6277 6.51159C16.1319 6.51159 15.7207 6.0688 15.7207 5.53485C15.7207 5.0009 16.1319 4.55811 16.6277 4.55811C17.8007 4.55811 19.0342 5.23531 20.1105 6.47252C21.1142 7.63159 21.7672 9.05113 21.7672 10.093C21.7672 10.6269 21.3561 11.0697 20.8602 11.0697Z"
            fill="white"/>
        <path
            d="M25.0928 11.0698C24.597 11.0698 24.1858 10.627 24.1858 10.093C24.1858 5.6 20.7998 1.95349 16.6277 1.95349C16.1319 1.95349 15.7207 1.5107 15.7207 0.976744C15.7207 0.442791 16.1319 0 16.6277 0C21.7914 0 25.9998 4.53209 25.9998 10.093C25.9998 10.627 25.5886 11.0698 25.0928 11.0698Z"
            fill="white"/>
    </StyledSvg>
);

const StyledSvg = styled.svg`
  width: 16px;
  max-width: 16px;
  min-width: 16px;
  height: 18px;
  max-height: 18px;
  min-height: 18px;
  margin: 0 15px 0 0;

  * {
    stroke: transparent;
    fill: #4D4D4D;
  }

  @media only screen and (min-width: ${BREAKPOINT_SM}px) {
    * {
      fill: #ffffff;
    }
  }

  @media only screen and (min-width: ${BREAKPOINT_LG}px) {
    width: 26px;
    max-width: 26px;
    min-width: 26px;
    height: 28px;
    max-height: 28px;
    min-height: 28px;
  }
`;

const CallUsText = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  padding-right: 3px;
  text-align: left;

  &, p, a {
    text-decoration: none;
    color: #4D4D4D;
  }

  p {
    margin: 0;
  }

  @media only screen and (min-width: ${BREAKPOINT_SM}px) {
    &, p, a {
      color: #FFFFFF;
    }
  }

  @media only screen and (min-width: ${BREAKPOINT_LG}px) {
    font-size: 24px;
    line-height: 150%;
  }
`;

const DisclaimerText = styled.div`
  margin-top: 14px;
  text-align: center;

  &, p, a {
    font-size: 12px;
    line-height: 110%;
    padding: 0 2px;
    text-decoration: none;
    color: #4D4D4D;
  }

  p {
    margin: 0;
  }

  @media only screen and (min-width: ${BREAKPOINT_SM}px) {
    &, p, a {
      color: #FFFFFF;
    }
  }

  @media only screen and (min-width: ${BREAKPOINT_LG}px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 140%;
    text-align: left;
    margin-top: 33px;
    max-width: 760px;
  }
`;

const MedicareAdvantagePage = () => {
  const { page } = useMedicareAdvantagePageQuery();

  return (
    <Layout pageClass="medicare-advantage">
      <Global styles={PageStyles} />
      <MedicareAdvantageHero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}
        bgColor="#F2F2F2">
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm
            light
            btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
            inputId="medicarePageHeroLocation"
            hideFooter
            footerContent={''}
        />
          <CallUsCtn>
              <PhoneIcon/>
              <CallUsText dangerouslySetInnerHTML={{__html: page.pageHeroFields.callUs}}/>
          </CallUsCtn>
        <DisclaimerText className="hero-disclaimer" dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvPostHeroDisclaimer }}/>
      </MedicareAdvantageHero>
      <FlexedSection
        color={page.medicareAdvantagePageCustomFields.medicareAdvSection1.color}
        heading={page.medicareAdvantagePageCustomFields.medicareAdvSection1.heading}>
        <MedicareAccordion
          title={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion1.heading}
          content={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion1.content}
          html />
        <MedicareAccordion
          title={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion2.heading}
          content={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion2.content}
          html />
        <MedicareAccordion
          title={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion3.heading}
          content={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion3.content}
          html />
        <PostAccordionText dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvPostAccordionText }} />
      </FlexedSection>
      <Section
        page="medicare-advantage"
        color={page.medicareAdvantagePageCustomFields.medicareAdvSection2.color}>
        <Cards openAtMobile>
          <Card
            icon={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.icon.sourceUrl}
            mobile={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.mobile.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.link}>
              <MedicareCardText className="card-link" dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard1.content }}/>
          </Card>
          <Card
            icon={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.icon.sourceUrl}
            mobile={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.mobile.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.link}>
            <MedicareCardText className="card-link" dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard2.content }}/>
          </Card>
          <Card
            icon={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.icon.sourceUrl}
            mobile={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.mobile.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.link}>
            <MedicareCardText className="card-link" dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection2.medicareAdvCards.medicareAdvCard3.content }}/>
          </Card>
        </Cards>
      </Section>

      <GuideCTA>
        <MedicareCtaTitle>{page.medicareAdvantagePageCustomFields.guideCta.headline}</MedicareCtaTitle>
        <a href={page.medicareAdvantagePageCustomFields.guideCta.button.link} onClick={routeLink}>
          <Button background="accent-alt" border="light" color="light">
            {page.medicareAdvantagePageCustomFields.guideCta.button.text}
          </Button>
        </a>
      </GuideCTA>

      <MedicareMedial color={page.medicareAdvantagePageCustomFields.medicareAdvSection3.color}>
        <div dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn1.heading }} />
        <div className="button-container">
          <a href={page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button1.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button1.text}, TTY 771
            </Button>
          </a>
          <a href={page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button2.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button2.text}
            </Button>
          </a>
        </div>
      </MedicareMedial>
      <Section
        color={page.medicareAdvantagePageCustomFields.medicareAdvSection4.color}
        heading={page.medicareAdvantagePageCustomFields.medicareAdvSection4.heading}>
        <RelatedContent />
        <Cards>
          <Card
            image={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent1.image.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent1.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent1.link}>
            <p dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent1.content}} />
          </Card>
          <Card
            image={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent2.image.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent2.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent2.link}>
            <p dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent2.content}} />
          </Card>
          <Card
            image={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent3.image.sourceUrl}
            title={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent3.title}
            link={page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent3.link}>
            <p dangerouslySetInnerHTML={{ __html: page.medicareAdvantagePageCustomFields.medicareAdvSection4.relatedContent.relatedContent3.content}} />
          </Card>
        </Cards>

        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page.medicareAdvantagePageCustomFields.medicareAdvSection4.cta.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.medicareAdvantagePageCustomFields.medicareAdvSection4.cta.text}
            </Button>
          </a>
        </div>
      </Section>
      <Footer>
          {page.disclaimers.disclaimer}
      </Footer>
    </Layout>
  )
}

export default MedicareAdvantagePage

export const Head = () => {
  const { page } = useMedicareAdvantagePageQuery();
  return (
    <>
      <PageHead
        title={page.seo.title}
        description={page.seo.metaDesc}/>
    </>
  )
}
