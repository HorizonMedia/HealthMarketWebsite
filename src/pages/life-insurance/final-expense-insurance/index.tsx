// Library
import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";

// Query
import { useFinalExpensePageQuery } from "../../../hooks/insurance/useFinalExpensePageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading,
  SectionOneInner,
  SectionOneInnerContent,
  ListHeading,
  ListWrapper,
  RelatedContentWrapper
} from "../../../components/pages/styles/FinalExpenseStyles";

// Scripts
import { routeLink } from '../../../static/scripts/global';

// Components
import Layout from "../../../components/Layout";
import PageHead from "../../../components/PageHead";
import Hero from "../../../components/Hero";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import Button from "../../../components/Buttons/Button";
import Section from "../../../components/Sections";
import ListItem from "../../../components/Lists/ListItem";
import List from '../../../components/Lists';
import FlexedSection from "../../../components/Sections/FlexedSection";
import Accordion from "../../../components/Accordions";
import Medial from "../../../components/Medials";
import RelatedContent from "../../../components/RelatedContent";
import Cards from "../../../components/Cards";
import Card from "../../../components/Cards/Card";
import Footer from "../../../components/Footer";

const FinalExpensePage = () => {
  const { page } = useFinalExpensePageQuery();

  const [hasRelated, setHasRelated] = useState(false);

  useEffect(() => {
    let n = 0;
    let delay = setInterval(() => {
      const beContainer = document.getElementById('relatedContent');
      if (n > 0 && beContainer?.childElementCount > 0) {
        setHasRelated(true);
      } else {
        setHasRelated(false);
      }
      if (n >= 5) clearInterval(delay);
      n++;
    }, 50);
  }, []);

  return (
    <Layout pageClass="final-expense">
      <Global styles={PageStyles} />
      <Hero
        image={page?.pageHeroFields.heroImage.sourceUrl}
        mobileImage={page?.pageHeroFields.mobileHeroImage.sourceUrl}
        bgColor="#F4F3F1">
        <HeroHeading>{page?.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page?.pageHeroFields.subheadline}</HeroSubheading>
        <div className="form-container">
        <PageHeroForm
            light
            btnLeftText={page?.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page?.pageHeroFields.heroButtons.heroButton2.text}
            inputId="finalExpensePageHeroLocation"
            footerContent={page?.pageHeroFields.callUs} />
            </div>
      </Hero>

      <Section
        color={page?.finalExpensePageCustomFields.finalExpenseSection1.color}
        heading={page?.finalExpensePageCustomFields.finalExpenseSection1.heading}
        subheading={page?.finalExpensePageCustomFields.finalExpenseSection1.subheading}
        html={true}>
        <SectionOneInner>
          <SectionOneInnerContent>
            <List>
              <ListHeading>{page?.finalExpensePageCustomFields.finalExpenseSection1.list.listHeading}</ListHeading>
              <ListItem heading={page?.finalExpensePageCustomFields.finalExpenseSection1.list.listItem1.text} />
              <ListItem heading={page?.finalExpensePageCustomFields.finalExpenseSection1.list.listItem2.text} />
              <ListItem heading={page?.finalExpensePageCustomFields.finalExpenseSection1.list.listItem3.text} />
              <ListItem heading={page?.finalExpensePageCustomFields.finalExpenseSection1.list.listItem4.text} />
            </List>
            <div className="full-rounded" style={{ marginTop: "37px" }}>
              <a href={page?.finalExpensePageCustomFields?.finalExpenseSection1?.button?.link} onClick={routeLink}>
                <Button background="accent-alt" border="light" color="light">
                  {page?.finalExpensePageCustomFields?.finalExpenseSection1?.button?.text}
                </Button>
              </a>
            </div>
          </SectionOneInnerContent>
        </SectionOneInner>
      </Section>
      
      <FlexedSection
        color={page?.finalExpensePageCustomFields.finalExpenseSection2.color}
        heading={page?.finalExpensePageCustomFields.finalExpenseSection2.heading}>
        <Accordion
          title={page?.finalExpensePageCustomFields.finalExpenseSection2.accordions.accordion1.title}
          content={page?.finalExpensePageCustomFields.finalExpenseSection2.accordions.accordion1.content}
          html />
      </FlexedSection>

      <Medial color={page?.finalExpensePageCustomFields.finalExpenseSection3.color}>
        <div dangerouslySetInnerHTML={{ __html: page?.finalExpensePageCustomFields.finalExpenseSection3.columns.column1.heading }} />
        <div className="button-container">
          <a href={page?.finalExpensePageCustomFields.finalExpenseSection3.columns.column2.button.button1.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page?.finalExpensePageCustomFields.finalExpenseSection3.columns.column2.button.button1.text}
            </Button>
          </a>
          <a href={page?.finalExpensePageCustomFields.finalExpenseSection3.columns.column2.button.button2.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page?.finalExpensePageCustomFields.finalExpenseSection3.columns.column2.button.button2.text}
            </Button>
          </a>
        </div>
      </Medial>

      <Section
        color={page?.finalExpensePageCustomFields?.finalExpenseSection4?.color}
        heading={page?.finalExpensePageCustomFields?.finalExpenseSection4?.heading}>
        <RelatedContent />
        {(!hasRelated) ? (
          <RelatedContentWrapper>
          <Cards relatedContent={true}>
            <Card
              image={page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent1?.image?.sourceUrl}
              title={page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent1?.title}
              link={page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent1?.link}>
              <p dangerouslySetInnerHTML={{ __html: page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent1?.content}} />
            </Card>
            <Card
              image={page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent2?.image?.sourceUrl}
              title={page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent2?.title}
              link={page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent2?.link}>
              <p dangerouslySetInnerHTML={{ __html: page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent2?.content}} />
            </Card>
            <Card
              image={page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent3?.image?.sourceUrl}
              title={page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent3?.title}
              link={page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent3?.link}>
              <p dangerouslySetInnerHTML={{ __html: page?.finalExpensePageCustomFields?.finalExpenseSection4?.relatedContent?.relatedContent3?.content}} />

            </Card>
          </Cards>
          </RelatedContentWrapper>
        ) : null}

        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page?.finalExpensePageCustomFields?.finalExpenseSection4?.cta?.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page?.finalExpensePageCustomFields?.finalExpenseSection4?.cta?.text}
            </Button>
          </a>
        </div>
      </Section>

      <Footer>
          {page?.disclaimers.disclaimer}
      </Footer>
    </Layout>
  )
}

export default FinalExpensePage

export const Head = () => {
  const { page } = useFinalExpensePageQuery();
  return (
    <>
      <PageHead
        title={page?.seo?.title}
        description={page?.seo?.metaDesc}/>
    </>
  )
}
