import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-image: ${(props) =>
          props.theme
            ? "url('../../public/assets/images/bg-mobile-dark.jpg')"
            : "url('../../public/assets/images/bg-mobile-light.jpg')"} ; 
        background-color: ${(props) => (props.theme ? "#171823" : "#FAFAFA")};
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: top;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        @media screen and (min-width: 768px) {
            
            background-image: ${(props) =>
              props.theme
                ? "url('../../public/assets/images/bg-desktop-dark.jpg')"
                : "url('../../public/assets/images/bg-desktop-light.jpg')"} ;
        }
    }
       
`;
