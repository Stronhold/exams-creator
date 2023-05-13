import Item from "../Item/Item";

interface Props {
  list: {name: string, url: string}[];
  onClick: (url: string) => void;
}

const List = ({list, onClick}: Props) => {
  return (<ul>
    {list.map((item, index) => (
      <Item key={index} item={item} onClick={onClick}/>
    ))}
  </ul>);
}

export default List;
