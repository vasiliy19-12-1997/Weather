import React from "react";

type Props = {
  id: string;
};

export const SharedSvgSelector = ({ id }: Props) => {
  switch (id) {
    case "header-logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <linearGradient
            id="PtY0UrX1qJDQb5CcMCRpOa"
            x1="6.221"
            x2="37.408"
            y1="5.221"
            y2="36.408"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fed100" />
            <stop offset="1" stop-color="#e36001" />
          </linearGradient>
          <path
            fill="url(#PtY0UrX1qJDQb5CcMCRpOa)"
            d="M24,4C13.507,4,5,12.507,5,23s8.507,19,19,19s19-8.507,19-19S34.493,4,24,4z"
          />
          <path
            d="M38.998,23.485c-2.403-4.882-11.494-4.479-13.366,2.137c-7.157,0.25-7.769,12.23-0.632,12.107	c0.857,0,6.558,0,10.995,0c3.923-3.199,6.525-7.935,6.927-13.289C42.198,23.776,40.326,23.219,38.998,23.485z"
            opacity=".05"
          />
          <path
            d="M38.925,23.674c-2.594-4.861-11.378-4.165-13.075,2.081c-6.67,0.22-7.012,11.007-0.351,11.064	c0.89,0.008,7.525,0,11.405,0c3.362-3.048,5.591-7.334,5.999-12.14C42.057,23.948,40.297,23.425,38.925,23.674z"
            opacity=".07"
          />
          <path
            d="M38.852,23.863c-2.786-4.841-11.263-3.852-12.783,2.025c-6.183,0.19-6.254,9.968-0.069,10.022	c0.923,0.008,8.491,0,11.815,0c2.802-2.897,4.657-6.733,5.071-10.99C41.916,24.121,40.267,23.631,38.852,23.863z"
            opacity=".07"
          />
          <linearGradient
            id="PtY0UrX1qJDQb5CcMCRpOb"
            x1="29.373"
            x2="37.64"
            y1="20.668"
            y2="39.146"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fcfcfc" />
            <stop offset="1" stop-color="#c3c9cd" />
          </linearGradient>
          <path
            fill="url(#PtY0UrX1qJDQb5CcMCRpOb)"
            d="M39.5,24c-0.245,0-0.484,0.022-0.721,0.053C37.518,22.21,35.401,21,33,21	c-3.178,0-5.858,2.12-6.712,5.021C23.904,26.134,22,28.087,22,30.5c0,2.485,2.015,4.5,4.5,4.5c1.085,0,11.875,0,13,0	c3.038,0,5.5-2.462,5.5-5.5C45,26.462,42.538,24,39.5,24z"
          />
        </svg>
      );
    case "change-theme":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_22401_517)">
            <path
              d="M17.6667 7.09792V27.7917C12.8396 27.7917 8.91667 23.9562 8.91667 19.2312C8.91667 16.9562 9.82083 14.8125 11.4687 13.1937L17.6667 7.09792ZM17.6667 3L9.42708 11.1083C7.3125 13.1937 6 16.0667 6 19.2312C6 25.575 11.2208 30.7083 17.6667 30.7083C24.1125 30.7083 29.3333 25.575 29.3333 19.2312C29.3333 16.0667 28.0208 13.1937 25.9062 11.1083L17.6667 3Z"
              fill="#4793FF"
            />
          </g>
          <defs>
            <clipPath id="clip0_22401_517">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "Humidity":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M580.118 806Q601 806 615.5 791.382q14.5-14.617 14.5-35.5Q630 735 615.382 720.5q-14.617-14.5-35.5-14.5Q559 706 544.5 720.618q-14.5 14.617-14.5 35.5Q530 777 544.618 791.5q14.617 14.5 35.5 14.5ZM378 800l246-246-42-42-246 246 42 42Zm2.118-194Q401 606 415.5 591.382q14.5-14.617 14.5-35.5Q430 535 415.382 520.5q-14.617-14.5-35.5-14.5Q359 506 344.5 520.618q-14.5 14.617-14.5 35.5Q330 577 344.618 591.5q14.617 14.5 35.5 14.5ZM480 976q-137 0-228.5-94T160 648q0-100 79.5-217.5T480 176q161 137 240.5 254.5T800 648q0 140-91.5 234T480 976Zm0-60q112 0 186-76.5t74-191.822Q740 569 673.5 468.5T480 256Q353 368 286.5 468.5T220 647.678Q220 763 294 839.5T480 916Zm0-340Z" />
        </svg>
      );
    case "Dew point":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M26.15 19v-3h11.5v3Zm0-6v-3h16v3ZM14.8 41.95q-3.75 0-6.425-2.675T5.7 32.85q0-2.4 1.2-4.525Q8.1 26.2 10.2 24.9V10.6q0-1.9 1.35-3.25T14.8 6q1.9 0 3.25 1.35t1.35 3.25v14.3q2.1 1.3 3.3 3.425 1.2 2.125 1.2 4.525 0 3.75-2.675 6.425T14.8 41.95Zm-6.1-9.1h12.2q0-1.75-.95-3.45Q19 27.7 17.4 27l-1-.45V10.6q0-.7-.45-1.15Q15.5 9 14.8 9t-1.15.45q-.45.45-.45 1.15v15.95l-1 .45q-1.75.8-2.625 2.45-.875 1.65-.875 3.4Z" />
        </svg>
      );
    case "wind":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M23.25 40q-2.7 0-4.275-1.4-1.575-1.4-1.575-4.25h3.4q0 1.3.575 1.975T23.25 37q1.35 0 1.925-.6t.575-2.05q0-1.45-.575-2.125t-1.925-.675H4v-3h19.25q2.7 0 4.1 1.4 1.4 1.4 1.4 4.4 0 2.85-1.4 4.25t-4.1 1.4ZM4 19.6v-3h27.4q1.85 0 2.7-.875.85-.875.85-2.925t-.85-2.925Q33.25 9 31.4 9q-1.9 0-2.75 1.025-.85 1.025-.85 2.575h-3q0-2.9 1.75-4.75T31.4 6q3.05 0 4.8 1.775t1.75 5.025q0 3.25-1.75 5.025-1.75 1.775-4.8 1.775Zm33.6 16.5v-3q1.75 0 2.575-.975Q41 31.15 41 29.3q0-1.9-.925-2.75-.925-.85-2.675-.85H4v-3h33.4q3.1 0 4.85 1.75Q44 26.2 44 29.3q0 3.2-1.65 5-1.65 1.8-4.75 1.8Z" />
        </svg>
      );
    case "pressure":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M4 44v-3q1.7-.15 2.725-1.075Q7.75 39 10.4 39t3.775 1q1.125 1 3.025 1t3.025-1Q21.35 39 24 39t3.8 1q1.15 1 3 1 1.9 0 3.025-1.25T37.6 38.5q2.65 0 3.675 1.175T44 41v3q-2.1 0-3.425-1.25Q39.25 41.5 37.6 41.5q-1.65 0-2.9 1.25T30.8 44q-2.65 0-3.9-1T24 42q-1.65 0-2.9 1t-3.9 1q-2.65 0-3.9-1t-2.9-1q-1.65 0-2.975 1Q6.1 44 4 44Zm13.2-9.5q-2.65 0-3.9-1t-2.9-1q-1.65 0-2.975 1-1.325 1-3.425 1v-3q1.7-.15 2.725-1.075Q7.75 29.5 10.4 29.5q.55 0 1.125.075t1.025.225L10 20.55 6.9 24.4l-2.35-1.9 15-18.5 22.25 8.5-1.1 2.8-4.6-1.75 4.3 16.05q.9.5 1.825 1.2.925.7 1.775.65v3.05q-2.1 0-3.425-1.25Q39.25 32 37.6 32q-1.65 0-2.9 1.25t-3.9 1.25q-2.65 0-3.9-1t-2.9-1q-1.65 0-2.9 1t-3.9 1Zm0-3q1.55 0 2.775-.875Q21.2 29.75 22.8 29.55l-1.85-6.8 6.8-1.8L30.5 31.5q1.9.2 3.125-1.1T37.1 29l-4.5-16.8-12.05-4.65-8.2 10.1 3.7 13.7q.35.1.6.125.25.025.55.025Zm7.55-11.85Z" />
        </svg>
      );
    case "Visibility":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M480.118 726Q551 726 600.5 676.382q49.5-49.617 49.5-120.5Q650 485 600.382 435.5q-49.617-49.5-120.5-49.5Q409 386 359.5 435.618q-49.5 49.617-49.5 120.5Q310 627 359.618 676.5q49.617 49.5 120.5 49.5Zm-.353-58Q433 668 400.5 635.265q-32.5-32.736-32.5-79.5Q368 509 400.735 476.5q32.736-32.5 79.5-32.5Q527 444 559.5 476.735q32.5 32.736 32.5 79.5Q592 603 559.265 635.5q-32.736 32.5-79.5 32.5ZM480 856q-146 0-264-83T40 556q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601 796 702.5 730.5 804 665 857 556q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359 316 257.5 381.5 156 447 102 556q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z" />
        </svg>
      );
    case "temperature":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M480 976q-83 0-141.5-58.5T280 776q0-51 23-96t68-67V285q0-45.417 31.792-77.208Q434.583 176 480 176t77.208 31.792Q589 239.583 589 285v328q45 22 68 67t23 96q0 83-58.5 141.5T480 976Zm-49-435h98v-53h-49v-39h49v-87h-49v-38.5h49V285q0-20.825-14.123-34.912-14.123-14.088-35-14.088Q459 236 445 250.088 431 264.175 431 285v256Z" />
        </svg>
      );
    default:
      return null;
  }
};
