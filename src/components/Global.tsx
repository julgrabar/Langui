import { createGlobalStyle } from "styled-components";
import zigzag from "images/zigzag.svg";
import stars from "images/stars.svg";
import dots from "images/dots.svg";
import waves from "images/waves.svg";
import round from "images/round.svg";

export const Global = createGlobalStyle`
  HTML{
    
  min-height: 100%;
  }
  body { 
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,'Lato', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  background: 
    url(${stars}) top 100px right -150px no-repeat,
    url(${dots}) top 600px left -150px no-repeat,
    url(${zigzag}) top 100px left -20px no-repeat,
    url(${waves})  bottom right 30% no-repeat,
    rgba(10, 211, 255, 0.05);
  @media screen and (min-width: 768px) {
    background: 
    url(${stars}) top 100px right no-repeat,
    url(${dots}) top 600px left -150px no-repeat,
    url(${round}) top 100px left 30% no-repeat,
    url(${zigzag}) top 100px left -20px no-repeat,
    url(${stars})  top 600px right -200px no-repeat,
    url(${waves})  bottom right 30% no-repeat,
    rgba(10, 211, 255, 0.05);
  }
  img {
  display: block;
  max-width: 100%;
  height: auto;
}

html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

}
`