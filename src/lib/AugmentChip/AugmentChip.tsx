import types from "./types.module.css";
import sizes from "./sizes.module.css";
import "./globals.css";
import ChipPropsType from "../../types";

function AugmentChip({
  type,
  size,
  startIcon,
  label,
  IsAnimating,
  endAddOn,
}: ChipPropsType) {
  return (
    <>
      <div className={`chip ${types[type]} ${sizes[size]}`}>
        <div className="row" >
          {startIcon}
          {label}
        </div>
      </div>
    </>
  );
}

export default AugmentChip;
