import styles from "../styles/AugmentChip/types.module.css";
import '../styles/AugmentChip/AugmentChip.globals.css'

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
  };
  const typeData: DataType = {
    Primary: "primary",
    Secondary: "secondary",
    Terniary: "terniary",
  };

  return <div className={styles[typeData[Type]]}>{Label}</div>;
}

export default AugmentChip;
