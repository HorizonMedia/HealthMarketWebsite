import React from "react";
import { Link } from "gatsby";

// Styles
import {
  Wrapper,
  Item,
  TextSize,
  SearchButton
} from "./styles"

// Scripts
import {
  changeTextSize,
  toggleSearch
} from "../../../assets/scripts/global";

// Images
import PhoneIcon from "../../../images/phone-icon.png"
import SearchIcon from "../../../images/search-icon.png"

// Components

const AfterNav = () => {
  return (
    <Wrapper className="show-at-mobile">
      <Item>
        <SearchButton className="search-button icon" onClick={toggleSearch} src={SearchIcon} alt="magnifying glass icon" />
      </Item>
      <Item>
        <Link to="tel:8008279990">
          <img className="icon" src={PhoneIcon} alt="telephone icon" />
          (800) 827-9990
        </Link>
      </Item>
      <Item>
        Text Size <TextSize className="decrease text-size" onClick={changeTextSize}>-</TextSize> <TextSize className="increase text-size" onClick={changeTextSize}>+</TextSize>
      </Item>
    </Wrapper>
  )
}

export default AfterNav