import types from "./types.module.css";
import sizes from "./sizes.module.css";
import "./globals.css";
import { ChipPropsType } from "../../types";

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
      <button
        style={{ cursor: "pointer" }}
        className={`chip ${types[type]} ${sizes[size]}`}
      >
        <div className="row">
          <div className="row-item">{startIcon}</div>
          <div className="row-item label-container">
            <div className={`${isAnimating ? "label scroll" : ""}`}>
              {label}
            </div>
          </div>
          <div className="row-item end-addon-container">
            <select
              className="end-addon-select"
              defaultValue="default"
              style={{
                padding: "0",
                margin: "0",
                border: "none",
                background: "transparent",
              }}
            >
              <option value="default" disabled hidden>
                {endAddOn}
              </option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
            </select>
          </div>
        </div>
      </button>
    </>
  );
}

export default AugmentChip;
