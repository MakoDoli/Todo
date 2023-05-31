import { createGlobalStyle } from "styled-components";
import mobdark from "../../public/assets/images/bg-mobile-dark.jpg";
import moblight from "../../public/assets/images/bg-mobile-light.jpg";
import desktopdark from "../../public/assets/images/bg-desktop-dark.jpg";
import desktoplight from "../../public/assets/images/bg-desktop-light.jpg";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-image: ${(props) =>
          props.theme ? `url( ${mobdark} )` : `url(${moblight})`};
        background-color: ${(props) => (props.theme ? "#171823" : "#FAFAFA")};
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: top;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        @media screen and (min-width: 768px) {
            
            background-image: ${(props) =>
              props.theme ? `url(${desktopdark})` : `url(${desktoplight})`}
    }
}  
`;
