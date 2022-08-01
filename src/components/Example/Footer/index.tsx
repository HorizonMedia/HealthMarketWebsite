import React from "react"

// Styles
import {
  FooterWrapper,
  WidgetAreaOne,
  FooterLogo,
  SocialWidget,
  SocialIcon,
  BBBSeal,
  WidgetAreaTwo,
  WidgetWrapper,
  FooterMenuWrapper,
  FooterMenu,
  Disclaimer,
  PlansByStateLinks
} from "./styles"

// Components

// Images
import Logo from "../../../images/footer-logo.svg"
import Twitter from "../../../images/twitter.webp"
import Facebook from "../../../images/facebook.webp"
import YouTube from "../../../images/youtube.webp"
import BBB from "../../../images/bbb-seal.png"

const Footer = () => (
  <FooterWrapper>
    <WidgetAreaOne>
      <FooterLogo>
        <img src={Logo} alt="footer logo" />
      </FooterLogo>
      <SocialWidget>
        <SocialIcon>
          <img src={Twitter} alt="twitter logo" />
        </SocialIcon>
        <SocialIcon>
          <img src={Facebook} alt="facebook logo" />
        </SocialIcon>
        <SocialIcon>
          <img src={YouTube} alt="youtube logo" />
        </SocialIcon>
      </SocialWidget>
      <BBBSeal>
        <img src={BBB} alt="better business bureau seal" />
      </BBBSeal>
    </WidgetAreaOne>
    <WidgetAreaTwo>
      <WidgetWrapper>
        <FooterMenuWrapper>
          <FooterMenu>
            <h6>Products</h6>
            <ul>
              <li>Health</li>
              <li>Medicare</li>
              <li>Small Business</li>
              <li>Life</li>
              <li>Dental + Vision</li>
              <li>Supplemental</li>
              <li>Telemedicine</li>
              <li>Wellness</li>
            </ul>
          </FooterMenu>
          <FooterMenu>
            <h6>Connect</h6>
            <ul>
              <li>Get Your FitScore®</li>
              <li>Get a Quote</li>
              <li>Find an Agent</li>
              <li>Find Medicare Subsidies</li>
              <li>Become an Agent</li>
              <li>HealthMarkets, Inc.</li>
              <li>Contact Us</li>
              <li>Customer Service</li>
            </ul>
          </FooterMenu>
          <FooterMenu>
            <h6>Get Counsel</h6>
            <ul>
              <li>FAQs</li>
              <li>Get Answers</li>
              <li>Get Informed</li>
              <li>What is the FitScore®</li>
              <li>Glossary</li>
              <li>Videos</li>
              <li>News</li>
            </ul>
          </FooterMenu>
          <FooterMenu>
            <h6>Get to Know Us</h6>
            <ul>
              <li>About Us</li>
              <li>Testimonials</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Legal</li>
              <li>Sitemap</li>
              <li>Best Price Guarantee</li>
            </ul>
          </FooterMenu>
        </FooterMenuWrapper>
        <Disclaimer>
          <p>&copy; 2022 HealthMarkets Insurance Agency. All rights reserved.</p>
          <p>Attention: This website is operated by HealthMarkets Insurance Agency and is not the Health Insurance Marketplace® website. In offering this website, HealthMarkets Insurance Agency is required to comply with all applicable federal laws, including the standards established under 45 C.F.R. § 155.220(c) and (d) and standards established under 45 C.F.R. § 155.260 to protect the privacy and security of personally identifiable information. This website may not display all data on Qualified Health Plans (QHPs) being offered in your state through the Health Insurance Marketplace® website. To see all available data on Qualified Health Plan options in your state, go to the Health Insurance Marketplace® website at HealthCare.gov.</p>
          <p>HealthMarkets Insurance Agency offers the opportunity to enroll in either QHPs or off-Marketplace coverage. Please visit HealthCare.gov for information on the benefits of enrolling in a QHP. Off-Marketplace coverage is not eligible for the cost savings offered for coverage through the Marketplaces.</p>
          <p>HealthMarkets Insurance Agency, Inc. is licensed as an insurance agency in all 50 states and DC. Not all agents are licensed to sell all products. Service and product availability varies by state. Sales agents may be compensated based on a consumer’s enrollment in a health plan. No obligation to enroll. Agent cannot provide tax or legal advice. Contact your tax or legal professional to discuss details regarding your individual business circumstances. Our quoting tool is provided for your information only. All quotes are estimates and are not final until consumer is enrolled. Medicare has neither reviewed nor endorsed this information.</p>
          <p><strong>Sources:</strong></p>
          <p>Kaiser Family Foundation (2019). Average Single Premium per Enrolled Employee For Employer-Based Health Insurance.</p>
          <p>46513-HM-1020</p>
        </Disclaimer>
      </WidgetWrapper>
      <PlansByStateLinks>
        <h6>Medicare Eligibility by State</h6>
        <p>AL AR AZ CA CO CT DE FL GA IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC NE NH NJ NM NV NY OH OK OR PA RI SC TN TX UT VA WA WI WV WY</p>
        <h6>Medicare Plans by State</h6>
        <p>AL AR AZ CA CO CT DE FL GA IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC NE NH NJ NM NV NY OH OK OR PA RI SC TN TX UT VA WA WI WV WY</p>
        <h6>Health Insurance Plans by State</h6>
        <p>AL AR AZ CA CO CT DE FL GA IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC NE NH NJ NM NV NY OH OK OR PA RI SC TN TX UT VA WA WI WV WY</p>
        <h6>Dental Insurance Plans by State</h6>
        <p>AL AR AZ CA CO CT DE FL GA IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC NE NH NJ NM NV NY OH OK OR PA RI SC TN TX UT VA WA WI WV WY</p>
        <h6>Life Insurance Plans by State</h6>
        <p>AL AR AZ CA CO CT DE FL GA IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC NE NH NJ NM NV NY OH OK OR PA RI SC TN TX UT VA WA WI WV WY</p>
      </PlansByStateLinks>
    </WidgetAreaTwo>
  </FooterWrapper>
)

export default Footer