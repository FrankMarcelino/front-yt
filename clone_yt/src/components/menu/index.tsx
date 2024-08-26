import { Container, MenuItem } from "./styles";
import {
  HouseDoor,
  FileEarmarkPlay,
  CollectionPlay,
  PlayBtn,
  ClockHistory,
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
  Gear,
  Flag,
  QuestionCircle,
  InfoSquare,
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
    divisor: true,
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
    divisor: true,
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

const blockToos = [
  {
    divisor: true,
    name: "Configurações",
    icon: <Gear size={20} />,
  },
  {
    name: "Histórico de denuncias",
    icon: <Flag size={20} />,
  },
  {
    name: "Ajuda",
    icon: <QuestionCircle size={20} />,
  },
  {
    name: "Enviar Feedback",
    icon: <InfoSquare size={20} />,
  },
];
interface IProps {
  openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
  const itemsToShow = openMenu
    ? [...mainItemsMenu, ...blockLogin, ...blockExsplorer, ...blockToos]
    : mainItemsMenu;

  return (
    <Container openMenu={openMenu}>
      <div>
        {itemsToShow.map((item) => (
          <div key={item.name}>
            {"divisor" in item ? (
              <div className="divider" />
            ) : (
              <MenuItem openMenu={openMenu}>
                {item.icon}
                <span>{item.name}</span>
              </MenuItem>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Menu;
