// Library
import * as React from "react"
import { Global } from "@emotion/react";

// Query
import { useMedicarePageQuery } from "../../hooks/insurance/useMedicarePageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading
} from "../../components/pages/styles/MedicareStyles";

// Scripts
import { routeLink } from '../../static/scripts/global';

// Components
import Layout from "../../components/Layout";
import PageHead from "../../components/PageHead";
import Hero from "../../components/Hero";
import PageHeroForm from "../../components/Hero/PageHeroForm";
import Button from "../../components/Buttons/Button";
import Section from "../../components/Sections";
import Cards from "../../components/Cards";
import Card from "../../components/Cards/Card";
import FlexedSection from "../../components/Sections/FlexedSection";
import Accordion from "../../components/Accordions";
import Medial from "../../components/Medials";
import Callouts from "../../components/Callouts";
import Callout from "../../components/Callouts/Callout";
import Footer from "../../components/Footer";

const MedicarePage = () => {
  const { page } = useMedicarePageQuery();
  const callouts = page.calloutsCustomField.callouts;

  return (
    <Layout pageClass="medicare">
      <Global styles={PageStyles} />
      <Hero
        image={page.pageHeroFields.heroImage?.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage?.sourceUrl}
        bgColor="#5899D1">
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm
            light
            btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
            inputId="medicarePageHeroLocation"
            footerContent={page.pageHeroFields.callUs}
            heroDisclaimer={page.pageHeroFields.heroDisclaimer} />
        <div className="hero-disclaimer" dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection1.disclaimer }} />
      </Hero>
      <Section
        page="medicare"
        color={page.medicarePageCustomFields.medicareSection1.color}
        heading={page.medicarePageCustomFields.medicareSection1.heading}>
        <Cards openAtMobile>
          <Card
            icon={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard1.icon.sourceUrl}
            mobile={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard1.mobile.sourceUrl}
            title={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard1.title}
            link={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard1.link}>
            <p className="card-link" dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard1.content }} />
          </Card>
          <Card
            icon={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard2.icon.sourceUrl}
            mobile={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard2.mobile.sourceUrl}
            title={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard2.title}
            link={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard2.link}>
            <p className="card-link" dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard2.content }} />
          </Card>
          <Card
            icon={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard3.icon.sourceUrl}
            mobile={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard3.mobile.sourceUrl}
            title={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard3.title}
            link={page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard3.link}>
            <p className="card-link" dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection1.medicareCards.medicareCard3.content }} />
          </Card>
        </Cards>
      </Section>
      <FlexedSection
        color={page.medicarePageCustomFields.medicareSection2.color}
        heading={page.medicarePageCustomFields.medicareSection2.heading}>
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion1.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion1.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion2.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion2.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion3.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion3.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion4.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion4.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion5.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion5.content}
          html />
        <Accordion
          title={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion6.heading}
          content={page.medicarePageCustomFields.medicareSection2.medicareAccordions.medicareAccordion6.content}
          html />
      </FlexedSection>
      <Medial color={page.medicarePageCustomFields.medicareSection3.color}>
        <div dangerouslySetInnerHTML={{ __html: page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn1.heading }} />
        <div className="button-container">
          <a href={page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn2.button.button1.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn2.button.button1.text}
            </Button>
          </a>
          <a href={page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn2.button.button2.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.medicarePageCustomFields.medicareSection3.medicareColumns.medicareColumn2.button.button2.text}
            </Button>
          </a>
        </div>
      </Medial>
      <Section color="light">
        <Callouts>
            {(callouts) ? (
                Object.keys(callouts).map((index) => {
                    const callout = callouts[index];
                    return (
                        <Callout
                            number={callout.number}
                            tagline={callout.tagline}
                            title={callout.title}
                            description={callout.description}
                            disclaimer={callout.disclaimer}
                        />
                    )
                })
            ) : null}
        </Callouts>
      </Section>
      <Footer>
          {page.disclaimers.disclaimer}
      </Footer>
    </Layout>
  )
}

export default MedicarePage

export const Head = () => {
  const { page } = useMedicarePageQuery();
  return (
    <>
      <PageHead
        title={page.seo.title}
        description={page.seo.metaDesc}/>
    </>
  )
}
