import types from "./types.module.css";
import sizes from "./sizes.module.css";
import "./globals.css";
import ChipPropsType from "../../types";

function AugmentChip({
  type,
  size,
  startIcon,
  label,
  isAnimating,
  endAddOn,
}: ChipPropsType) {
  return (
    <>
      <div className={`chip ${types[type]} ${sizes[size]}`}>
        <div className="row">
          <div className="row-item">{startIcon}</div>
          <div className="row-item">{label}</div>
          <div className="row-item">{endAddOn}</div>
        </div>
      </div>
    </>
  );
}

export default AugmentChip;
