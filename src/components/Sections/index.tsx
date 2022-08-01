import React, {FC, ReactNode} from 'react';

// Styles
import { Wrapper, Heading, Inner } from "./styles";

interface Props {
  color: String,
  children: ReactNode
  heading?: String,
  subheading?: String,
  page?: String
}

const switchBgColor = (bgColor) => {
  switch (bgColor) {
    case 'primary':
      return "#F3FAFD"
    case 'accent':
      return "#F1FBEA"
    case 'dark':
      return "#4D4D4D"
    case 'muted':
      return "#F6F4F2"
    default:
      return "#FFFFFF"
  }
}

const Section: FC<Props> = ({ heading, subheading, page, color, children}) => {
  const bgColor = switchBgColor(color)
  const pageClass = (page) ? page : ""

  return (
    <Wrapper backgroundColor={bgColor} className={`section ` + color + ` ` + pageClass}>
      {(heading) ? (
        <Heading className="heading">
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
        </Heading>
      ) : null}
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  )
};

export default Section