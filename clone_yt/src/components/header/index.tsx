import { Container, LogoContainer, ButtonContainer, ButtonIcon } from "./style";
import HamburgerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/YouTube-Logo.png";

function Header() {
  return (
    <Container>
      <LogoContainer>
        <ButtonContainer>
          <ButtonIcon alt="" src={HamburgerIcon} />
        </ButtonContainer>
        <img
          style={{ cursor: "pointer", width: "100px", height: "100px" }}
          alt=""
          src={Logo}
        />
      </LogoContainer>
    </Container>
  );
}

export default Header;
