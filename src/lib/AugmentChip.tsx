import types from "../styles/AugmentChip/types.module.css";
import sizes from "../styles/AugmentChip/sizes.module.css";
import "../styles/AugmentChip/AugmentChip.globals.css";

type AugmentChipPropsType = {
  type: 'primary' | 'secondary' | 'terniary';
  size: 'small' | 'medium' | 'large';
  startIcon?: any;
  label: string;
  IsAnimating: boolean;
  EndAddOn: string;
};

function AugmentChip({
  type,
  size,
  startIcon,
  label,
  IsAnimating,
  EndAddOn,
}: AugmentChipPropsType) {
  return (
    <>
      <div className={`global-augment-chip ${types[type]} ${sizes[size]}`}>
        {startIcon}
        {label}
      </div>
    </>
  );
}

export default AugmentChip;
