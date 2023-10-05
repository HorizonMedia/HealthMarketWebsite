import styled from "@emotion/styled"

export const Wrapper = styled.div`
  .flip-countdown {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    font-family: 'Open Sans', Helvetica, sans-serif;
    --background-color: white;
    --background-bottom-color: white;
    --text-color: #009FDA;
    --text-bottom-color: #009FDA;
    width: 100%;
  }

.flip-countdown .flip-countdown-piece .flip-countdown-card {
    margin: 0 0.1em;  // Updated margin as per your request
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec {
    font-size: 13rem;
    line-height: 1.1;
    color: #4D4D4D;
    box-shadow: none;
  }

  .flip-countdown.size-medium .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec {
    margin: 0 -1px;
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__top {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__bottom {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

   .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__top,
  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__bottom {
    font-size: 13rem; // default size for desktop, adjust accordingly
    
  }

  // The ::before and ::after pseudo-elements can maintain the border-radius you previously had or adjust as needed
  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::before, 
  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::after {
    border-radius: 1px; 
    font-size: 13rem;
    
  }


  // Default styles for Desktop
  .flip-countdown .flip-countdown-piece {
    margin: 0 0.5em;
    position: relative;
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__top {
    border-bottom: 0;
    margin-bottom: 3px;
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-title {
    font-family: 'IvyPresto Display-SemiBold';
    color: var(--neutrals-white, #FFF);
    font-size: 4rem; 
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

   // Adjustments for tablets and smaller desktops
  @media only screen and (max-width: 1070px) {
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__top,
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__bottom {
      font-size: 8rem; 
    }

    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::before, 
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::after {
      font-size: 8rem; 
    }
  }

  @media only screen and (max-width: 680px) {
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec {
      font-size: 4rem;
    }

    .flip-countdown .flip-countdown-piece .flip-countdown-title {
      font-family: 'Open Sans';
      color: #4D4D4D; 
      font-size: 1.5rem;
    }

    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__top {
    margin-bottom: 1px;
  }

     .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__top,
  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__bottom {
    font-size: 4rem;
  }

  // The ::before and ::after pseudo-elements can maintain the border-radius you previously had or adjust as needed
  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::before, 
  .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::after {
    font-size: 4rem;
  }
  }

  @media only screen and (max-width: 360px) {
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec {
      font-size: 3.5rem;
    }

        .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__top,
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__bottom {
      font-size: 3.5rem;
    }

    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::before, 
    .flip-countdown .flip-countdown-piece .flip-countdown-card .flip-countdown-card-sec .card__back::after {
      font-size: 3.5rem;
    }
  }
`