import "../styles/repositoryItemStyle.scss";

interface RepositoryItemProps {
  repository: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li className="container">
      <div>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>

        <a target="_blank" href={props.repository.html_url}>
          Acessar Repositório
        </a>
      </div>
    </li>
  );
}
