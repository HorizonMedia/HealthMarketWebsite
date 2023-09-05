// Library
import React, { FC, useEffect, useState } from "react";

// Styles
import {
  Wrapper,
  Buttons,
  Form,
  Radio,
  Footer,
  CTA,
  Disclaimer
  // InputGroup,
  // Input
} from "./styles"

// Scripts
import {
  toggleForm,
  sendForm
} from "../../../static/scripts/global"

// Components
import Button from "../../Buttons/Button"
import AutocompleteField from "../../Inputs/Geocode/AutocompleteField";

// Images
// import MapPin from "../../../static/images/location.png"
import PhoneIcon from "../../../static/images/phone-icon.png"

interface Props {
  centered?: boolean,
  light?: boolean,
  btnLeftText: string,
  btnRightText: string,
  inputId: string,
  buttons?: boolean,
  footerContent: string,
  hideFooter?: boolean,
  heroDisclaimer?: string
}

// set geocode earth api key
const api_key = 'ge-8876b9780ea0871d';

// set the urls to change the form action to
const plans = "https://shop.healthmarkets.com/en/about-me/info/";
const agents = "/local-health-insurance-agent/search/";

const PageHeroForm: FC<Props> = ({ centered, light, btnLeftText, btnRightText, inputId, buttons, heroDisclaimer, footerContent, hideFooter,...rest  }) => {
  console.log(hideFooter);

  return (
    <Wrapper className={`${(centered) ? `centered` : ``} ${(light) ? `light` : ``}`} {...rest}>
      <Form id="zipCodeForm" action={plans} autocomplete="off" onSubmit={(e) => { sendForm(e) }}>
        {(buttons || buttons === undefined) ? (
          <Buttons>
            <Radio onClick={toggleForm} className="accented">{btnLeftText}
              <input id="radioSearchPlans" type="radio" value={plans} checked />
            </Radio>
            <Radio onClick={toggleForm}>{btnRightText}
              <input id="radioSearchAgents" type="radio" value={agents} />
            </Radio>
          </Buttons>
        ) : null}
        <AutocompleteField />
        <div id="zipCodeField" className="hidden-inputs">
          <input type="hidden" id="zipCode" value="" />
          <input type="hidden" id="county" value="" />
        </div>
        <Disclaimer dangerouslySetInnerHTML={{ __html: heroDisclaimer }}  />
        <Footer>
          <Button style={{borderRadius: "4px"}} background="accent-alt" border="light" color="light">Search</Button>
          {(!hideFooter || hideFooter === undefined) ? (
            <CTA>
              <img src={PhoneIcon} />
              <span dangerouslySetInnerHTML={{ __html: footerContent }} />
            </CTA>
          ) : null}
        </Footer>
      </Form>
    </Wrapper>
  )
}

export default PageHeroForm