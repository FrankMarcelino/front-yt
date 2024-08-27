import { Container, MenuItem } from "./styles";
import { useNavigate } from "react-router-dom";
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
    link: "/",
  },
  {
    name: "Shorts",
    icon: <FileEarmarkPlay size={20} />,
    link: "/shorts",
  },
  {
    name: "Inscrições",
    icon: <CollectionPlay size={20} />,
    link: "/library",
  },
  {
    name: "Você",
    icon: <PlayBtn size={20} />,
    link: "/profile",
  },
  {
    divisor: true,
    name: "Histórico",
    icon: <ClockHistory size={20} />,
    link: "/history",
  },
]; // simulando uma requição para pegar os itens do menu

const blockLogin = [
  {
    name: "Faça login para curtir vídeos, comentar e se inscrever.",
    icon: "",
    link: "/login",
  },
];

const blockExsplorer = [
  {
    divisor: true,
    name: "Explorar",
    icon: "",
    link: "/",
  },
  {
    name: "Em alta",
    icon: <Fire size={20} />,
    link: "/em-alta",
  },
  {
    name: "Shopping",
    icon: <Bag size={20} />,
    link: "/shopping",
  },
  {
    name: "Músicas",
    icon: <MusicNote size={20} />,
    link: "/musicas",
  },
  {
    name: "Filmes",
    icon: <Film size={20} />,
    link: "/filmes",
  },
  {
    name: "Ao vivo",
    icon: <Broadcast size={20} />,
    link: "/ao-vivo",
  },
  {
    name: "Jogos",
    icon: <Controller size={20} />,
    link: "/jogos",
  },
  {
    name: "Noticias",
    icon: <Newspaper size={20} />,
    link: "/noticias",
  },
  {
    name: "Esportes",
    icon: <Trophy size={20} />,
    link: "/esportes",
  },
  {
    name: "Cursos",
    Lightbulb,
    icon: <Lightbulb size={20} />,
    link: "/cursos",
  },
  {
    name: "Podcasts",
    icon: <BroadcastPin size={20} />,
    link: "/podcasts",
  },
];

const blockToos = [
  {
    divisor: true,
    name: "Configurações",
    icon: <Gear size={20} />,
    link: "/",
  },
  {
    name: "Histórico de denuncias",
    icon: <Flag size={20} />,
    link: "/",
  },
  {
    name: "Ajuda",
    icon: <QuestionCircle size={20} />,
    link: "/",
  },
  {
    name: "Enviar Feedback",
    icon: <InfoSquare size={20} />,
    link: "/",
  },
];
interface IProps {
  openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
  const navigate = useNavigate();

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
              <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}>
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
