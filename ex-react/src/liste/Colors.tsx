type Items = {
  id: number;
  name: string;
};

type ColorsProps = {
  items: Items[];
};

type ColorProps = {
  color: Items;
};

export function Color({ color }: ColorProps) {
  return <li>{color.name}</li>;
}

export function Colors({ items }: ColorsProps) {
  return (
    <ul>
      {items.map((item) => (
        <Color key={item.id} color={item} />
      ))}
    </ul>
  );
}
