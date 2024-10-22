import AugmentChip from "../lib/AugmentChip/AugmentChip";

const createChip = (type: string, size: string, startIcon: any) => (props: any) =>
  (
    <AugmentChip
      type={type}
      size={size}
      startIcon={startIcon}
      label="Label"
      IsAnimating={true}
      EndAddOn="none"
      {...props}
    />
  );
export default createChip;
