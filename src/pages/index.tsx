// Library
import * as React from 'react';
import { PageProps } from 'gatsby';

// Queries
import { useHomePageQuery } from '../hooks/useHomePageQuery';

// Styles
import { HeroHeading, HeroSubheading } from '../components/pages/styles/homePageStyles';

// Scripts
import { routeLink } from '../static/scripts/global';

// Components
import Layout from "../components/Layout";
import PageHead from "../components/PageHead";
import Hero from '../components/Hero';
import PageHeroForm from '../components/Hero/PageHeroForm';
import Button from '../components/Buttons/Button';
import Section from '../components/Sections';
import Carousel from '../components/Carousel';
import Tile from '../components/Tiles/Tile';
import Medial from '../components/Medials';
import FlexedSection from '../components/Sections/FlexedSection';
import List from '../components/Lists';
import ListItem from '../components/Lists/ListItem';
import Callouts from '../components/Callouts';
import Callout from '../components/Callouts/Callout';
import Footer from '../components/Footer';


const IndexPage = ({path}: PageProps) => {
    const { home } = useHomePageQuery();
    const tiles = home.homePageCustomFields.homeSection1.tiles;
    const callouts = home.calloutsCustomField.callouts;

    console.log(home.pageHeroFields.heroDisclaimer)

    return (
        <Layout pageClass="home" headerColor="light">
            <Hero
                image={home.pageHeroFields.heroImage.sourceUrl}
                mobileImage={home.pageHeroFields.mobileHeroImage.sourceUrl}
                centered>
                <HeroHeading>{home.pageHeroFields.headline}</HeroHeading>
                <HeroSubheading>{home.pageHeroFields.subheadline}</HeroSubheading>
                <PageHeroForm
                    centered
                    btnLeftText={home.pageHeroFields.heroButtons.heroButton1.text}
                    btnRightText={home.pageHeroFields.heroButtons.heroButton2.text}
                    inputId="homepageHeroLocation"
                    buttons
                    hideFooter
                    heroDisclaimer={home.pageHeroFields.heroDisclaimer} />
            </Hero>
            <Section
                heading={home.homePageCustomFields.homeSection1.heading}
                subheading={home.homePageCustomFields.homeSection1.subheading}
                color={home.homePageCustomFields.homeSection1.color}>
                <Carousel>
                    {(tiles) ? (
                        Object.keys(tiles).map((tile, i) => {
                        return (
                            <Tile
                                key={`title-${i}`}
                                image={tiles[tile].image.sourceUrl}
                                title={tiles[tile].title}
                                link={tiles[tile].link}
                            />
                        )
                        })
                    ) : null}
                </Carousel>
            </Section>
            <Medial color={home.homePageCustomFields.homeSection2.color}>
                <img className="chat-bubble" src={home.homePageCustomFields.homeSection2.columns.column1.image.sourceUrl} alt="Chat bubble icon" />
                <div dangerouslySetInnerHTML={{ __html: home.homePageCustomFields.homeSection2.columns.column2.heading }} />
                <a href={home.homePageCustomFields.homeSection2.columns.column3.button.link} onClick={routeLink}>
                    <Button background="accent-alt" border="light" color="light">
                        {home.homePageCustomFields.homeSection2.columns.column3.button.text}
                    </Button>
                </a>
            </Medial>
            <FlexedSection
                heading={home.homePageCustomFields.homeSection3.heading}
                color={home.homePageCustomFields.homeSection3.color}>
                <List>
                    <ListItem heading={home.homePageCustomFields.homeSection3.homeListItems.homeListItem1.heading}>
                        <div dangerouslySetInnerHTML={{ __html: home.homePageCustomFields.homeSection3.homeListItems.homeListItem1.content }} />
                    </ListItem>
                    <ListItem heading={home.homePageCustomFields.homeSection3.homeListItems.homeListItem2.heading}>
                        <div dangerouslySetInnerHTML={{ __html: home.homePageCustomFields.homeSection3.homeListItems.homeListItem2.content }} />
                    </ListItem>
                    <ListItem heading={home.homePageCustomFields.homeSection3.homeListItems.homeListItem3.heading}>
                        <div dangerouslySetInnerHTML={{ __html: home.homePageCustomFields.homeSection3.homeListItems.homeListItem3.content }} />
                    </ListItem>
                </List>
                <a href={home.homePageCustomFields.homeSection3.sectionCta.link} onClick={routeLink}>
                    <Button background="accent-alt" border="light" color="light">{home.homePageCustomFields.homeSection3.sectionCta.text}</Button>
                </a>
            </FlexedSection>
            <Section color="light">
                <Callouts>
                    {(callouts) ? (
                        Object.keys(callouts).map((index) => {
                            const callout = callouts[index];
                            return (
                                <Callout
                                    key={`callout-${index}`}
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
            <Footer>
                {home.disclaimers.disclaimer}
            </Footer>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => {
    const { home } = useHomePageQuery();
    return (
        <>
            <PageHead
                title={home.seo.title}
                description={home.seo.metaDesc}/>
        </>
    )
}
