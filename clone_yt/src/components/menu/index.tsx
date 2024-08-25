import { Container, MenuItem, ButtonIcon } from "./styles";
import {
  HouseDoor,
  FileEarmarkPlay,
  CollectionPlay,
  PlayBtn,
  ClockHistory,
} from "react-bootstrap-icons";

const itens = [
  {
    name: "Inicio",
    icon: <HouseDoor size={20} />,
  },
  {
    name: "Shorts",
    icon: <FileEarmarkPlay size={20} />,
  },
  {
    name: "Inscrições",
    icon: <CollectionPlay size={20} />,
  },
  {
    name: "Você",
    icon: <PlayBtn size={20} />,
  },
  {
    name: "Histórico",
    icon: <ClockHistory size={20} />,
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
          {item.icon}
          <span>{item.name}</span>
        </MenuItem>
      ))}
    </Container>
  );
}

export default Menu;
