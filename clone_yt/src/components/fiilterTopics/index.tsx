import { Topic } from "./styles";

const Topics = [
  {
    name: "Tudo",
  },
  {
    name: "Musica",
  },
  {
    name: "Jogos",
  },
  {
    name: "Filmes",
  },
  {
    name: "Esportes",
  },
  {
    name: "Noticias",
  },
  {
    name: "Cursos",
  },
  {
    name: "Ao vivo",
  },
]; // simulando uma requição para pegar os itens do menu

interface IProps {
  openMenu: boolean;
}

function FilterTopic({ openMenu }: IProps) {
  return (
    <Topic openMenu={openMenu}>
      {Topics.map((topic) => (
        <button>
          <span>{topic.name}</span>
        </button>
      ))}
    </Topic>
  );
}

export default FilterTopic;
