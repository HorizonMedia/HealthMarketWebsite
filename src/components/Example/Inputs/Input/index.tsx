import React, { FC } from "react"

// Styles
import { Wrapper, Label, InputField, HeroInputField } from "./styles"

// Components

// Images
import Pin from "../../../../images/location.png"

interface Props {
  id?: String,
  hero?: boolean,
  type: String,
  name: String,
  placeholder: String,
  value?: String
}

const Input: FC<Props> = ({
  id,
  hero,
  type,
  name,
  placeholder,
  value = null
}) => {
  if (!hero) {
    return (
      <InputField id={id} type={type} name={name} placeholder={placeholder} value={value} />
    )
  } else {
    return (
      <Wrapper>
        <Label for={name}>
          <img src={Pin} alt="map pin icon" />
        </Label>
        <HeroInputField icon={Pin} id={id} type={type} name={name} placeholder={placeholder} value={value} />
      </Wrapper>
    )
  }
}

export default Input