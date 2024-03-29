import React, { Children, FC, ReactNode, useEffect } from "react"

// Styles
import { Wrapper, Inner } from "./styles"

// Scripts
import { fadeIn } from "../../static/scripts/global"

interface Props {
  color: String,
  children: ReactNode
}

const Medial: FC<Props> = ({ color, children }) => {
  let count = Children.count(children);
  let columnCount = (count > 2) ? 'three-columns' : 'two-columns';

  useEffect(() => {
    fadeIn('.medial')
  }, []);

  return (
    <Wrapper className={`medial ` + color + ` ` + columnCount}>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  )
}

export default Medial
