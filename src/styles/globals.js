import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  @font-face {
    font-family: 'Space Grotesk';
    src: url('/fonts/Fonts/OTF/SpaceGrotesk-Regular.otf') format('opentype'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-Regular.woff2') format('woff2'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url('/fonts/Fonts/OTF/SpaceGrotesk-Medium.otf') format('opentype'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-Medium.woff2') format('woff2'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url('/fonts/Fonts/OTF/SpaceGrotesk-Bold.otf') format('opentype'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-Bold.woff2') format('woff2'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url('/fonts/Fonts/OTF/SpaceGrotesk-SemiBold.otf') format('opentype'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-SemiBold.woff2') format('woff2'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Space Grotesk';
    src: url('/fonts/Fonts/OTF/SpaceGrotesk-Light.otf') format('opentype'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-Light.woff2') format('woff2'),
         url('/fonts/Fonts/WEB/fonts/SpaceGrotesk-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;

    @media screen and (max-width: 640px) {
      font-size: 55%;
    }
    @media screen and (max-width: 450px) {
      font-size: 50%;
    }
  }
  body {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    overflow-x: hidden;
    width: 100%;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: 'Space Grotesk', sans-serif;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;