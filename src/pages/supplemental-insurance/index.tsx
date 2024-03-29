// Library
import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";

// Query
import { useSupplementalPageQuery } from "../../hooks/insurance/useSupplementalPageQuery"

// Styles
import {
  PageStyles,
  HeroHeading,
  HeroSubheading,
  BestPriceImage,
  BestPriceImageMobile
} from "../../components/pages/styles/SupplementalInsStyles";

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
import Callouts from "../../components/Callouts";
import Callout from "../../components/Callouts/Callout";
import RelatedContent from "../../components/RelatedContent";
import Footer from "../../components/Footer";

const HealthInsurancePage = () => {
  const { page } = useSupplementalPageQuery();
  const plans = page.suppPageCustomFields.suppSection1.suppPlans;
  const callouts = page.calloutsCustomField.callouts;
  const showBestPrice = page.suppPageCustomFields.suppSection1.bestPrice.active;

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
    <Layout pageClass="supplemental-insurance">
      <Global styles={PageStyles} />
      <Hero
        image={page.pageHeroFields.heroImage?.sourceUrl}
        mobileImage={page.pageHeroFields.mobileHeroImage?.sourceUrl}
        centered>
        <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
        <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
        <PageHeroForm
            centered
            btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
            btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
            inputId="supplementalPageHeroLocation"
            footerContent={page.pageHeroFields.callUs} />
      </Hero>
      <Section
        color={page.suppPageCustomFields.suppSection1.color}
        heading={page.suppPageCustomFields.suppSection1.heading}
        classes="has-guarantee"
        guarantee={showBestPrice}
        bestPrice={(
          <>
            <BestPriceImage src={page.suppPageCustomFields.suppSection1.bestPrice.image.sourceUrl} />
            <BestPriceImageMobile src={page.suppPageCustomFields.suppSection1.bestPrice.mobileImage.sourceUrl} />
          </>
        )}>
        <Cards>
          {(plans) ? (
            Object.keys(plans).map((plan) => {
              return (
                <Card
                  icon={plans[plan].icon.sourceUrl}
                  mobile={plans[plan].mobileIcon?.sourceUrl}
                  title={plans[plan].title}
                  link={plans[plan].link}>
                  <p dangerouslySetInnerHTML={{ __html: plans[plan].content }} />
                </Card>
              )
            })
          ) : null}
        </Cards>
      </Section>
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
        color={page.suppPageCustomFields.suppSection2.color}
        heading={page.suppPageCustomFields.suppSection2.heading}>
        <RelatedContent />
        {(!hasChildren) ? (
          <Cards relatedContent={true}>
            <Card
              image={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent1.image.sourceUrl}
              title={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent1.title}
              link={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent1.link}>
              <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent1.content}} />
            </Card>
            <Card
              image={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent2.image.sourceUrl}
              title={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent2.title}
              link={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent2.link}>
              <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent2.content}} />
            </Card>
            <Card
              image={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent3.image.sourceUrl}
              title={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent3.title}
              link={page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent3.link}>
              <div dangerouslySetInnerHTML={{ __html: page.suppPageCustomFields.suppSection2.suppRelatedContent.relatedContent3.content}} />
            </Card>
          </Cards>
        ) : null}
        <div className="full-rounded" style={{ textAlign: "center" }}>
          <a href={page.suppPageCustomFields.suppSection2.cta.link} onClick={routeLink}>
            <Button background="accent-alt" border="light" color="light">
              {page.suppPageCustomFields.suppSection2.cta.text}
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

export default HealthInsurancePage;

export const Head = () => {
  const { page } = useSupplementalPageQuery();
  return (
    <>
      <PageHead
        title={page.seo.title}
        description={page.seo.metaDesc}/>
      <script src="//cdn.bc0a.com/autopilot/f00000000075672/autopilot_sdk.js"></script>
    </>
  )
}
