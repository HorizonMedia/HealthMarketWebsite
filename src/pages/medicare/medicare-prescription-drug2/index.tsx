// Library
import React from "react";

// Query
import {useMedicarePrescriptionDrugPageQuery} from "../../../hooks/insurance/useMedicarePrescriptionDrugPageQuery";

// Styles
// Scripts
// Components
import Layout from "../../../components/Layout";
import Footer from "../../../components/Footer";
import {Tracing} from "../../../components/Tracing/Tracing";
import styled from "@emotion/styled";
import PageHeroForm from "../../../components/Hero/PageHeroForm";
import PhoneIcon from "../../../static/images/phone-icon.png";
import checkImgSvg from "../../../static/images/list-check.svg";
import calculatorSvg from "../../../static/images/calculator-logo.svg";
import {routeLink} from "../../../static/scripts/global";

const MedicarePrescriptionDrugPage = () => {
    const {page} = useMedicarePrescriptionDrugPageQuery();
    return (
        <Layout>
            <Tracing/>
            <HeroContainer>
                <MainTitle>Compare Medicare Part D plans</MainTitle>
                <Subtitle>Find prescription drug coverage that fits your lifestyle</Subtitle>
                <PageHeroForm
                    light
                    btnLeftText={page.pageHeroFields.heroButtons.heroButton1.text}
                    btnRightText={page.pageHeroFields.heroButtons.heroButton2.text}
                    hideFooter
                />
                <CallUsCtn>
                    <img src={PhoneIcon}/>
                    <CallUsText>Call XXX-XXX-XXXX to speak to a licensed insurance agent.</CallUsText>
                </CallUsCtn>
                <DisclaimerText>
                    We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options.
                </DisclaimerText>
                {/*<HeroDisclaimerResponsive dangerouslySetInnerHTML={{__html: page.medicarePrescriptionDrugPageCustomFields?.heroDisclaimer}}/>*/}
            </HeroContainer>
            <HeroMobileImg src={page.pageHeroFields.mobileHeroImage.sourceUrl} alt="Hero"/>
            <SectionContainer>
                <SectionTitle>
                    Prescription Drug
                </SectionTitle>
                <SectionText>
                    A Medicare prescription drug plan can be a smart way to manage the cost of the medications you take now—and those you may need in the future. If you’re entitled to Part A and/or enrolled in Part B of Original Medicare,
                    you’re eligible to join a Part D plan, which helps cover prescription drugs. HealthMarkets can help you understand your eligibility and help you find the Medicare Part D plans that are available.
                </SectionText>
                <SectionSubtitle>
                    Plan facts
                </SectionSubtitle>
                <ListContainer>
                    {page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.listItems?.split("\n").filter((item: string) => Boolean(item.trim())).map((item: string, i: number) => (
                        <ListItem key={`list-item-${i}`}>{item}</ListItem>
                    ))}
                </ListContainer>
                <CtaButton href={page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.sectionCta.link} onClick={routeLink}>
                    {page.medicarePrescriptionDrugPageCustomFields.medicarePrescriptionDrugSection1.sectionCta.text}
                </CtaButton>
                <SectionCard>
                    <CalculatorLogo src={calculatorSvg} alt="Calculator logo"/>
                    <CardTitle>
                        HealthMarkets' Extra Help Calculator
                    </CardTitle>
                    <CardText>
                        Find out if you could save on prescription drug costs with a Part D plan.
                    </CardText>
                    <CardButton>
                        Call 900-000-0000
                    </CardButton>
                </SectionCard>
            </SectionContainer>
            <SectionContainerWhite>
                <SectionTitle>
                    Related content
                </SectionTitle>
            </SectionContainerWhite>
            <Footer>
                {page.disclaimers.disclaimer}
            </Footer>
        </Layout>
    );
};

const SectionCard = styled.div`
  background: #FFFFFF;

  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 40px 21px 0px;
  padding: 37px 12px 40px;
`;

const CalculatorLogo = styled.img`
  margin: 0 auto;
  width: 120px;
  height: 80px;
`;

const CardTitle = styled.h2`
  font-family: 'IvyPresto Display-SemiBold', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;

  text-align: center;
  letter-spacing: 0.02em;

  color: #009FDA;
  margin-top: 16px;
`;

const CardText = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  display: flex;
  align-items: center;

  color: #4D4D4D;
  margin-top: 21px;
  margin-bottom: 15px;
  padding: 0 8px;
`;

const HeroContainer = styled.div`
  padding: 0 24px;
  background-color: #E3DEDA;
`;

const SectionContainer = styled.div`
  background: #f3fafd;
  padding: 40px 0px 38px;
`;

const SectionContainerWhite = styled(SectionContainer)`
  background: #ffffff;
`;

const SectionTitle = styled.h2`
  font-family: 'IvyPresto Display';
  font-family: 'IvyPresto Display-SemiBold', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;

  letter-spacing: 0.02em;

  color: #FFFFFF;
  background: #009FDA;

  width: 275px;
  height: 112px;
  padding: 18px 26px 0;
`;

const SectionSubtitle = styled.h2`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  color: #009FDA;

  padding: 0 30px;
  margin-top: 40px;
`;

const ListContainer = styled.ul`
  padding: 0px 30px;
  list-style: none;
  margin: 22px 0 39px;
`;

const CtaButton = styled.a`
  background: #009FDA;
  border: 3px solid #FFFFFF;
  border-radius: 4px;

  margin: 0 30px;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  height: 60px;
  text-align: center;
  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardButton = styled(CtaButton)`
  height: 42px;
  background: #009B3A;
  border: 2px solid #FFFFFF;
  margin: 0;
`;

const ListItem = styled.li`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin: 0 0 24px;
  padding-left: 44px;
  position: relative;
  color: #4D4D4D;

  &::after {
    content: '';
    width: 26px;
    height: 26px;
    display: block;
    border-radius: 100%;
    position: absolute;
    left: 1px;
    top: calc(50% - 13px);
    border: 2px solid var(--color-accent);
  }

  &::before {
    content: '';
    width: 26px;
    height: 26px;
    display: block;
    position: absolute;
    left: 5px;
    background-repeat: no-repeat;
    top: calc(50% - 14px);
    background-image: url("${checkImgSvg}");
  }
`;

const SectionText = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  color: #4D4D4D;
  padding: 0 36px;
  margin-top: 40px;
`;

const CallUsCtn = styled.div`
  display: flex;
  align-items: center;
  padding: 0 38px;

  > img {
    width: 19px;
    margin: 4px 15px 0 2px;
  }
`;

const CallUsText = styled.div`
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;

  color: #4D4D4D;
`;

const DisclaimerText = styled.div`
  margin-top: 12px;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 110%;

  text-align: center;

  color: #4D4D4D;
`;

const MainTitle = styled.h1`
  padding: 0 24px;

  font-family: 'IvyPresto Display';
  font-family: 'IvyPresto Display-SemiBold', serif;

  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 115%;

  text-align: center;

  color: #4D4D4D;

  margin: 0 auto 14px;
`;

const Subtitle = styled.h2`
  margin: 0 auto 50px;

  height: 48px;

  font-family: 'Open Sans', Arial, Helvetica, sans-serif;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;

  text-align: center;

  color: #4D4D4D;
`;

const HeroMobileImg = styled.img`
  background: #E3DEDA;
  margin: -14px 0 0;

  @media only screen and (min-width: 621px) {
    display: none;
  }
`


export default MedicarePrescriptionDrugPage;
