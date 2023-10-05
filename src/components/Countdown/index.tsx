import React, { FC } from "react";
import FlipCountdown from '@rumess/react-flip-countdown';

// Styles
import { Wrapper } from "./styles"

interface Props {
  date?: number,
}

const Countdown: FC<Props> = ({ date }) => {
  // Convert the timestamp to the format 'YYYY-MM-DD HH:mm:ss'
  const endDate = new Date(date as number);
  const formattedDate = `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')} ${endDate.getHours().toString().padStart(2, '0')}:${endDate.getMinutes().toString().padStart(2, '0')}:${endDate.getSeconds().toString().padStart(2, '0')}`;

  return (
    <Wrapper>
      <FlipCountdown
        endAt={formattedDate}
        hideYear
        hideMonth
        dayTitle="Days"
        hourTitle="Hours"
        minuteTitle="Minutes"
        secondTitle="Seconds"
        titlePosition="bottom"  // This places the labels under the numbers
      />

    </Wrapper>
  );
};

export default Countdown;
