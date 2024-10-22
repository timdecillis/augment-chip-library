import types from "./types.module.css";
import sizes from "./sizes.module.css";
import "./AugmentChip.globals.css";

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
