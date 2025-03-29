export default function SvgIcons({ name, className }) {
  const icons = {
    close: (
      <svg
        className={className}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg">
        <path
          className={className}
          d="M14.4163 1.58333L1.58301 14.4167M1.58305 1.58333L14.4163 14.4167"
        />
      </svg>
    ),
    user: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <path
          className={className}
          d="M9.99955 12.5C7.35782 12.5 5.00855 13.7755 3.51288 15.755C3.19097 16.181 3.03002 16.394 3.03528 16.6819C3.03935 16.9043 3.17902 17.1849 3.35402 17.3222C3.58054 17.5 3.89444 17.5 4.52224 17.5H15.4769C16.1047 17.5 16.4186 17.5 16.6451 17.3222C16.8201 17.1849 16.9598 16.9043 16.9638 16.6819C16.9691 16.394 16.8081 16.181 16.4862 15.755C14.9906 13.7755 12.6413 12.5 9.99955 12.5Z"
        />
        <path
          className={className}
          d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z"
        />
      </svg>
    ),
    logo: (
      <svg
        width="105"
        height="32"
        viewBox="0 0 105 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <path
          d="M9.226 25.42C7.75133 25.42 6.51467 25.07 5.516 24.37C4.51733 23.67 3.766 22.718 3.262 21.514C2.758 20.3007 2.506 18.9427 2.506 17.44C2.506 15.9187 2.758 14.556 3.262 13.352C3.766 12.148 4.50333 11.2007 5.474 10.51C6.454 9.81 7.66267 9.46 9.1 9.46C10.528 9.46 11.7647 9.81 12.81 10.51C13.8647 11.2007 14.6813 12.148 15.26 13.352C15.8387 14.5467 16.128 15.9093 16.128 17.44C16.128 18.952 15.8433 20.31 15.274 21.514C14.7047 22.718 13.902 23.67 12.866 24.37C11.83 25.07 10.6167 25.42 9.226 25.42ZM1.932 31.72V9.88H4.914V20.492H5.334V31.72H1.932ZM8.708 22.396C9.58533 22.396 10.3087 22.1767 10.878 21.738C11.4473 21.2993 11.8673 20.7067 12.138 19.96C12.418 19.204 12.558 18.364 12.558 17.44C12.558 16.5253 12.418 15.6947 12.138 14.948C11.858 14.192 11.424 13.5947 10.836 13.156C10.248 12.708 9.50133 12.484 8.596 12.484C7.73733 12.484 7.03733 12.694 6.496 13.114C5.95467 13.5247 5.55333 14.1033 5.292 14.85C5.04 15.5873 4.914 16.4507 4.914 17.44C4.914 18.42 5.04 19.2833 5.292 20.03C5.55333 20.7767 5.95933 21.36 6.51 21.78C7.07 22.1907 7.80267 22.396 8.708 22.396ZM24.9679 25.42C23.4372 25.42 22.0932 25.0887 20.9359 24.426C19.7786 23.7633 18.8732 22.844 18.2199 21.668C17.5759 20.492 17.2539 19.1387 17.2539 17.608C17.2539 15.956 17.5712 14.5233 18.2059 13.31C18.8406 12.0873 19.7226 11.14 20.8519 10.468C21.9812 9.796 23.2879 9.46 24.7719 9.46C26.3399 9.46 27.6699 9.82867 28.7619 10.566C29.8632 11.294 30.6799 12.3253 31.2119 13.66C31.7439 14.9947 31.9446 16.5673 31.8139 18.378H28.4679V17.146C28.4586 15.5033 28.1692 14.304 27.5999 13.548C27.0306 12.792 26.1346 12.414 24.9119 12.414C23.5306 12.414 22.5039 12.8433 21.8319 13.702C21.1599 14.5513 20.8239 15.7973 20.8239 17.44C20.8239 18.9707 21.1599 20.156 21.8319 20.996C22.5039 21.836 23.4839 22.256 24.7719 22.256C25.6026 22.256 26.3166 22.074 26.9139 21.71C27.5206 21.3367 27.9872 20.8 28.3139 20.1L31.6459 21.108C31.0672 22.4707 30.1712 23.53 28.9579 24.286C27.7539 25.042 26.4239 25.42 24.9679 25.42ZM19.7599 18.378V15.83H30.1619V18.378H19.7599ZM42.6797 25C41.681 25.1867 40.701 25.266 39.7397 25.238C38.7877 25.2193 37.9337 25.0467 37.1777 24.72C36.4217 24.384 35.8477 23.8567 35.4557 23.138C35.1103 22.4847 34.9283 21.8173 34.9097 21.136C34.891 20.4547 34.8817 19.6847 34.8817 18.826V5.68H38.2417V18.63C38.2417 19.2367 38.2463 19.7687 38.2557 20.226C38.2743 20.6833 38.3723 21.0567 38.5497 21.346C38.8857 21.906 39.4223 22.2187 40.1597 22.284C40.897 22.3493 41.737 22.312 42.6797 22.172V25ZM32.1377 12.526V9.88H42.6797V12.526H32.1377ZM45.0909 25V4.42H48.4649V25H45.0909Z"
          fill="#262626"
          className={className}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M62.4935 10.4345C60.6541 8.26268 57.5868 7.67848 55.2821 9.66718C52.9775 11.6559 52.653 14.9809 54.4629 17.333C55.6221 18.8395 58.5909 21.6331 60.5756 23.447C61.2351 24.0498 61.5649 24.3512 61.9599 24.4721C62.2995 24.576 62.6875 24.576 63.0271 24.4721C63.4221 24.3512 63.7519 24.0498 64.4114 23.447C66.3961 21.6331 69.3649 18.8395 70.5241 17.333C72.334 14.9809 72.0491 11.635 69.7049 9.66718C67.3606 7.6994 64.3329 8.26268 62.4935 10.4345Z"
          fill="#F6B83D"
          className={className}
        />
        <path
          d="M80.048 25L74.56 9.88H77.934L81.742 20.842L85.536 9.88H88.924L83.436 25H80.048ZM96.6437 25.42C95.113 25.42 93.769 25.0887 92.6117 24.426C91.4544 23.7633 90.549 22.844 89.8957 21.668C89.2517 20.492 88.9297 19.1387 88.9297 17.608C88.9297 15.956 89.247 14.5233 89.8817 13.31C90.5164 12.0873 91.3984 11.14 92.5277 10.468C93.657 9.796 94.9637 9.46 96.4477 9.46C98.0157 9.46 99.3457 9.82867 100.438 10.566C101.539 11.294 102.356 12.3253 102.888 13.66C103.42 14.9947 103.62 16.5673 103.49 18.378H100.144V17.146C100.134 15.5033 99.845 14.304 99.2757 13.548C98.7064 12.792 97.8104 12.414 96.5877 12.414C95.2064 12.414 94.1797 12.8433 93.5077 13.702C92.8357 14.5513 92.4997 15.7973 92.4997 17.44C92.4997 18.9707 92.8357 20.156 93.5077 20.996C94.1797 21.836 95.1597 22.256 96.4477 22.256C97.2784 22.256 97.9924 22.074 98.5897 21.71C99.1964 21.3367 99.663 20.8 99.9897 20.1L103.322 21.108C102.743 22.4707 101.847 23.53 100.634 24.286C99.4297 25.042 98.0997 25.42 96.6437 25.42ZM91.4357 18.378V15.83H101.838V18.378H91.4357Z"
          fill="#262626"
          className={className}
        />
      </svg>
    ),
    logoHome: (
      <svg
        width="106"
        height="32"
        viewBox="0 0 106 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <path
          className={className}
          d="M9.38 25.42C7.87733 25.42 6.622 25.07 5.614 24.37C4.606 23.67 3.84533 22.718 3.332 21.514C2.828 20.31 2.576 18.952 2.576 17.44C2.576 15.928 2.828 14.57 3.332 13.366C3.836 12.162 4.578 11.21 5.558 10.51C6.538 9.81 7.74667 9.46 9.184 9.46C10.6307 9.46 11.8907 9.80533 12.964 10.496C14.0373 11.1867 14.868 12.134 15.456 13.338C16.0533 14.5327 16.352 15.9 16.352 17.44C16.352 18.952 16.058 20.31 15.47 21.514C14.8913 22.718 14.0793 23.67 13.034 24.37C11.9887 25.07 10.7707 25.42 9.38 25.42ZM1.932 31.72V9.88H5.292V20.24H5.768V31.72H1.932ZM8.764 22.032C9.58533 22.032 10.2573 21.8267 10.78 21.416C11.3027 21.0053 11.69 20.4547 11.942 19.764C12.194 19.064 12.32 18.2893 12.32 17.44C12.32 16.6 12.1893 15.8347 11.928 15.144C11.6667 14.444 11.2607 13.8887 10.71 13.478C10.1687 13.058 9.47333 12.848 8.624 12.848C7.83067 12.848 7.18667 13.0393 6.692 13.422C6.20667 13.8047 5.852 14.3413 5.628 15.032C5.404 15.7227 5.292 16.5253 5.292 17.44C5.292 18.3547 5.404 19.1573 5.628 19.848C5.852 20.5387 6.216 21.0753 6.72 21.458C7.23333 21.8407 7.91467 22.032 8.764 22.032ZM25.3407 25.42C23.7913 25.42 22.424 25.0887 21.2387 24.426C20.0627 23.754 19.1387 22.8347 18.4667 21.668C17.804 20.492 17.4727 19.148 17.4727 17.636C17.4727 15.984 17.7993 14.5467 18.4527 13.324C19.106 12.1013 20.0067 11.154 21.1547 10.482C22.3027 9.80067 23.6233 9.46 25.1167 9.46C26.7033 9.46 28.052 9.83333 29.1627 10.58C30.2733 11.3267 31.0947 12.3767 31.6267 13.73C32.1587 15.0833 32.3453 16.6747 32.1867 18.504H28.4207V17.104C28.4207 15.564 28.1733 14.458 27.6787 13.786C27.1933 13.1047 26.3953 12.764 25.2847 12.764C23.9873 12.764 23.0307 13.1607 22.4147 13.954C21.808 14.738 21.5047 15.9 21.5047 17.44C21.5047 18.8493 21.808 19.9413 22.4147 20.716C23.0307 21.4813 23.9313 21.864 25.1167 21.864C25.8633 21.864 26.5027 21.7007 27.0347 21.374C27.5667 21.0473 27.9727 20.576 28.2527 19.96L32.0607 21.052C31.4913 22.4333 30.5907 23.5067 29.3587 24.272C28.136 25.0373 26.7967 25.42 25.3407 25.42ZM20.3287 18.504V15.676H30.3527V18.504H20.3287ZM43.2998 25C42.2545 25.196 41.2278 25.28 40.2198 25.252C39.2211 25.2333 38.3251 25.0607 37.5318 24.734C36.7478 24.398 36.1505 23.8613 35.7398 23.124C35.3665 22.4333 35.1705 21.7333 35.1518 21.024C35.1331 20.3053 35.1238 19.4933 35.1238 18.588V5.68H38.9318V18.364C38.9318 18.952 38.9365 19.484 38.9458 19.96C38.9645 20.4267 39.0625 20.8 39.2398 21.08C39.5758 21.612 40.1125 21.9013 40.8498 21.948C41.5871 21.9947 42.4038 21.9573 43.2998 21.836V25ZM32.5478 12.82V9.88H43.2998V12.82H32.5478ZM45.8292 25V4.42H49.6372V25H45.8292Z"
          fill="white"
        />
        <path
          className={className}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M63.4935 10.4345C61.6541 8.26268 58.5868 7.67848 56.2821 9.66718C53.9775 11.6559 53.653 14.9809 55.4629 17.333C56.6221 18.8395 59.5909 21.6331 61.5756 23.447C62.2351 24.0498 62.5649 24.3512 62.9599 24.4721C63.2995 24.576 63.6875 24.576 64.0271 24.4721C64.4221 24.3512 64.7519 24.0498 65.4114 23.447C67.3961 21.6331 70.3649 18.8395 71.5241 17.333C73.334 14.9809 73.0491 11.635 70.7049 9.66718C68.3606 7.6994 65.3329 8.26268 63.4935 10.4345Z"
          fill="white"
        />
        <path
          className={className}
          d="M81.048 25L75.56 9.88H78.934L82.742 20.842L86.536 9.88H89.924L84.436 25H81.048ZM97.6437 25.42C96.113 25.42 94.769 25.0887 93.6117 24.426C92.4544 23.7633 91.549 22.844 90.8957 21.668C90.2517 20.492 89.9297 19.1387 89.9297 17.608C89.9297 15.956 90.247 14.5233 90.8817 13.31C91.5164 12.0873 92.3984 11.14 93.5277 10.468C94.657 9.796 95.9637 9.46 97.4477 9.46C99.0157 9.46 100.346 9.82867 101.438 10.566C102.539 11.294 103.356 12.3253 103.888 13.66C104.42 14.9947 104.62 16.5673 104.49 18.378H101.144V17.146C101.134 15.5033 100.845 14.304 100.276 13.548C99.7064 12.792 98.8104 12.414 97.5877 12.414C96.2064 12.414 95.1797 12.8433 94.5077 13.702C93.8357 14.5513 93.4997 15.7973 93.4997 17.44C93.4997 18.9707 93.8357 20.156 94.5077 20.996C95.1797 21.836 96.1597 22.256 97.4477 22.256C98.2784 22.256 98.9924 22.074 99.5897 21.71C100.196 21.3367 100.663 20.8 100.99 20.1L104.322 21.108C103.743 22.4707 102.847 23.53 101.634 24.286C100.43 25.042 99.0997 25.42 97.6437 25.42ZM92.4357 18.378V15.83H102.838V18.378H92.4357Z"
          fill="white"
        />
      </svg>
    ),
  };
  return icons[name] || null;
}
