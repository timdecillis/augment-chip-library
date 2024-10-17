type AugmentChipType = {
  Type: string;
  Size: string;
  StartIcon: string;
  Label: string;
  IsAnimating: boolean;
  EndAddOn: string;
};

function AugmentChip({
  Type,
  Size,
  StartIcon,
  Label,
  IsAnimating,
  EndAddOn,
}: AugmentChipType) {

  type DataType = {
    [k: string]: string;
  }
  const TypeData: DataType = {
    Primary: 'foo',
    Secondary: 'bar',
    Terniary: 'foobar'
  }
  const elementClass = `${TypeData[Type]}-${Size}-${IsAnimating}-${EndAddOn}`
  return <div style={{background: 'red', maxWidth: '40px'}} className={elementClass} >{Label}</div>;
}

export default AugmentChip;
