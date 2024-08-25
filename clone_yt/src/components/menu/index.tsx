import { Container, MenuItem } from "./styles";

const itens = [
  {
    name: "Inicio",
  },
  {
    name: "Em alta",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Originais",
  },
  {
    name: "Histórico",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Curtidas",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },

  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },

  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },

  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },

  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
  {
    name: "Inscrições",
  },
]; // simulando uma requição para pegar os itens do menu

interface IProps {
  openMenu: boolean;
}
function Menu({ openMenu }: IProps) {
  return (
    <Container openMenu={openMenu}>
      {itens.map((item) => (
        <MenuItem>{item.name}</MenuItem>
      ))}
    </Container>
  );
}

export default Menu;
