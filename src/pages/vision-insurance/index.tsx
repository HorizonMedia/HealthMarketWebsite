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
  debugger
  const callouts = page.calloutsCustomField.callouts;

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
        bgColor="#E5E7E6">
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
        heading={page.visionPageCustomFields.visionSection1.sectionHeading}>
      </FlexedSection>
      <Section color={page.visionPageCustomFields.visionSection2.color}>
      </Section>
      <Section color={page.visionPageCustomFields.visionSection3.color}
      heading={page.visionPageCustomFields.visionSection3.sectionHeading}>
      </Section>
      <Section
        color={page.visionPageCustomFields.visionSection4.color}
        heading={page.visionPageCustomFields.visionSection4.sectionHeading}>
        <RelatedContent />
        {(!hasChildren) ? (
          <Cards relatedContent={true}>
            <Card
              image={page.visionPageCustomFields.visionSection4.relatedContent.relatedContent1?.image.sourceUrl}
              title={page.visionPageCustomFields.visionSection4.relatedContent.relatedContent1?.heading}
              link={page.visionPageCustomFields.visionSection4.relatedContent.relatedContent1?.link}>
              <p dangerouslySetInnerHTML={{ __html: page.visionPageCustomFields.visionSection4.relatedContent.relatedContent1?.content}} />
            </Card>
            <Card
              image={page.visionPageCustomFields.visionSection4.relatedContent.relatedContent2?.image.sourceUrl}
              title={page.visionPageCustomFields.visionSection4.relatedContent.relatedContent2?.heading}
              link={page.visionPageCustomFields.visionSection4.relatedContent.relatedContent2?.link}>
              <p dangerouslySetInnerHTML={{ __html: page.visionPageCustomFields.visionSection4.relatedContent.relatedContent2?.content}} />
            </Card>
            <Card
              image={page.visionPageCustomFields.visionSection4.relatedContent.relatedContent3.image.sourceUrl}
              title={page.visionPageCustomFields.visionSection4.relatedContent.relatedContent3.heading}
              link={page.visionPageCustomFields.visionSection4.relatedContent.relatedContent3.link}>
              <p dangerouslySetInnerHTML={{ __html: page.visionPageCustomFields.visionSection4.relatedContent.relatedContent3.content}} />
            </Card>
          </Cards>
        ) : null}
        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page.visionPageCustomFields.visionSection4.cta.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.visionPageCustomFields.visionSection4.cta.text}
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
