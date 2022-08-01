// Library
import * as React from 'react';

// Styles
import {
    HeroHeading,
    HeroSubheading
} from '../../components/Hero/Variants/stdPageStyles';

// Components
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";
import Hero from '../../components/Hero';
import FlexedSection from '../../components/Sections/FlexedSection';
import List from '../../components/Lists';
import ListItem from '../../components/Lists/ListItem';
import Button from '../../components/Buttons/Button';
import SplitSection from '../../components/Sections/SplitSection';

// Images

// Queries
import { useHowWeHelpPageQuery } from '../../hooks/useHowWeHelpPageQuery';
import Accordion from '../../components/Accordions';
import Section from '../../components/Sections';
import Cards from '../../components/Cards';
import Card from '../../components/Cards/Card';

const HowWeHelpPage = () => {
  const { hwh } = useHowWeHelpPageQuery();
  console.log(hwh);

  return (
    <Layout>
      <Seo title="Home"/>
      <Hero
        image={hwh.featuredImage.node.sourceUrl}
        centered>
        <HeroHeading>{hwh.pageHeroHeadlines.headline}</HeroHeading>
        <HeroSubheading>{hwh.pageHeroHeadlines.subheadline}</HeroSubheading>
      </Hero>
      <FlexedSection
        heading="What you get with HealthMarkets"
        color="light">
        <List>
          {/* <ListItem heading={hwh.howWeHelpCustomFields.listItem1.heading}>
              <p>{hwh.howWeHelpCustomFields.listItem1.content}</p>
          </ListItem>
          <ListItem heading={hwh.howWeHelpCustomFields.listItem2.heading}>
              <p>{hwh.howWeHelpCustomFields.listItem2.content}</p>
          </ListItem>
          <ListItem heading={hwh.howWeHelpCustomFields.listItem3.heading}>
              <p>{hwh.howWeHelpCustomFields.listItem3.content}</p>
          </ListItem> */}
          <ListItem heading={hwh.howWeHelpCustomFields.listItem4.heading}>
              <p>{hwh.howWeHelpCustomFields.listItem4.content}</p>
          </ListItem>
          <ListItem heading={hwh.howWeHelpCustomFields.listItem5.heading}>
              <p>{hwh.howWeHelpCustomFields.listItem5.content}</p>
          </ListItem>
          <ListItem heading={hwh.howWeHelpCustomFields.listItem6.heading}>
              <p>{hwh.howWeHelpCustomFields.listItem6.content}</p>
          </ListItem>
        </List>
        <Button background="accent" border="accent" color="light">Shop now</Button>
        <p><small>*We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area.  Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.</small></p>
      </FlexedSection>
      <SplitSection color="primary">
        <div className="left image">
          <img src={hwh.howWeHelpCustomFields.block1.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="right content">
          <h1>{hwh.howWeHelpCustomFields.block1.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.block1.content}</p>
          <Button background="accent" border="accent" color="light">{hwh.howWeHelpCustomFields.block1.button.text}</Button>
        </div>
      </SplitSection>
      <SplitSection color="primary">
        <div className="left content">
          <h1>{hwh.howWeHelpCustomFields.block2.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.block2.content}</p>
          <Button background="accent" border="accent" color="light">{hwh.howWeHelpCustomFields.block2.button.text}</Button>
        </div>
        <div className="right image">
          <img src={hwh.howWeHelpCustomFields.block2.image.sourceUrl} alt="woman on computer" />
        </div>
      </SplitSection>
      <SplitSection color="primary">
        <div className="left image">
          <img src={hwh.howWeHelpCustomFields.block3.image.sourceUrl} alt="woman on computer" />
        </div>
        <div className="right content">
          <h1>{hwh.howWeHelpCustomFields.block3.heading}</h1>
          <p>{hwh.howWeHelpCustomFields.block3.content}</p>
          <Button background="accent" border="accent" color="light">{hwh.howWeHelpCustomFields.block3.button.text}</Button>
        </div>
      </SplitSection>
      <FlexedSection
        heading="How we work"
        color="light">
        <Accordion
            title={hwh.howWeHelpCustomFields.accordionField1.heading}
            content={hwh.howWeHelpCustomFields.accordionField1.content}
        />
        <Accordion
            title={hwh.howWeHelpCustomFields.accordionField2.heading}
            content={hwh.howWeHelpCustomFields.accordionField2.content}
        />
        <Accordion
            title={hwh.howWeHelpCustomFields.accordionField3.heading}
            content={hwh.howWeHelpCustomFields.accordionField3.content}
        />
        <Accordion
            title={hwh.howWeHelpCustomFields.accordionField4.heading}
            content={hwh.howWeHelpCustomFields.accordionField4.content}
        />
        <Button background="accent" border="accent" color="light">Get your FitScore&reg;</Button>
      </FlexedSection>
      <Section
        heading="We’re committed to your privacy"
        subheading="We understand the importance of keeping your personally identifiable information safe. We protect it, as required by federal law."
        color="primary">
        <Cards>
          <Card
            icon={hwh.howWeHelpCustomFields.iconCard1.icon.sourceUrl}
            title={hwh.howWeHelpCustomFields.iconCard1.heading}>
            <p>{hwh.howWeHelpCustomFields.iconCard1.content}</p>
          </Card>
          <Card
            icon={hwh.howWeHelpCustomFields.iconCard2.icon.sourceUrl}
            title={hwh.howWeHelpCustomFields.iconCard2.heading}>
            <p>{hwh.howWeHelpCustomFields.iconCard2.content}</p>
          </Card>
          <Card
            icon={hwh.howWeHelpCustomFields.iconCard3.icon.sourceUrl}
            title={hwh.howWeHelpCustomFields.iconCard3.heading}>
            <p>{hwh.howWeHelpCustomFields.iconCard3.content}</p>
          </Card>
        </Cards>
        <div style={{ textAlign: "center", marginTop: "5.5rem" }}>
          <Button background="accent" border="accent" color="light">Find my plan</Button>
        </div>
      </Section>
    </Layout>
  );
};

export default HowWeHelpPage;


