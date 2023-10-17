// Library
import React, { ReactNode, useEffect, useState } from "react";
import { Global } from "@emotion/react";
import { graphql, withPrefix } from "gatsby";

// Styles
import {
  PageStyles,
  Wrapper,
  HeroHeading,
  HeroSubheading,
  InputGroup,
  FlyInForm,
  FormConfirm,
  Check,
  FormClose,
  FormHeading,
  FormBody,
  FormInputGroup,
  FormInput,
  FormFooter,
  AcaMedial
} from '../components/pages/styles/LandingPageStyles';

// Scripts
import {
  acaGTM,
  routeLink
} from '../static/scripts/global';

// Components
import Layout from "../components/Layout";
import PageHead from "../components/PageHead";
import Hero from '../components/Hero';
import Button from '../components/Buttons/Button';
import Section from "../components/Sections";
import FlexedSection from '../components/Sections/FlexedSection';
import CenteredSection from '../components/Sections/CenteredSection';
import Icons from "../components/Icons";
import Icon from "../components/Icons/Icon";
import Callout from "../components/Callouts/Callout";
import Callouts from "../components/Callouts";
import ListItem from "../components/Lists/ListItem";
import List from '../components/Lists';
import MegaList from '../components/Lists/MegaList';
import Medial from '../components/Medials';
import PageHeroForm from '../components/Hero/PageHeroForm';
import LPFooter from '../components/Footer/LPFooter';
import Accordion from "../components/Accordions";
import Cards from "../components/Cards";
import Card from "../components/Cards/Card";
import Input from "../components/Inputs/Input";
import CheckboxGroup from "../components/Inputs/Checkbox/CheckboxGroup";
import Checkbox from "../components/Inputs/Checkbox";
import AlternateSection from "../components/Sections/AlternateSection";

// Images
import checkImg from "../static/images/list-check.png"

interface IconInfo {
  link: String,
  title: String,
  mobileIcon: {
    sourceUrl: String
  },
  icon: {
    sourceUrl: String
  }
}

interface ListInfo {
  title: String,
  content: String
}

interface CardInfo {
  image: {
    sourceUrl: string,
  }
  link: string,
  title: string,
  content: string
}

interface AccordionInfo {
  title: String,
  content: String
}

interface SectionInfo {
  bgColor: String,
  contentType: String,
  isActive?: Boolean,
  headline: {
    headlineAlignment: String,
    headlineText: String,
  },
  icons: {
    icon1: IconInfo,
    icon2: IconInfo,
    icon3: IconInfo,
    icon4: IconInfo,
    icon5: IconInfo,
    icon6: IconInfo,
    icon7: IconInfo,
    icon8: IconInfo,
    icon9: IconInfo,
    icon10: IconInfo,
    icon11: IconInfo
  },
  list: {
    listItem1: ListInfo,
    listItem2: ListInfo,
    listItem3: ListInfo,
    listItem4: ListInfo
  },
  cards: {
    card1: CardInfo,
    card2: CardInfo,
    card3: CardInfo
  },
  accordions: {
    accordion1: AccordionInfo,
    accordion2: AccordionInfo,
    accordion3: AccordionInfo
  },
  cta: {
    showCta: boolean,
    background: string,
    border: string,
    color: string,
    link: string,
    text: string
  }
}

interface CalloutInfo {
  number: string,
  tagline: string,
  title: string,
  description: string,
  disclaimer: ReactNode
}

interface PageInfo {
  page: {
    id: string,
    title: string,
    slug: string,
    disclaimers: {
      disclaimer: string
    },
    landingPageCustomFields: {
      lpCta: {
        showCta?: boolean,
        ctaLocation?: string,
        ctaStyle: string,
        bgColor: string,
        ctaColumns: {
          column1: {
            contentType: string,
            image?: {
              sourceUrl: string
            },
            heading?: string,
            button?: {
              link: string,
              text: string
            }
          }
          column2: {
            contentType: string,
            image?: {
              sourceUrl: string
            },
            heading?: string,
            button?: {
              link: string,
              text: string
            }
          }
          column3?: {
            contentType: string,
            image?: {
              sourceUrl: string
            },
            heading?: string,
            button?: {
              link: string,
              text: string
            }
          }
        }
      },
      lpHero: {
        heroImage: {
          sourceUrl: string
        },
        heroImageMobile: {
          sourceUrl: string
        },
        heroSubheadline: string,
        heroHeadline: string,
        alignment: string,
        contentStyle: string,
        contentBgColor?: string,
        bgColor?: string,
        heroButtons: {
          showButtons: boolean,
          heroButton1: {
            text: string
          }
          heroButton2: {
            text: string
          }
        }
      },
      lpSections: {
        lpSection1: SectionInfo,
        lpSection2: SectionInfo,
        lpSection3: SectionInfo,
        lpSection4: SectionInfo,
        lpSection5: SectionInfo
      }
    }
    calloutsCustomField: {
      isActive: boolean,
      callouts: {
        callout1: CalloutInfo,
        callout2: CalloutInfo,
        callout3: CalloutInfo,
      }
    }
  }
}

const LPPage = ({data}: { data: PageInfo }) => {
  const [isFormOpen, setFormOpen] = useState(false);

  const { page } = data;
  const sections = page.landingPageCustomFields.lpSections;
  const callouts = page.calloutsCustomField.callouts;

  const submit = async (e) => {
    e.preventDefault();

    const data = e.target;
    const body = {
      fname: data.fName.value,
      lname: data.lName.value,
      phone: data.phone.value,
      zip: data.zipCode.value,
      email: data.email.value,
      medicare: false,
      shortTerm: false,
      acaHealth: true,
      dental: false,
      supplemental: false,
      vision: false
    }

    fetch(withPrefix('/api/contact-form'), {
      method: 'POST',
      body: JSON.stringify(body),
    }).then((res) => {
      if (!res.ok) {
        console.log(res);
      }
      res.json();
    }).then(() => {
      // activate confirmation modal
      let modal = document.querySelector('.confirmation');
      modal?.classList.add('submitted');

      // clear form
      document.getElementById('acaLpForm')?.reset();
    }).catch(() => {
      // log the error
      console.log('ERROR: Form not submitted successfully. Please try again.')
    });
  };

  useEffect(() => {
    const checkbox = document.querySelector('input#medicare');
    const disclaimer = document.querySelector('[data-disclaimer=medicare]');

    if (page.slug !== 'medicare-quoter-lp'
      && page.landingPageCustomFields.lpHero.contentStyle === 'half') {
      disclaimer?.classList.add('is-closed');
      checkbox?.addEventListener('click', () => {
        disclaimer?.classList.toggle('is-closed');
      });
    }

    if (page.slug === 'aca-insurance-plans') {
      const toggles = document.querySelectorAll('.aca-toggle');
      const inner = document.querySelector('.hero.open .half');
      const hero = document.querySelector('.hero.open');
      const form = document.querySelector('.acaform');
    
      toggles.forEach(toggle => {
        toggle?.addEventListener("click", () => {
          if (!isFormOpen && !form?.classList.contains('is-open')) {
            form?.classList.add('is-open');
            inner?.classList.add('form-open');
            hero?.classList.add('form-open');
            setFormOpen(true);
          } else {
            form?.classList.remove('is-open');
            inner?.classList.remove('form-open');
            hero?.classList.remove('form-open');
            setFormOpen(false);
          }
        });
      })
    }

    (page.slug === 'aca-insurance-plans') ? acaGTM() : null;
  }, []);

  return (
    <Layout pageClass={page.slug}>
      <Global styles={PageStyles} />
      <Wrapper>

      {(page.landingPageCustomFields.lpHero.contentStyle === "open") ? (
          <Hero
            image={page.landingPageCustomFields.lpHero.heroImage.sourceUrl}
            mobileImage={page.landingPageCustomFields.lpHero.heroImageMobile.sourceUrl}
            bgColor={(page.landingPageCustomFields.lpHero.bgColor) ? page.landingPageCustomFields.lpHero.bgColor : "#ffffff"}
            centered={(page.landingPageCustomFields.lpHero.alignment === "centered")}
            boxed={(page.landingPageCustomFields.lpHero.contentStyle === "boxed")}
            half={(page.landingPageCustomFields.lpHero.contentStyle === "half")}
            open={(page.landingPageCustomFields.lpHero.contentStyle === "open")}
            color={page.landingPageCustomFields.lpHero.contentBgColor}
            innerStyle={{flexBasis:'48%', width:'48%'}}
            >
            <div className="inner-contain">
              <HeroHeading>{page.landingPageCustomFields.lpHero.heroHeadline}</HeroHeading>
              <HeroSubheading>{page.landingPageCustomFields.lpHero.heroSubheadline}</HeroSubheading>
              <div className="button-container" style={{ maxWidth: '400px', marginBottom: '16px' }}>
                <a href={page.landingPageCustomFields.lpHero.heroButtons.heroButton1.link}>
                  <Button background="accent-alt" border="light" color="light">
                    {page.landingPageCustomFields.lpHero.heroButtons.heroButton1.text}
                  </Button>
                </a>
              </div>
              <div className="button-container" style={{ maxWidth: '400px' }}>
                <div className="aca-toggle">
                  <Button background="light" border="accent-alt" color="accent-alt">
                    {page.landingPageCustomFields.lpHero.heroButtons.heroButton2.text}
                  </Button>
                </div>
              </div>
            </div>
            <FlyInForm className="acaform">
              <FormConfirm className="confirmation">
                <div className="inner">
                  <Check>
                    <img src={checkImg} alt="list checkmark" />
                  </Check>
                  <p>Your call request has been successfully submitted. One of our licensed insurance agents will be in touch shortly.</p>
                </div>
              </FormConfirm>
              <FormClose className="close aca-toggle" />
              <FormHeading>
                <h4>Let's connect</h4>
                <p><small>Enter your information and a licensed insurance agent will contact you soon</small></p>
              </FormHeading>
              <FormBody id="acaLpForm" onSubmit={ submit }>
                <FormInputGroup>
                  <FormInput className="group">
                    <label htmlFor="fName">First Name<sup>*</sup></label>
                    <input id="fName" type="text" name="fName" required />
                  </FormInput>
                  <FormInput className="group">
                    <label htmlFor="lName">Last Name<sup>*</sup></label>
                    <input id="lName" type="text" name="lName" required />
                  </FormInput>
                  <FormInput className="group">
                    <label htmlFor="phone">Phone Number<sup>*</sup></label>
                    <input id="phone" type="phone" name="phone" required />
                  </FormInput>
                  <FormInput className="group">
                    <label htmlFor="email">Email<sup>*</sup></label>
                    <input id="email" type="email" name="email" required />
                  </FormInput>
                  <FormInput className="group">
                    <label htmlFor="zipCode">Zip Code<sup>*</sup></label>
                    <input id="zipCode" type="number" name="zipCode" pattern="[0-9]{5}" required />
                  </FormInput>
                </FormInputGroup>
                <p className="required"><sup>*</sup>Required field</p>
                <Button background="accent-alt" border="light" color="light">Agree and submit</Button>
              </FormBody>
              <FormFooter>
                <div className="disclaimer">
                  <p><small>By clicking the button above, you agree to being contacted by a licensed insurance agent from or on behalf of HealthMarkets about insurance products including ACA health insurance, Medicare Advantage, Prescription Drug Plans, Medicare Supplement, individual health, short term health, vision, dental and supplemental insurance plans. You understand the consent is not a condition of purchase and you may also receive a quote by contacting us by phone. You may revoke this consent at any time by contacting us at <a href="tel://18886379621">888-637-9621</a> to be placed on our do-not-call list. You understand your carrier’s message and data rates may apply. HealthMarkets has an array of products and services to offer that may be of interest to you. As an insurance agency authorized by the appropriate state and federal authorities, the information you provide and we collect may be used to provided details for those additional products and services. <a href="https://www.healthmarkets.com/privacy-policy/">Privacy Policy</a></small></p>
                </div>
              </FormFooter>
            </FlyInForm>
          </Hero>
        ) : (
          <Hero
            image={page.landingPageCustomFields.lpHero.heroImage.sourceUrl}
            mobileImage={page.landingPageCustomFields.lpHero.heroImageMobile.sourceUrl}
            bgColor={(page.landingPageCustomFields.lpHero.bgColor) ? page.landingPageCustomFields.lpHero.bgColor : "#ffffff"}
            centered={(page.landingPageCustomFields.lpHero.alignment === "centered")}
            boxed={(page.landingPageCustomFields.lpHero.contentStyle === "boxed")}
            half={(page.landingPageCustomFields.lpHero.contentStyle === "half")}
            color={page.landingPageCustomFields.lpHero.contentBgColor}
            >
            <HeroHeading>{page.landingPageCustomFields.lpHero.heroHeadline}</HeroHeading>
            <HeroSubheading>{page.landingPageCustomFields.lpHero.heroSubheadline}</HeroSubheading>
            {(page.landingPageCustomFields.lpHero.contentStyle !== "half") ? (
              <PageHeroForm
                centered={(page.landingPageCustomFields.lpHero.alignment === "centered")}
                btnLeftText={page.landingPageCustomFields.lpHero.heroButtons.heroButton1.text}
                btnRightText={page.landingPageCustomFields.lpHero.heroButtons.heroButton2.text}
                inputId={`${page.title.replaceAll(' ', '')}HeroLocation`}
                buttons={page.landingPageCustomFields.lpHero.heroButtons.showButtons} />
            ) : (
              <form>
                <InputGroup>
                  <Input id="fName" type="text" name="fName" placeholder="First name" required />
                  <Input id="lName" type="text" name="lName" placeholder="Last name" required />
                </InputGroup>
                <InputGroup>
                  <Input id="zipCode" type="number" name="zipCode" pattern="[0-9]{5}" placeholder="Zip code" required />
                  <Input id="email" type="email" name="email" placeholder="Email" required />
                </InputGroup>
                <CheckboxGroup title="Select all that apply">
                  <Checkbox id="health" name="health" label="Health plans" />
                  <Checkbox id="medicare" name="medicare" label="Medicare plans" />
                  <Checkbox id="dental" name="dental" label="Dental plans" />
                  <Checkbox id="vision" name="vision" label="Vision plans" />
                  <Checkbox id="live" name="live" label="Life plans" />
                  <Checkbox id="supplemental" name="supplemental" label="Supplemental plans" />
                </CheckboxGroup>
                <p className="contact-disclaimer" data-disclaimer="medicare"><small>We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE (TTY users should call 1- 844-704-7357), 24 hours a day/7 days a week, to get information on all of your options.</small></p>
                <p className="contact-disclaimer"><small>By clicking “Agree and submit” I expressly consent to my contact information being provided to HealthMarkets orone of their licensed insurance agents for future contact regarding health, life, supplemental, Medicare Advantage or Medicare Supplement insurance, depending on my need.  I understand I may receive phone calls (including to any wireless number that I provide) including automatic telephone dialing systems orby artificial/pre-recorded messages text message and/or emails for the purpose of marketing insurance products and services. By providing my information, I understand that my consent is not a condition of purchase of any product or services, and carrier messaging and data rates may apply. I may revoke this consent at any time by contacting us at <a href="tel:8886379621">888-637-9621</a> to be place on our do-not-call list. <a href="#">Privacy Policy</a></small></p>
                <Button background="accent-alt" border="light" color="light">Agree and submit</Button>
              </form>
            )}
          </Hero>
        )}

        {Object.keys(sections).map((i) => {
          const section = sections[i];

          if (section.isActive) {
            if (section.contentType === "List") {
              if (section.headline.headlineAlignment === "Centered") {
                return (
                  <CenteredSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <List>
                      {Object.keys(section.list).map((listItem) => 
                        (!section.list[listItem].title) ? null : (
                          <ListItem heading={section.list[listItem].title}>
                            <p>{section.list[listItem].content}</p>
                          </ListItem>
                        )
                      )}
                    </List>
                    {(section.cta.showCta) ? (
                      <div style={{ marginTop: "5.5rem" }}>
                        <a href={section.cta.link} onClick={routeLink}>
                          <Button
                            background={(section.cta.background === "accent") ? "accent-alt" : section.cta.background}
                            border={(section.cta.border === "accent") ? "light" : section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </CenteredSection>
                )
              } else {
                return (
                  <FlexedSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <List>
                      {Object.keys(section.list).map((listItem) => 
                        (!section.list[listItem].title) ? null : (
                          <ListItem heading={section.list[listItem].title}>
                            <p>{section.list[listItem].content}</p>
                          </ListItem>
                        )
                      )}
                    </List>
                    {(section.cta.showCta) ? (
                      <div>
                        <a href={section.cta.link} onClick={routeLink}>
                          <Button
                            background={(section.cta.background === "accent") ? "accent-alt" : section.cta.background}
                            border={(section.cta.border === "accent") ? "light" : section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </FlexedSection>
                )
              }
            }

            if (section.contentType === "Accordion") {
              if (section.headline.headlineAlignment === "Centered") {
                return (
                  <CenteredSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Accordion
                      title={section.accordions.heading}
                      content={section.accordions.content} />
                    {(section.cta.showCta) ? (
                      <div style={{ marginTop: "5.5rem" }}>
                        <a href={section.cta.link} onClick={routeLink}>
                          <Button
                            background={(section.cta.background === "accent") ? "accent-alt" : section.cta.background}
                            border={(section.cta.border === "accent") ? "light" : section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </CenteredSection>
                )
              } else {
                return (
                  <FlexedSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Accordion
                      title={section.accordions.heading}
                      content={section.accordions.content} />
                    {(section.cta.showCta) ? (
                      <div>
                        <a href={section.cta.link} onClick={routeLink}>
                          <Button
                            background={(section.cta.background === "accent") ? "accent-alt" : section.cta.background}
                            border={(section.cta.border === "accent") ? "light" : section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </FlexedSection>
                )
              }
            }

            if (section.contentType === "Cards") {
              if (section.headline.headlineAlignment === "Centered") {
                return (
                  <CenteredSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Cards openAtMobile>
                      {(section.cards) ? (
                        Object.keys(section.cards).map((i) => {
                          const card = section.cards[i];
                          return (
                            <Card
                              icon={card.image.sourceUrl}
                              title={card.title}
                              list={(card.list) ? card.list : null}
                              background={card.backgroundColor}
                              displayImage={card.displayCardImage}
                              nonClickable={true}>
                              <p dangerouslySetInnerHTML={{ __html: card.content }} />
                            </Card>
                          )
                        })
                      ) : null}
                    </Cards>
                    {(section.cta.showCta) ? (
                      <div style={{ marginTop: "5.5rem" }}>
                        <a href={section.cta.link} onClick={routeLink}>
                          <Button
                            background={(section.cta.background === "accent") ? "accent-alt" : section.cta.background}
                            border={(section.cta.border === "accent") ? "light" : section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </CenteredSection>
                )
              } else {
                return (
                  <Section
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Cards openAtMobile>
                      {(section.cards) ? (
                        Object.keys(section.cards).map((i) => {
                          const card = section.cards[i];
                          return (
                            <Card
                              icon={card.image.sourceUrl}
                              title={card.title}
                              list={(card.list) ? card.list : null}
                              background={card.backgroundColor}
                              displayImage={card.displayCardImage}
                              nonClickable={true}>
                              <p dangerouslySetInnerHTML={{ __html: card.content }} />
                            </Card>
                          )
                        })
                      ) : null}
                    </Cards>
                    {(section.cta.showCta) ? (
                      <div>
                        <a href={section.cta.link} onClick={routeLink}>
                          <Button
                            background={(section.cta.background === "accent") ? "accent-alt" : section.cta.background}
                            border={(section.cta.border === "accent") ? "light" : section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </Section>
                )
              }
            }

            if (section.contentType === "Icons") {
              if (section.headline.headlineAlignment === "Centered") {
                return (
                  <CenteredSection
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Icons>
                      {(section.icons) ? (
                        Object.keys(section.icons).map((i) => {
                          const icon = section.icons[i];
                          return (
                            <Icon
                              icon={icon.icon.sourceUrl}
                              mobile={icon.mobileIcon.sourceUrl}
                              title={icon.title}
                              link={icon.link} />
                          )
                        })
                      ) : null}
                    </Icons>
                    {(section.cta.showCta) ? (
                      <div style={{ marginTop: "5.5rem" }}>
                        <a href={section.cta.link} onClick={routeLink}>
                          <Button
                            background={(section.cta.background === "accent") ? "accent-alt" : section.cta.background}
                            border={(section.cta.border === "accent") ? "light" : section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </CenteredSection>
                )
              } else {
                return (
                  <Section
                    color={(section.bgColor) ? section.bgColor : "light"}
                    heading={section.headline.headlineText}>
                    <Icons>
                      {(section.icons) ? (
                        Object.keys(section.icons).map((i) => {
                          const icon = section.icons[i];
                          return (
                            <Icon
                              icon={icon.icon.sourceUrl}
                              mobile={icon.mobileIcon.sourceUrl}
                              title={icon.title}
                              link={icon.link} />
                          )
                        })
                      ) : null}
                    </Icons>
                    {(section.cta.showCta) ? (
                      <div>
                        <a href={section.cta.link} onClick={routeLink}>
                          <Button
                            background={(section.cta.background === "accent") ? "accent-alt" : section.cta.background}
                            border={(section.cta.border === "accent") ? "light" : section.cta.border}
                            color={section.cta.color}>
                            {section.cta.text}
                          </Button>
                        </a>
                      </div>
                    ) : null}
                  </Section>
                )
              }
            }

            if (section.contentType === "Mega List") {
              return (
                <AlternateSection
                  color={(section.bgColor) ? section.bgColor : "light"}
                  heading={section.headline.headlineText}
                  subheading={section.headline.subheadline.subheadlineText}>
                  <MegaList>
                    {Object.keys(section.megaList).map((listItem) => 
                      (!section.megaList[listItem].title) ? null : (
                        <ListItem heading={section.megaList[listItem].title}>
                          <p>{section.megaList[listItem].content}</p>
                        </ListItem>
                      )
                    )}
                  </MegaList>
                  {(section.cta.showCta) ? (
                    <div style={{ marginTop: "5.5rem" }}>
                      <a href={section.cta.link} onClick={routeLink}>
                        <Button
                          background={(section.cta.background === "accent") ? "accent-alt" : section.cta.background}
                          border={(section.cta.border === "accent") ? "light" : section.cta.border}
                          color={section.cta.color}>
                          {section.cta.text}
                        </Button>
                      </a>
                    </div>
                  ) : null}
                </AlternateSection>
              )
            }
          }
        })}

        {(page.slug === 'aca-insurance-plans') ? (
          <AcaMedial className="primary">
              <div className="inner">
                <img className="chat-bubble" src={page.landingPageCustomFields.lpCta.ctaColumns.column1.image?.sourceUrl} alt="Chat bubble icon" />
                <div dangerouslySetInnerHTML={{ __html: page.landingPageCustomFields.lpCta.ctaColumns.column2.heading }} style={{ color: '#009FDA' }} />
                <a href={page.landingPageCustomFields.lpCta.ctaColumns.column3?.button?.link} onClick={routeLink}>
                    <Button
                      background={(page.landingPageCustomFields.lpCta.bgColor === "accent") ? "primary" : "accent-alt"}
                      border={(page.landingPageCustomFields.lpCta.bgColor === "accent") ? "primary" : "light"}
                      color="light">
                        {page.landingPageCustomFields.lpCta.ctaColumns.column3?.button?.text}
                    </Button>
                </a>
              </div>
          </AcaMedial>
        ) : null}

        {(page.landingPageCustomFields.lpCta.showCta && page.landingPageCustomFields.lpCta.ctaLocation === 'before' && page.slug !== 'aca-insurance-plans') ? (
          <Medial
            color={page.landingPageCustomFields.lpCta.bgColor}>
              <img className="chat-bubble" src={page.landingPageCustomFields.lpCta.ctaColumns.column1.image?.sourceUrl} alt="Chat bubble icon" />
              <div dangerouslySetInnerHTML={{ __html: page.landingPageCustomFields.lpCta.ctaColumns.column2.heading }} style={{ color: '#009FDA' }} />
              <a href={page.landingPageCustomFields.lpCta.ctaColumns.column3?.button?.link} onClick={routeLink}>
                  <Button
                    background={(page.landingPageCustomFields.lpCta.bgColor === "accent") ? "primary" : "accent-alt"}
                    border={(page.landingPageCustomFields.lpCta.bgColor === "accent") ? "primary" : "light"}
                    color="light">
                      {page.landingPageCustomFields.lpCta.ctaColumns.column3?.button?.text}
                  </Button>
              </a>
          </Medial>
        ) : null}

        {(page.calloutsCustomField.isActive) ? (
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
        ) : null}

        {(page.landingPageCustomFields.lpCta.showCta && page.landingPageCustomFields.lpCta.ctaLocation === 'after') ? (
          <Medial
            color={page.landingPageCustomFields.lpCta.bgColor}>
              <img className="chat-bubble" src={page.landingPageCustomFields.lpCta.ctaColumns.column1.image?.sourceUrl} alt="Chat bubble icon" />
              <h1 dangerouslySetInnerHTML={{ __html: page.landingPageCustomFields.lpCta.ctaColumns.column2.heading }} />
              <a href={page.landingPageCustomFields.lpCta.ctaColumns.column3?.button?.link} onClick={routeLink}>
                  <Button
                    background={(page.landingPageCustomFields.lpCta.bgColor === "accent") ? "primary" : "accent-alt"}
                    border={(page.landingPageCustomFields.lpCta.bgColor === "accent") ? "primary" : "accent-alt"}
                    color="light">
                      {page.landingPageCustomFields.lpCta.ctaColumns.column3?.button?.text}
                  </Button>
              </a>
          </Medial>
        ) : null}
      </Wrapper>
      <LPFooter>
        {page.disclaimers.disclaimer}
      </LPFooter>
    </Layout>
  )
}

export default LPPage

export const Head = ({ data }) => {
  const { page } = data;
  return (
      <>
          <PageHead
            title={page.seo.title}
            description={page.seo.metaDesc} />
      </>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    page: wpLandingPage(slug: {eq: $slug}) {
      id
      title
      slug
      seo {
        fullHead
        title
        metaDesc
      }
      landingPageCustomFields {
        lpCta {
          showCta
          ctaLocation
          ctaStyle
          bgColor
          ctaColumns {
            column1 {
              button {
                link
                text
              }
              contentType
              heading
              image {
                sourceUrl
              }
            }
            column2 {
              button {
                link
                text
              }
              contentType
              heading
              image {
                sourceUrl
              }
            }
            column3 {
              button {
                link
                text
              }
              contentType
              heading
              image {
                sourceUrl
              }
            }
          }
        }
        lpHero {
          alignment
          contentStyle
          contentBgColor
          heroHeadline
          heroSubheadline
          heroImage {
            sourceUrl
          }
          heroImageMobile {
            sourceUrl
          }
          bgColor
          heroButtons {
            showButtons
            heroButton1 {
              hasLink
              text
              link
            }
            heroButton2 {
              hasLink
              text
              link
            }
          }
        }
        lpSections {
          lpSection1 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
              subheadline {
                alignment
                display
                subheadlineText
              }
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card2 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card3 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
            megaList {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
              listItem5 {
                title
                content
              }
              listItem6 {
                title
                content
              }
              listItem7 {
                title
                content
              }
              listItem8 {
                title
                content
              }
              listItem9 {
                title
                content
              }
              listItem10 {
                title
                content
              }
            }
          }
          lpSection2 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
              subheadline {
                alignment
                display
                subheadlineText
              }
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card2 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card3 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
            megaList {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
              listItem5 {
                title
                content
              }
              listItem6 {
                title
                content
              }
              listItem7 {
                title
                content
              }
              listItem8 {
                title
                content
              }
              listItem9 {
                title
                content
              }
              listItem10 {
                title
                content
              }
            }
          }
          lpSection3 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
              subheadline {
                alignment
                display
                subheadlineText
              }
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card2 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card3 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
            megaList {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
              listItem5 {
                title
                content
              }
              listItem6 {
                title
                content
              }
              listItem7 {
                title
                content
              }
              listItem8 {
                title
                content
              }
              listItem9 {
                title
                content
              }
              listItem10 {
                title
                content
              }
            }
          }
          lpSection4 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
              subheadline {
                alignment
                display
                subheadlineText
              }
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card2 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card3 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
            megaList {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
              listItem5 {
                title
                content
              }
              listItem6 {
                title
                content
              }
              listItem7 {
                title
                content
              }
              listItem8 {
                title
                content
              }
              listItem9 {
                title
                content
              }
              listItem10 {
                title
                content
              }
            }
          }
          lpSection5 {
            isActive
            bgColor
            contentType
            headline {
              headlineText
              headlineAlignment
              subheadline {
                alignment
                display
                subheadlineText
              }
            }
            cta {
              showCta
              background
              border
              color
              link
              text
            }
            accordions {
              accordion1 {
                title
                content
              }
              accordion2 {
                title
                content
              }
              accordion3 {
                title
                content
              }
              accordion4 {
                title
                content
              }
              accordion5 {
                title
                content
              }
            }
            cards {
              card1 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card2 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
              card3 {
                image {
                  sourceUrl
                }
                link
                title
                content
                backgroundColor
                displayCardImage
              }
            }
            icons {
              icon1 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon2 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon3 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon4 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon5 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon6 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon7 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon8 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon9 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon10 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
              icon11 {
                icon {
                  sourceUrl
                }
                mobileIcon {
                  sourceUrl
                }
                link
                title
              }
            }
            list {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
            }
            megaList {
              listItem1 {
                title
                content
              }
              listItem2 {
                title
                content
              }
              listItem3 {
                title
                content
              }
              listItem4 {
                title
                content
              }
              listItem5 {
                title
                content
              }
              listItem6 {
                title
                content
              }
              listItem7 {
                title
                content
              }
              listItem8 {
                title
                content
              }
              listItem9 {
                title
                content
              }
              listItem10 {
                title
                content
              }
            }
          }
        }
      }
      disclaimers {
        disclaimer
      }
      calloutsCustomField {
        isActive
        callouts {
          callout1 {
            number
            tagline
            title
            description
            disclaimer
          }
          callout2 {
            number
            tagline
            title
            description
            disclaimer
          }
          callout3 {
            number
            tagline
            title
            description
            disclaimer
          }
        }
      }
    }
  }
`