import React, { FC, ReactNode } from "react";

// Styles
import {
  Wrapper
} from "./styles";

interface Props {
  children: ReactNode
}

const Callouts: FC<Props> = ({children}) => {
  return (
    <Wrapper className="callouts">
      {children}
    </Wrapper>
  );
}

export default Callouts;