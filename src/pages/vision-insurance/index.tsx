// Library
import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";

// Query
import { useVisionPageQuery } from "../../hooks/insurance/useVisionPageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading,
  SectionOneInner,
  SectionOneInnerContent,
  ListHeading,
  ListWrapper,
  RelatedContentWrapper,
  ResourceWrapper,
  PageContainer
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
import ListItem from "../../components/Lists/ListItem";
import List from '../../components/Lists';
import Medial from "../../components/Medials";
import FlexedSection from "../../components/Sections/FlexedSection";
import Accordion from "../../components/Accordions";
import Callouts from "../../components/Callouts";
import Callout from "../../components/Callouts/Callout";
import Footer from "../../components/Footer";

const VisionInsurancePage = () => {
  const { page } = useVisionPageQuery();
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
      <PageContainer className="vision-insurance">
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

      <Section
          color={page.visionPageCustomFields.visionSection1.sectionColor}
          heading={page.visionPageCustomFields.visionSection1.sectionHeading}
          subheading={page.visionPageCustomFields.visionSection1.sectionSubheading}
          html={true}>
        <SectionOneInner>
          <SectionOneInnerContent>
            <List>
              <ListHeading>{page.visionPageCustomFields.visionSection1.section1List.listHeading}</ListHeading>
              <ListWrapper>
              <ListItem heading={page.visionPageCustomFields.visionSection1.section1List.listItem1?.text} />
              <ListItem heading={page.visionPageCustomFields.visionSection1.section1List.listItem2?.text} />
              <ListItem heading={page.visionPageCustomFields.visionSection1.section1List.listItem3?.text} />
              </ListWrapper>
            </List>
          </SectionOneInnerContent>
        </SectionOneInner>
      </Section>

      <Medial color={page.visionPageCustomFields.visionSection2.sectionColor}>
        <div dangerouslySetInnerHTML={{ __html: page.visionPageCustomFields.visionSection2.visionCtaColumns.column2.col2Heading }} />
        <div className="button-container">
          <a href={page.visionPageCustomFields.visionSection2.visionCtaColumns.column3.col3Button.button1.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.visionPageCustomFields.visionSection2.visionCtaColumns.column3.col3Button.button1.text}
            </Button>
          </a>
          <a href={page.visionPageCustomFields.visionSection2.visionCtaColumns.column3.col3Button.button2.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.visionPageCustomFields.visionSection2.visionCtaColumns.column3.col3Button.button2.text}
            </Button>
          </a>
        </div>
      </Medial>

      <Section
        color={page.visionPageCustomFields.visionSection3.sectionColor}
        heading={page.visionPageCustomFields.visionSection3.sectionHeading}>
        <RelatedContent />
          <ResourceWrapper>
          <Cards relatedContent={true}>
            <Card
              image={page.visionPageCustomFields.visionSection3.resources.resource1.image.sourceUrl}
              title={page.visionPageCustomFields.visionSection3.resources.resource1.heading}
              link={page.visionPageCustomFields.visionSection3.resources.resource1.link}>
              <p dangerouslySetInnerHTML={{ __html: page.visionPageCustomFields.visionSection3.resources.resource1.content}} />
            </Card>
            <Card
              image={page.visionPageCustomFields.visionSection3.resources.resource2.image.sourceUrl}
              title={page.visionPageCustomFields.visionSection3.resources.resource2.heading}
              link={page.visionPageCustomFields.visionSection3.resources.resource2.link}>
              <p dangerouslySetInnerHTML={{ __html: page.visionPageCustomFields.visionSection3.resources.resource2.content}} />
            </Card>
          </Cards>
          </ResourceWrapper>
      </Section>

      <Section
        color={page.visionPageCustomFields.visionSection4.sectionColor}
        heading={page.visionPageCustomFields.visionSection4.sectionHeading}>
        <RelatedContent />
        {(!hasChildren) ? (
          <RelatedContentWrapper>
          <Cards relatedContent={true}>
            <Card
              image={page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent1.image.sourceUrl}
              title={page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent1.heading}
              link={page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent1.link}>
              <p dangerouslySetInnerHTML={{ __html: page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent1.content}} />
            </Card>
            <Card
              image={page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent2.image.sourceUrl}
              title={page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent2.heading}
              link={page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent2.link}>
              <p dangerouslySetInnerHTML={{ __html: page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent2.content}} />
            </Card>
            <Card
              image={page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent3.image.sourceUrl}
              title={page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent3.heading}
              link={page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent3.link}>
              <p dangerouslySetInnerHTML={{ __html: page.visionPageCustomFields.visionSection4.relatedContent.visionRelatedContent3.content}} />
            </Card>
          </Cards>
          </RelatedContentWrapper>
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
      </PageContainer>
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
