import { StyledHeader } from "./Header.styled";
import logo from "../../assets/images/TODO.png";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";
interface Props {
  handler: () => void;
  mode: boolean;
}
export default function Header(props: Props) {
  return (
    <StyledHeader>
      <img className="logo" alt="logo" src={logo}></img>
      <img
        onClick={props.handler}
        className="switch"
        src={props.mode ? sun : moon}
      ></img>
    </StyledHeader>
  );
}
