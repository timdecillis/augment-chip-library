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
  return <div className={`${Type}-${Size}-${IsAnimating}-${EndAddOn}`} >{Label}</div>;
}

export default AugmentChip;
