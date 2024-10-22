import types from "../styles/AugmentChip/types.module.css";
import sizes from "../styles/AugmentChip/sizes.module.css";
import "../styles/AugmentChip/AugmentChip.globals.css";

type AugmentChipPropsType = {
  type: string;
  size: string;
  startIcon: any;
  Label: string;
  IsAnimating: boolean;
  EndAddOn: string;
};

function AugmentChip({
  type,
  size,
  startIcon,
  Label,
  IsAnimating,
  EndAddOn,
}: AugmentChipPropsType) {
  return (
    <>
      <div className={`${types[type]} ${sizes[size]}`}>
        {Label}
        {startIcon}
      </div>
    </>
  );
}

export default AugmentChip;
