interface Props {
  item: {name: string, url: string};
  onClick: (url: string) => void;
}

const Item = ({item, onClick}: Props) => {
  return (<>
    <div className="card" onClick={() => onClick(item.url)}>{item.name.toUpperCase()}</div>
  </>);
}

export default Item;
