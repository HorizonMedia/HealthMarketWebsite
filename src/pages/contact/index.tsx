// Library
import React, { useEffect } from 'react';
import { Global } from '@emotion/react';

// Queries
import { useContactPageQuery } from '../../hooks/useContactPageQuery';

// Styles
import { SectionOneSubheading, SectionOneInner, CalloutSection, PageContainer, PageStyles } from "../../components/pages/styles/ContactStyles";

// Components
import Layout from '../../components/Layout';
import PageHead from '../../components/PageHead';
import Section from '../../components/Sections';
import Callout from '../../components/Callouts/Callout';
import Footer from '../../components/Footer';
import Button from '../../components/Buttons/Button';

const ContactPage = () => {
  const { page } = useContactPageQuery();
  const callout1 = page.calloutsCustomField.callouts.callout1;
  const callout2 = page.calloutsCustomField.callouts.callout2;
  const callout3 = page.calloutsCustomField.callouts.callout3;

  return (
    <Layout staticHeader pageClass="contact">
      <Global styles={PageStyles}/>
      <PageContainer className="contact-us-page">
      <Section page="contact" 
        color={page.contactPageCustomFields.section1.sectionColor}
        heading={page.contactPageCustomFields.section1.sectionHeading}
      >
        <SectionOneInner>
          <SectionOneSubheading dangerouslySetInnerHTML={{ __html: page.contactPageCustomFields.section1.sectionSubheading}} />
          <a href={page.contactPageCustomFields.section1.sectionCta.link}
          className="phone-cta show-at-mobile">
            <Button style={{borderRadius: "4px", height: 'fit-content'}} background="accent-alt" border="light" color="light">
            {page.contactPageCustomFields.section1.sectionCta.text}
            </Button>
          </a>
          <a className="phone-cta hide-at-mobile">{page.contactPageCustomFields.section1.sectionCta.text}</a>
        </SectionOneInner>
      </Section>
      <Section
      color="primary">
        <CalloutSection>
          <Callout
            number={callout1.number}
            tagline={callout1.tagline}
            title={callout1.title}
            description={callout1.description}
            disclaimer={callout1.disclaimer}
          />
          <Callout
            number={callout2.number}
            tagline={callout2.tagline}
            title={callout2.title}
            description={callout2.description}
            disclaimer={callout2.disclaimer}
          />
          <Callout
            number={callout3.number}
            tagline={callout3.tagline}
            title={callout3.title}
            description={callout3.description}
            disclaimer={callout3.disclaimer}
          />
        </CalloutSection>
      </Section>
      </PageContainer>
      <Footer>
        {page.disclaimers.disclaimer}
      </Footer>
    </Layout>
  )
}

export default ContactPage

export const Head = () => {
  const { page } = useContactPageQuery();
  return (
    <>
      <PageHead
        title={page.seo.title}
        description={page.seo.metaDesc}/>
    </>
  )
}
