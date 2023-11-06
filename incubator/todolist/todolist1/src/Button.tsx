type PropsType = {
  name: string;
};

export function Button(props: PropsType) {
  return <button className="btn">{props.name}</button>;
}
