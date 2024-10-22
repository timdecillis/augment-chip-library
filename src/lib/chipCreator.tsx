import AugmentChip from "./AugmentChip";

const createChip = (type: string, size: string) => (props: any) =>
  (
    <AugmentChip
      type={type}
      size={size}
      startIcon="none"
      Label="Label"
      IsAnimating={true}
      EndAddOn="none"
      {...props}
    />
  );
export default createChip;
