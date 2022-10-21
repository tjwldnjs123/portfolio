import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    *{
        box-sizing:border-box;
        font-family: 'Noto Sans', 'Noto Sans KR', sans-serif !important;
        a {
            color: inherit;
            text-decoration: none;
    }
    }
`;

export default GlobalStyle;
