import styled from "@emotion/styled"

export const Wrapper = styled.div`
  .flip-countdown {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    --background-color: white;
    --background-bottom-color: white;
    --text-color: rgb(22 160 215);
    --text-bottom-color: rgb(22 160 215);
    width: 100%;
  }

.flip-countdown .flip-countdown-piece .flip-countdown-card {
    margin: 0 0.1em;  // Updated margin as per your request
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec {
    font-size: 15rem;
    line-height: 1.1;
    box-shadow: none;
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__top {
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__bottom {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
  }

  // The ::before and ::after pseudo-elements can maintain the border-radius you previously had or adjust as needed
  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::before, 
  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::after {
    border-radius: 1px; 
  }


  // Default styles for Desktop
  .flip-countdown .flip-countdown-piece {
    margin: 0 0.5em;
    position: relative;
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__top {
    border-bottom: 0;
    margin-bottom: 4px;
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-title {
    font-size: 2.5rem;
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-title {
    font-family: 'IvyPresto Display', sans-serif;
    color: var(--neutrals-white, #FFF);
    font-size: 3rem; 
  }

  // Adjustments for smaller screens
  @media only screen and (max-width: 1070px) {
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec {
      font-size: 8rem;
    }

    .flip-countdown .flip-countdown-piece .flip-countdown-title {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 680px) {
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec {
      font-size: 4rem;
    }

    .flip-countdown .flip-countdown-piece .flip-countdown-title {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 360px) {
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec {
      font-size: 3.5rem;
    }
  }
`