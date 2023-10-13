// Library
import React, { useEffect, useState } from "react";
import { Global } from '@emotion/react';
// Queries
// Styles

import { HeroHeading, HeroSubheading, PageStyles, TierWrapper } from "../../../components/pages/styles/IndividualPageStyle";
// Scripts
import { routeLink } from "../../../static/scripts/global";

// Components
import { useIndividualPageQuery } from "../../../hooks/insurance/useIndividualPageQuery";
import Hero from "../../../components/Hero";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import Section from "../../../components/Sections";
import Button from "../../../components/Buttons/Button";
import RelatedContent from "../../../components/RelatedContent";
import Cards from "../../../components/Cards";
import Card from "../../../components/Cards/Card";
import Footer from "../../../components/Footer";
import PageHead from "../../../components/PageHead";
import Layout from "../../../components/Layout";
import Countdown from "../../../components/Countdown";
import { CountdownWrapper } from "../../../components/pages/styles/MedicareAdvantageStyles";

const IndividualPage = () => {
    const { page } = useIndividualPageQuery();
    const { individualSection2 } = page.individualPageCustomField;
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
        <Layout pageClass='individual'>
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
                    inputId="individualPageHeroLocation"
                    footerContent={page.pageHeroFields.callUs} />
                    <CountdownWrapper>
                    <Countdown date={1698811200000}/>
                    </CountdownWrapper>
            </Hero>
            <Section
                color={page.individualPageCustomField.individualSection1.color}
                heading={page.individualPageCustomField.individualSection1.sectionHeading}
                subheading={page.individualPageCustomField.individualSection1.text}
                html={true}>
            </Section>
            <TierWrapper>
            <div className='plan' style={{ background: 'rgb(244, 250, 253)' }}>
                <div className="affordable-plans">
                    <h1>{page.individualPageCustomField.individualSection2.title}</h1>
                     <p>
                     {/* Removed for in-season change {page.individualPageCustomField.individualSection2.statement */}
                    </p> 
                </div>

                <div className='tier-container'>
                <ul className="items hide-at-mobile">
                    <li style={{ listStylePosition: 'inside', color: '#009FDA' }}>
                        {individualSection2.bronzePlan.planName}
                    </li>
                    <li style={{ listStylePosition: 'outside' }}>
                        <span style={{ display: 'inline-block', color: '#009FDA' }}>
                            {individualSection2.bronzePlan.highlightedText}
                        </span>
                        {individualSection2.bronzePlan.normalText}
                    </li>
                    <li style={{ listStylePosition: 'inside', color: '#009FDA' }}>
                        {individualSection2.silverPlan.planName}
                    </li>
                    <li style={{ listStylePosition: 'outside' }}>
                        <span style={{ display: 'inline-block', color: '#009FDA' }}>
                            {individualSection2.silverPlan.highlightedText}
                        </span>
                        {individualSection2.silverPlan.normalText}
                    </li>
                    <li style={{ listStylePosition: 'inside', color: '#009FDA' }}>
                        {individualSection2.goldPlan.planName}
                    </li>
                    <li style={{ listStylePosition: 'outside', }}>
                        <span style={{ display: 'inline-block' }}>
                            {individualSection2.goldPlan.highlightedText}
                        </span>
                        <div style={{ color: '#009FDA', }}>
                            {individualSection2.goldPlan.normalText}
                        </div>
                    </li>
                    <li style={{ listStylePosition: 'inside', color: '#009FDA' }}>
                        {individualSection2.platinumPlan.planName}
                    </li>
                    <li style={{ listStylePosition: 'outside' }}>
                        <span style={{ display: 'inline-block' }}>
                            {individualSection2.platinumPlan.highlightedText}
                        </span>
                        <div style={{ color: '#009FDA' }}>
                            {individualSection2.platinumPlan.normalText}
                        </div>
                    </li>
                    <li style={{ listStylePosition: 'inside' }}>
                        {individualSection2.catastrophicCoverage.planName}
                    </li>
                    <li style={{ listStylePosition: 'outside' }} className="end">
                        <span style={{ display: 'inline-block', color: '#009FDA' }}>
                            {individualSection2.catastrophicCoverage.highlightedText}
                        </span>
                        {individualSection2.catastrophicCoverage.normalText}
                    </li>
                </ul>
                </div>

                <ul className="items show-at-mobile">

                    <li>
                        <div className="dot"></div>
                        <div className="content">
                            <h3 style={{ color: '#009FDA' }}>{individualSection2.bronzePlan.planName}</h3>
                            <p style={{ color: '#009FDA' }}>{individualSection2.bronzePlan.highlightedText}</p>
                            <p>{individualSection2.bronzePlan.normalText}</p>
                        </div>
                        <div className="line"></div>
                    </li>
                    <li>
                        <div className="dot"></div>
                        <div className="content">
                            <h3 style={{ color: '#009FDA' }}>{individualSection2.silverPlan.planName}</h3>
                            <p style={{ color: '#009FDA' }}>{individualSection2.silverPlan.highlightedText}</p>
                            <p>{individualSection2.silverPlan.normalText}</p>
                        </div>
                        <div className="line"></div>
                    </li>

                    <li>
                        <div className="dot"></div>
                        <div className="content">
                            <h3 style={{ color: '#009FDA' }}>{individualSection2.goldPlan.planName}</h3>
                            <p>{individualSection2.goldPlan.highlightedText}</p>
                            <p style={{ color: '#009FDA' }}>{individualSection2.goldPlan.normalText}</p>
                        </div>
                        <div className="line"></div>
                    </li>
                    <li>
                        <div className="dot"></div>
                        <div className="content">
                            <h3 style={{ color: '#009FDA' }}>{individualSection2.platinumPlan.planName}</h3>
                            <p>{individualSection2.platinumPlan.highlightedText}</p>
                            <p style={{ color: '#009FDA' }}>{individualSection2.platinumPlan.normalText}</p>
                        </div>
                        <div className="line"></div>
                    </li>
                    <li>
                        <div className="dot"></div>
                        <div className="content">
                            <h3 style={{ color: '#4D4D4D' }}>{individualSection2.catastrophicCoverage.planName}</h3>
                            <p style={{ color: '#009FDA' }}>{individualSection2.catastrophicCoverage.highlightedText}</p>
                            <p>{individualSection2.catastrophicCoverage.normalText}</p>
                        </div>
                        <div className="line"></div>
                    </li>
                </ul>

                <div className="full-rounded" style={{ textAlign: "center"}}>
                    <p className="statement">{individualSection2.statement2}</p>
                    <a href={page.individualPageCustomField.individualSection2.cta.link} onClick={routeLink}>
                        <Button background="accent-alt" border="light" color="light">
                            {page.individualPageCustomField.individualSection2.cta.text}
                        </Button>
                    </a>
                </div>
            </div>
            </TierWrapper>

            <Section
                color={page.individualPageCustomField.individualSection4.color}
                heading={page.individualPageCustomField.individualSection4.heading}>
                <RelatedContent />
                {(!hasChildren) ? (
                    <Cards relatedContent={true}>
                        <Card
                            image={page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent1.image.sourceUrl}
                            title={page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent1.heading}
                            link={page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent1.link}>
                            <p dangerouslySetInnerHTML={{ __html: page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent1.content }} />
                        </Card>
                        <Card
                            image={page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent2.image.sourceUrl}
                            title={page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent2.heading}
                            link={page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent2.link}>
                            <p dangerouslySetInnerHTML={{ __html: page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent2.content }} />
                        </Card>
                        <Card
                            image={page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent3.image.sourceUrl}
                            title={page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent3.heading}
                            link={page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent3.link}>
                            <p dangerouslySetInnerHTML={{ __html: page.individualPageCustomField.individualSection4.individualRelatedContent.individualRelatedContent3.content }} />
                        </Card>
                    </Cards>
                ) : null}
                <div className="full-rounded" style={{ textAlign: "center" }}>
                    <a href={page.individualPageCustomField.individualSection4.cta.link} onClick={routeLink}>
                        <Button background="accent-alt" border="light" color="light">
                            {page.individualPageCustomField.individualSection4.cta.text}
                        </Button>
                    </a>
                </div>
            </Section>
            <Footer>
                {page.disclaimers.disclaimer}
            </Footer>
        </Layout >
    )
}
export default IndividualPage
export const Head = () => {
    const { page } = useIndividualPageQuery();
    return (
        <>
            <PageHead
                title={page.seo.title}
                description={page.seo.metaDesc} />
            <script src="//cdn.bc0a.com/autopilot/f00000000075672/autopilot_sdk.js"></script>
        </>
    )
}
