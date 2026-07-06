type Items = {
  id: number;
  name: string;
};

export function Color({ id, name }: Items) {
  return <li>{name}</li>;
}
