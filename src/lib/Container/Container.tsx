import "./globals.css";

function Container({ components }: any) {
  return (
    <div className="container">
      <div>
        {components.map((Comp: any, index: number) => (
          <Comp key={index} />
        ))}
      </div>
    </div>
  );
}

export default Container;
