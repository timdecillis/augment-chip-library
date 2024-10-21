import styles from "../styles/AugmentChip/types.module.css";
import '../styles/AugmentChip/AugmentChip.globals.css'

type AugmentChipType = {
  type: string;
  Size: string;
  StartIcon: string;
  Label: string;
  IsAnimating: boolean;
  EndAddOn: string;
};

function AugmentChip({
  type,
  Size,
  StartIcon,
  Label,
  IsAnimating,
  EndAddOn,
}: AugmentChipType) {

  return <div className={styles[type]}>{Label}</div>;
}

export default AugmentChip;
