// Library
import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";

// Query
import { useVisionPageQuery } from "../../hooks/insurance/useVisionPageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading
} from "../../components/pages/styles/VisionInsStyles";

// Scripts
import { routeLink } from "../../static/scripts/global";

// Components
import Layout from "../../components/Layout";
import PageHead from "../../components/PageHead";
import Hero from "../../components/Hero";
import PageHeroForm from "../../components/Hero/PageHeroForm";
import Button from "../../components/Buttons/Button";
import Section from "../../components/Sections";
import RelatedContent from "../../components/RelatedContent";
import Cards from "../../components/Cards";
import Card from "../../components/Cards/Card";
import FlexedSection from "../../components/Sections/FlexedSection";
import Accordion from "../../components/Accordions";
import Callouts from "../../components/Callouts";
import Callout from "../../components/Callouts/Callout";
import Footer from "../../components/Footer";

const VisionInsurancePage = () => {
  const { page } = useVisionPageQuery();
  // const callouts = page.calloutsCustomField.callouts;

  const [hasChildren, setHasChildren] = useState(false);

  useEffect(() => {
    let n = 0;
    let delay = setInterval(() => {
      const beContainer = document.getElementById('relatedContent');
      if (n > 0 && beContainer?.childElementCount > 0) {
        setHasChildren(true);
      } else {
        setHasChildren(false);
      }
      if (n >= 5) clearInterval(delay);
      n++;
    }, 50);
  }, []);

  return (
    <Layout pageClass="vision-insurance">
      <Global styles={PageStyles} />
      <Hero
        image={page.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}
        bgColor="#BBD9F1">
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm
            btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
            inputId="visionPageHeroLocation"
            footerContent={page.pageHeroFields.callUs} />
      </Hero>
      <FlexedSection
        color={page.visionPageCustomFields.visionSection1.color}
        heading={page.dentalPageCustomFields.dentalSection1.heading}>
        <Accordion
          title={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion1.heading}
          content={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion1.content} />
        <Accordion
          title={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion2.heading}
          content={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion2.content} />
        <Accordion
          title={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion3.heading}
          content={page.dentalPageCustomFields.dentalSection1.dentalAccordions.dentalAccordion3.content} />
        <a className="hide-at-mobile" href={page.dentalPageCustomFields.dentalSection1.cta.link} onClick={routeLink}>
          <Button background="accent-alt" border="light" color="light">{page.dentalPageCustomFields.dentalSection1.cta.text}</Button>
        </a>
      </FlexedSection>
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
      <Section
        color={page.dentalPageCustomFields.dentalSection2.color}
        heading={page.dentalPageCustomFields.dentalSection2.heading}>
        <RelatedContent />
        {(!hasChildren) ? (
          <Cards relatedContent={true}>
            <Card
              image={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent1.image.sourceUrl}
              title={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent1.heading}
              link={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent1.link}>
              <p dangerouslySetInnerHTML={{ __html: page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent1.content}} />
            </Card>
            <Card
              image={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent2.image.sourceUrl}
              title={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent2.heading}
              link={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent2.link}>
              <p dangerouslySetInnerHTML={{ __html: page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent2.content}} />
            </Card>
            <Card
              image={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent3.image.sourceUrl}
              title={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent3.heading}
              link={page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent3.link}>
              <p dangerouslySetInnerHTML={{ __html: page.dentalPageCustomFields.dentalSection2.dentalRelatedContent.dentalRelatedContent3.content}} />
            </Card>
          </Cards>
        ) : null}
        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page.dentalPageCustomFields.dentalSection2.cta.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.dentalPageCustomFields.dentalSection2.cta.text}
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

export default VisionInsurancePage

export const Head = () => {
  const { page } = useVisionPageQuery();
  return (
    <>
      <PageHead
        title={page.seo.title}
        description={page.seo.metaDesc}/>
      <script src="//cdn.bc0a.com/autopilot/f00000000075672/autopilot_sdk.js"></script>
    </>
  )
}
