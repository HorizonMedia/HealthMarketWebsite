// Library
import * as React from "react"
import {Global} from "@emotion/react";

// Query
import {useMedicareAdvantagePageQuery} from "../../../hooks/insurance/useMedicareAdvantagePageQuery"

// Styles
import {
  AccordionPadding,
  GuideCTA,
  MedicareAccordionFixed,
  MedicareAccordionFixedContent,
  MedicareAdvantageSection,
  MedicareCardText,
  MedicareCtaTitle,
  MedicareMedial,
  PageStyles,
  HeroHeading,
  HeroSubheading
} from "../../../components/pages/styles/MedicareAdvantageStyles";

// Scripts
import {routeLink} from '../../../static/scripts/global';

// Components
import Layout from "../../../components/Layout";
import PageHead from "../../../components/PageHead";
import Hero from "../../../components/Hero";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import Medial from "../../../components/Medials";
import Button from "../../../components/Buttons/Button";
import Section from "../../../components/Sections";
import Cards from "../../../components/Cards";
import Card from "../../../components/Cards/Card";
import Footer from "../../../components/Footer";
import RelatedContent from "../../../components/RelatedContent";
import styled from "@emotion/styled";
import {BREAKPOINT_LG, BREAKPOINT_MD, BREAKPOINT_SM, BREAKPOINT_XL, NAV_STARTS_FLOATING} from "../../../breakpoints";
import FlexedSection from "../../../components/Sections/FlexedSection";
import Accordion from "../../../components/Accordions";

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

const toggleAccordion = (el) => {
  const parent = el.target.closest('.accordion')
  parent.classList.toggle('active')
}

const MedicareAdvantagePage = () => {
  const { page } = useMedicareAdvantagePageQuery();

  console.log(page);

  return (
    <Layout pageClass="medicare-advantage">
      <PageContainer>
      <Global styles={PageStyles} />
      <Hero
        image={page?.pageHeroFields?.heroImage?.sourceUrl}
        mobileImage={page?.pageHeroFields?.mobileHeroImage?.sourceUrl}
        bgColor="#F2F2F2">
        <HeroHeading>{page?.pageHeroFields?.headline}</HeroHeading>
        <HeroSubheading>{page?.pageHeroFields?.subheadline}</HeroSubheading>
        <PageHeroForm
            light
            btnLeftText={page?.pageHeroFields?.heroButtons?.heroButton1?.text}
            btnRightText={page?.pageHeroFields?.heroButtons?.heroButton2?.text}
            inputId="medicarePageHeroLocation"
            footerContent={page?.pageHeroFields?.callUs}
            heroDisclaimer={page?.pageHeroFields?.heroDisclaimer} />
        {/* <div className="hero-disclaimer" dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields?.medicareAdvPostHeroDisclaimer }} /> */}
      </Hero>

      {/* <HeroContainer>
        <HeroDesktopImg src={page?.pageHeroFields.heroImage.sourceUrl} alt="Hero"/>
        <HeroDesktopOpacity/>

        <HeroPadding>
          <MainTitle>{page?.pageHeroFields.headline}</MainTitle>
          <Subtitle>{page?.pageHeroFields.subheadline}</Subtitle>
          <PageHeroFormStyled
            light
            btnLeftText={page?.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page?.pageHeroFields.heroButtons.heroButton2.text}
            hideFooter
            footerContent={''}
            inputId="medicarePageHeroLocation"
          />
          <CallUsCtn>
            <PhoneIcon/>
            <CallUsText dangerouslySetInnerHTML={{__html: page?.pageHeroFields.callUs}}/>
          </CallUsCtn>
          <DisclaimerText className="hero-disclaimer" dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields.medicareAdvPostHeroDisclaimer }}/>
        </HeroPadding>
        <HeroMobileImg src={page?.pageHeroFields.mobileHeroImage.sourceUrl} alt="Hero"/>
      </HeroContainer> */}

      <FlexedSection
        color={page.medicareAdvantagePageCustomFields.medicareAdvSection1.color}
        heading={page.medicareAdvantagePageCustomFields.medicareAdvSection1.heading}>
        <Accordion
          title={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion1.heading}
          content={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion1.content}
          html />
        <Accordion
          title={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion2.heading}
          content={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion2.content}
          html />
        <Accordion
          title={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion3.heading}
          content={page.medicareAdvantagePageCustomFields.medicareAdvSection1.medicareAdvAccordions.medicareAdvAccordion3.content}
          html />
        <SectionText dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields?.medicareAdvSection1?.medicareAdvPostAccordionText }}/>
      </FlexedSection>

      <MedicareAdvantageSection
        page="medicare-advantage"
        color={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.color}>
        <Cards openAtMobile>
          <Card
            icon={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard1?.icon?.sourceUrl}
            mobile={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard1?.mobile?.sourceUrl}
            title={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard1?.title}
            link={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard1?.link}>
              <MedicareCardText className="card-link" dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard1?.content }}/>
          </Card>
          <Card
            icon={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard2?.icon?.sourceUrl}
            mobile={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard2?.mobile?.sourceUrl}
            title={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard2?.title}
            link={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard2?.link}>
            <MedicareCardText className="card-link" dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard2?.content }}/>
          </Card>
          <Card
            icon={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard3?.icon?.sourceUrl}
            mobile={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard3?.mobile?.sourceUrl}
            title={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard3?.title}
            link={page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard3?.link}>
            <MedicareCardText className="card-link" dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields?.medicareAdvSection2?.medicareAdvCards?.medicareAdvCard3?.content }}/>

          </Card>
        </Cards>
      </MedicareAdvantageSection>

      <GuideCTA>
        <MedicareCtaTitle only="mobile">
            {page?.medicareAdvantagePageCustomFields?.guideCta?.headlineMobile}
        </MedicareCtaTitle>
        <MedicareCtaTitle only="desktop">
            {page?.medicareAdvantagePageCustomFields?.guideCta?.headline}
        </MedicareCtaTitle>
        <a href={page?.medicareAdvantagePageCustomFields?.guideCta?.button?.link} onClick={routeLink}>
          <Button background="accent-alt" border="light" color="light">
            {page?.medicareAdvantagePageCustomFields?.guideCta?.button?.text}

          </Button>
        </a>
      </GuideCTA>

      {/* <Medial color={page?.medicareAdvantagePageCustomFields.medicareAdvSection3.color}>
        <div dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn1.heading }} />
        <div className="button-container">
          <a href={page?.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button1.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page?.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button1.text}, TTY 771
            </Button>
          </a>
          <a href={page?.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button2.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page?.medicareAdvantagePageCustomFields.medicareAdvSection3.medicareAdvColumns.medicareAdvColumn2.button.button2.text}
            </Button>
          </a>
        </div>
      </Medial> */}
      <MedicareMedial color={page?.medicareAdvantagePageCustomFields?.medicareAdvSection3?.color}>
        <div dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields?.medicareAdvSection3?.medicareAdvColumns?.medicareAdvColumn1?.heading }} />
        <div className="button-container">
          <a href={page?.medicareAdvantagePageCustomFields?.medicareAdvSection3?.medicareAdvColumns?.medicareAdvColumn2?.button?.button1?.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page?.medicareAdvantagePageCustomFields?.medicareAdvSection3?.medicareAdvColumns?.medicareAdvColumn2?.button?.button1?.text}, TTY 771
            </Button>
          </a>
          <a href={page?.medicareAdvantagePageCustomFields?.medicareAdvSection3?.medicareAdvColumns?.medicareAdvColumn2?.button?.button2?.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page?.medicareAdvantagePageCustomFields?.medicareAdvSection3?.medicareAdvColumns?.medicareAdvColumn2?.button?.button2?.text}
            </Button>
          </a>
        </div>
      </MedicareMedial>
      <Section
        color={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.color}
        heading={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.heading}>
        <RelatedContent />
        <Cards relatedContent={true}>
          <Card
            image={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent1?.image?.sourceUrl}
            title={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent1?.title}
            link={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent1?.link}>
            <p dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent1?.content}} />
          </Card>
          <Card
            image={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent2?.image?.sourceUrl}
            title={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent2?.title}
            link={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent2?.link}>
            <p dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent2?.content}} />
          </Card>
          <Card
            image={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent3?.image?.sourceUrl}
            title={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent3?.title}
            link={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent3?.link}>
            <p dangerouslySetInnerHTML={{ __html: page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.relatedContent?.relatedContent3?.content}} />

          </Card>
        </Cards>

        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.cta?.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page?.medicareAdvantagePageCustomFields?.medicareAdvSection4?.cta?.text}

            </Button>
          </a>
        </div>
      </Section>
      </PageContainer>
      <Footer>
          {page?.disclaimers?.disclaimer}
      </Footer>
    </Layout>
  )
}

// Medicare advantage section - START

const SectionContainer = styled.div`
  background: #f3fafd;
  padding: 40px 0 0;

  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    padding: 104px 0 0;
  }
`;

export const SectionColumns = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    display: flex;
    flex-direction: row;
  }
`;

export const SectionColumnLeft = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    width: 36.7%;
    flex-shrink: 0;
    max-width: 780px;
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

  padding: 18px 33px 14px;
  width: 64%;

  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    width: unset;
    font-size: 4.7vw;
    margin: 0;
    padding: 2.2vw 2.2vw 2.2vw 12.5vw;
  }

  @media only screen and (min-width: ${BREAKPOINT_XL + 200}px) {
    font-size: 90px;
  }
`;

export const SectionColumnRight = styled.div`
  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    flex-grow: 1;
    padding-left: 37px;
  }
`;

export const SectionText = styled.div`
  padding: 0;
  margin-top: 52px;
  color: var(--color-dark);

  &, p, a {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    text-decoration: none;
  }

  a {
    color: var(--color-primary);
  }

  @media only screen and (min-width: ${BREAKPOINT_MD}px) {
    margin-top: 106px;

    &, p, a {
      font-weight: 600;
      // Same size as list items
      font-size: 24px;
      line-height: 140%;
    }
  }

  @media only screen and (min-width: ${BREAKPOINT_XL}px) {
    &, p, a {
      //Big size (originally 32px) until large screens
      font-size: 32px;
    }
  }
`;

// Medicare advantage section - END

const PageContainer = styled.div`
  @media screen and (min-width: ${NAV_STARTS_FLOATING}px) {
    margin-top: 120px;
  }
`;

export default MedicareAdvantagePage

export const Head = () => {
  const { page } = useMedicareAdvantagePageQuery();
  return (
    <>
      <PageHead
        title={page?.seo?.title}
        description={page?.seo?.metaDesc}/>
    </>
  )
}
