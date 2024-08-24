import {
  Container,
  LogoContainer,
  ButtonContainer,
  ButtonIcon,
  SearchContainer,
  SearchImputContainer,
  SearchImput,
  SearchButton,
  HeaderButton,
} from "./style";
import HamburgerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/YouTube-Logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import VideoIcon from "../../assets/video.png";
import NotificationIcon from "../../assets/sino.png";

function Header() {
  return (
    <Container>
      <LogoContainer>
        <ButtonContainer margin="0 10px 0 0">
          <ButtonIcon alt="" src={HamburgerIcon} />
        </ButtonContainer>
        <img
          style={{ cursor: "pointer", width: "100px", height: "100px" }}
          alt=""
          src={Logo}
        />
      </LogoContainer>

      <SearchContainer>
        <SearchImputContainer>
          <SearchImput placeholder="Pesquisar" />
        </SearchImputContainer>
        <SearchButton>
          <ButtonIcon alt="" src={SearchIcon} />
        </SearchButton>
        <ButtonContainer>
          <ButtonIcon alt="" src={MicIcon} />
        </ButtonContainer>
      </SearchContainer>

      <HeaderButton>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={VideoIcon} />
        </ButtonContainer>

        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={NotificationIcon} />
        </ButtonContainer>

        <ButtonContainer margin="0 0 0 10px">F</ButtonContainer>
      </HeaderButton>
    </Container>
  );
}

export default Header;
