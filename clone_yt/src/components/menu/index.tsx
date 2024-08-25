import { Container, MenuItem, ButtonIcon } from "./styles";
import SearchIcon from "../../assets/search.png";

const itens = [
  {
    name: "Inicio",
  },
  {
    name: "Shorts",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Biblioteca",
  },
  {
    name: "Histórico",
  },
]; // simulando uma requição para pegar os itens do menu

interface IProps {
  openMenu: boolean;
}
function Menu({ openMenu }: IProps) {
  return (
    <Container openMenu={openMenu}>
      {itens.map((item) => (
        <MenuItem openMenu={openMenu}>
          <ButtonIcon alt="" src={SearchIcon} />
          <span>{item.name}</span>
        </MenuItem>
      ))}
    </Container>
  );
}

export default Menu;
