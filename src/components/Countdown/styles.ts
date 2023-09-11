import styled from "@emotion/styled"

export const Wrapper = styled.div`
.flip-clock {
    --fcc-flip-duration: 0.5s; /* transition duration when flip card */
    --fcc-digit-block-height: 17.25rem; /* height of digit card, highly recommend in even number */
    --fcc-digit-block-width: 12.25rem; /* height of digit card, highly recommend in even number */
    --fcc-digit-font-size: 11rem; /* font size of digit */
    --fcc-digit-color: #009FDA; /* color of digit */
    --fcc-label-font-size: 1rem; /* font size of label */
    --fcc-label-color: #ffffff; /* color of label */
    --fcc-background: white; /* background of digit card */
    --fcc-divider-color: #82BBCF; /* color of divider */
    --fcc-divider-height: 5px; /* height of divider */
    --fcc-label-font-size: 43px; /* font size of label */
    margin-top: 2rem;
  }

  .flip-clock div {
    box-shadow: none;
    margin-right: 1rem;
    font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  }

  .flip-clock div div:not(:last-child) {
    margin-right: -3rem;
  }

  @media only screen and (max-width: 1070px) {
    margin: auto;
    
    .flip-clock {
        margin: auto;
        --fcc-digit-block-height: 12.25rem; /* height of digit card, highly recommend in even number */
        --fcc-digit-block-width: 7.25rem; /* height of digit card, highly recommend in even number */
        --fcc-digit-font-size: 7rem; /* font size of digit */
        --fcc-divider-height: 3px; /* height of divider */
        --fcc-label-font-size: 23px; /* font size of label */
        margin-top: 2rem;
      }

      .flip-clock div div:not(:last-child) {
        margin-right: -2rem;
      }

  }

  @media only screen and (max-width: 680px) {

.flip-clock {
    margin: auto;
    --fcc-digit-block-height: 6.25rem; /* height of digit card, highly recommend in even number */
    --fcc-digit-block-width: 4.25rem; /* height of digit card, highly recommend in even number */
    --fcc-digit-font-size: 4rem; /* font size of digit */
    --fcc-label-font-size: 18px; /* font size of label */
    --fcc-label-color: #4D4D4D; /* color of label */
    margin-top: 2rem;
  }

  .flip-clock div {
    box-shadow: none;
    margin-right: 0rem;
  }

  .flip-clock div div:not(:last-child) {
    margin-right: -1rem;
  }
  }


`