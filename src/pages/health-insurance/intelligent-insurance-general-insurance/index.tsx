import React, { useEffect, useState } from "react";
import PageHead from "../../../components/PageHead";
import { useIntelligentInsuranceGIJPageQuery } from "../../../hooks/insurance/useIntelligentInsuranceGIJPageQuery";
import Layout from "../../../components/Layout";
import { Global } from "@emotion/react";
import { IntelligentStyles } from "../../../components/pages/styles/IntelligentPageStyles";
import Hero from "../../../components/Hero";
import Footer from "../../../components/Footer";

// Scripts
import { routeLink } from "../../../static/scripts/global";

// Components
import Section from "../../../components/Sections";
import Button from "../../../components/Buttons/Button";
import Card from "../../../components/Cards/Card";
import RelatedContent from "../../../components/RelatedContent";
import Cards from "../../../components/Cards";
import FlexedSection from "../../../components/Sections/FlexedSection";
import List from "../../../components/Lists";
import ListItem from "../../../components/Lists/ListItem";
import Medial from "../../../components/Medials";
import { HeroHeading, HeroSubheading, FlexedSectionContainer} from "../../../components/pages/styles/IntelligentPageStyles";

// Images
import PhoneIcon from "../../../static/images/phone-icon.png"


const IntelligentGIJPage = () => {
    const { page } = useIntelligentInsuranceGIJPageQuery();
    const plans = page.intelligentInsuranceGIJPageCustomField.intelligentSection3.intelligentCards;
    const options = page.intelligentInsuranceGIJPageCustomField.intelligentSection1.options;
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
        <Layout pageClass='intelligent'>
            <Global styles={IntelligentStyles} />
            {/* Hero Section */}
            <Hero
                image={page.pageHeroFields.heroImage.sourceUrl}
                mobileImage={page.pageHeroFields.mobileHeroImage.sourceUrl}
                bgColor="#BBD9F1">
                <HeroHeading>{page.pageHeroFields.headline}</HeroHeading>
                <HeroSubheading>{page.pageHeroFields.subheadline}</HeroSubheading>
                <a
                    href={page.intelligentInsuranceGIJPageCustomField.intelligentSection2.columns.column3.button.link}
                    onClick={routeLink}
                >
                    <Button background="accent-alt" border="light" color="light">
                        <div className="button-content">
                    <img src={PhoneIcon} />
                    {page.intelligentInsuranceGIJPageCustomField.intelligentSection2.columns.column3.button.text}
                    </div>
                    </Button>
                </a>
            </Hero>
            {/* Explore options  */}

            <FlexedSection
                color={page.intelligentInsuranceGIJPageCustomField.intelligentSection1.color}
                heading={page.intelligentInsuranceGIJPageCustomField.intelligentSection1.heading}>
                <h4 dangerouslySetInnerHTML={{ __html: page.intelligentInsuranceGIJPageCustomField.intelligentSection1.intelligentSectionSubheading }} />
            </FlexedSection>
            {/* 5 cards */}
            <div className="card-container" style={{ background: 'rgb(244, 250, 253)' }}>
                <Cards>
                    {options ? (
                        Object.keys(options).map((key) => {
                            const option = options[key];
                            return (
                                <Card
                                title={option.title}
                                link={option.link}
                                >
                                    <p className="card-p">{option.description}</p>
                                    <a className="card-link" href={option.link.link}>{option.link.text}</a>
                                </Card>
                            )
                        })
                    ) : null}
                </Cards>
            </div>

            {/* we're here to help  */}
            <Medial color={page.intelligentInsuranceGIJPageCustomField.intelligentSection2.color}>
                <img
                    className="chat-bubble"
                    src={page.intelligentInsuranceGIJPageCustomField.intelligentSection2.columns.column1.image.sourceUrl}
                    alt="Chat bubble icon"
                />
                <div className="medial-header" dangerouslySetInnerHTML={{ __html: page.intelligentInsuranceGIJPageCustomField.intelligentSection2.columns.column2.heading }} />
                <div dangerouslySetInnerHTML={{ __html: page.intelligentInsuranceGIJPageCustomField.intelligentSection2.subText }} />
                <a
                    href={page.intelligentInsuranceGIJPageCustomField.intelligentSection2.columns.column3.button.link}
                    onClick={routeLink}
                >
                    <div className="help-button-container">
                    <Button background="accent-alt" border="light" color="light">
                        <div className="help-button-content">
                    <img className="help-button-content" src={PhoneIcon} />{page.intelligentInsuranceGIJPageCustomField.intelligentSection2.columns.column3.button.text}
                    </div>
                    </Button>
                    </div>
                </a>
            </Medial>
        


            {/* Three cards */}
                <FlexedSectionContainer>
                <FlexedSection
                    heading={page.intelligentInsuranceGIJPageCustomField.intelligentSection3.sectionHeading}
                    color={page.intelligentInsuranceGIJPageCustomField.intelligentSection3.sectionColor}
                />
                </FlexedSectionContainer>
                <div className="shop-card-container" style={{ background: 'rgb(244, 250, 253)' }}>
                <Cards>
                    {plans ? (
                        Object.keys(plans).map((key) => {
                            const plan = plans[key];
                            return (
                                <Card
                                title={plan.title}
                                link={plan.link.link}
                                >
                                    <div className="card-content-container">
                                    <img className="card-image" src={plan.icon.sourceUrl}></img>
                                    <p className="line">______</p>
                                    <p className="card-p">{plan.content}</p>
                                    <p className="line">______</p>
                                    <a className="card-link" href={plan.link.link}>{plan.link.text}</a>
                                    </div>
                                </Card>
                            )
                        })
                    ) : null}
                </Cards>
                </div>


{/* How we help */}
            <FlexedSection
                heading={page.intelligentInsuranceGIJPageCustomField.intelligentSection4.sectionHeading}
                color={page.intelligentInsuranceGIJPageCustomField.intelligentSection4.color}
            >
                <div className="list-container">
                <List>
                    <ListItem
                        heading={page.intelligentInsuranceGIJPageCustomField.intelligentSection4.intelligentListItems.intelligentListItem1.heading}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: page.intelligentInsuranceGIJPageCustomField.intelligentSection4.intelligentListItems.intelligentListItem1.content,
                            }}
                        />
                    </ListItem>
                    <ListItem
                        heading={page.intelligentInsuranceGIJPageCustomField.intelligentSection4.intelligentListItems.intelligentListItem2.heading}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: page.intelligentInsuranceGIJPageCustomField.intelligentSection4.intelligentListItems.intelligentListItem2.content,
                            }}
                        />
                    </ListItem>
                    <ListItem
                        heading={page.intelligentInsuranceGIJPageCustomField.intelligentSection4.intelligentListItems.intelligentListItem3.heading}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: page.intelligentInsuranceGIJPageCustomField.intelligentSection4.intelligentListItems.intelligentListItem3.content,
                            }}
                        />
                    </ListItem>
                </List>
                <a href={page.intelligentInsuranceGIJPageCustomField.intelligentSection4.sectionCta.link} onClick={routeLink}>
                    <Button background="accent-alt" border="light" color="light">
                        {page.intelligentInsuranceGIJPageCustomField.intelligentSection4.sectionCta.text}
                    </Button>
                </a>
                </div>
            </FlexedSection>


            {/* learn more portion */}
            <Section
                color={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.color}
                heading={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.sectionHeading}>
                <RelatedContent />
                {(!hasChildren) ? (
                    <Cards relatedContent={true}>
                        <Card
                            image={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent1.image.sourceUrl}
                            title={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent1.heading}
                            link={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent1.link}>
                            <p dangerouslySetInnerHTML={{ __html: page?.intelligentInsuranceGIJPageCustomField?.intelligentSection5?.intelligentRelatedContent?.intelligentRelatedContent1?.content }} />
                        </Card>
                        <Card
                            image={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent2.image.sourceUrl}
                            title={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent2.heading}
                            link={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent2.link}>
                            <p dangerouslySetInnerHTML={{ __html: page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent2.content }} />
                        </Card>
                        <Card
                            image={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent3.image.sourceUrl}
                            title={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent3.heading}
                            link={page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent3.link}>
                            <p dangerouslySetInnerHTML={{ __html: page.intelligentInsuranceGIJPageCustomField.intelligentSection5.intelligentRelatedContent.intelligentRelatedContent3.content }} />
                        </Card>
                    </Cards>
                ) : null}
                <div className="full-rounded" style={{ textAlign: "center" }}>
                    <a href={page.intelligentInsuranceintelligentInsuranceGIJPageCustomFieldnceDIPageCustomField.intelligentSection5.cta.link} onClick={routeLink}>
                        <Button background="accent-alt" border="light" color="light">
                            {page.intelligentInsuranceGIJPageCustomField.intelligentSection5.cta.text}
                        </Button>
                    </a>
                </div>
            </Section>
            <Footer>  {/* I'm guessing you wanted Footer inside Layout */}
                {page.disclaimers.disclaimer}
            </Footer>
        </Layout >
    )
};

export default IntelligentGIJPage;


export const Head = () => {
    const { page } = useIntelligentInsuranceGIJPageQuery();
    return (
        <>
            <PageHead
                title={page.seo.title}
                description={page.seo.metaDesc} />
            <script src="//cdn.bc0a.com/autopilot/f00000000075672/autopilot_sdk.js"></script>
        </>
    )
}