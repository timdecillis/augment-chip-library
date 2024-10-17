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
  console.log(TypeData[Type])
  return <div className={`${TypeData[Type]}-${Size}-${IsAnimating}-${EndAddOn}`} >{Label}</div>;
}

export default AugmentChip;
