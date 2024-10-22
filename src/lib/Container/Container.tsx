import './globals.css'

function Container({ components }: any) {
  return <div className='container' >{
    components.map((Comp: any, index: number) => <Comp key={index} />)
    }</div>;
}

export default Container;