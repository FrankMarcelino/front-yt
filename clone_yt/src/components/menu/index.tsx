import { Container, MenuItem, ButtonIcon } from "./styles";
import {
  HouseDoor,
  FileEarmarkPlay,
  CollectionPlay,
  PlayBtn,
  ClockHistory,
  FilePerson,
  ChevronLeft,
  Fire,
  Bag,
  Film,
  MusicNote,
  Broadcast,
  BroadcastPin,
  Controller,
  Newspaper,
  Trophy,
  Lightbulb,
} from "react-bootstrap-icons";

const mainItemsMenu = [
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

const blockLogin = [
  {
    name: "Faça login para curtir vídeos, comentar e se inscrever.",
    icon: "",
  },
];

const blockExsplorer = [
  {
    name: "Explorar",
    icon: "",
  },
  {
    name: "Em alta",
    icon: <Fire size={20} />,
  },
  {
    name: "Shopping",
    icon: <Bag size={20} />,
  },
  {
    name: "Músicas",
    icon: <MusicNote size={20} />,
  },
  {
    name: "Filmes",
    icon: <Film size={20} />,
  },
  {
    name: "Ao vivo",
    icon: <Broadcast size={20} />,
  },
  {
    name: "Jogos",
    icon: <Controller size={20} />,
  },
  {
    name: "Noticias",
    icon: <Newspaper size={20} />,
  },
  {
    name: "Esportes",
    icon: <Trophy size={20} />,
  },
  {
    name: "Cursos",
    Lightbulb,
    icon: <Lightbulb size={20} />,
  },
  {
    name: "Podcasts",
    icon: <BroadcastPin size={20} />,
  },
];

interface IProps {
  openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
  const itemsToShow = openMenu
    ? [...mainItemsMenu, ...blockLogin, ...blockExsplorer]
    : mainItemsMenu;

  return (
    <Container openMenu={openMenu}>
      {itemsToShow.map((item) => (
        <MenuItem openMenu={openMenu} key={item.name}>
          {item.icon}
          <span>{item.name}</span>
        </MenuItem>
      ))}
    </Container>
  );
}

export default Menu;
