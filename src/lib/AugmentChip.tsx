import types from "../styles/AugmentChip/types.module.css";
import sizes from "../styles/AugmentChip/sizes.module.css";
import "../styles/AugmentChip/AugmentChip.globals.css";

type AugmentChipType = {
  type: string;
  size: string;
  StartIcon: string;
  Label: string;
  IsAnimating: boolean;
  EndAddOn: string;
};

function AugmentChip({
  type,
  size,
  StartIcon,
  Label,
  IsAnimating,
  EndAddOn,
}: AugmentChipType) {
  return <div className={`${types[type]} ${sizes[size]}`}>{Label}</div>;
}

export default AugmentChip;
