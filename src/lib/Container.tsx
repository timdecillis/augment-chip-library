import '../styles/Container.css'

function Container({ components }: any) {
  return <div>{
    components.map((Comp: any, index: number) => <Comp key={index} />)
    }</div>;
}

export default Container;