import AugmentChip from "./AugmentChip";

const createChip = (type: string, size: string) => (props: any) =>
  (
    <AugmentChip
      type={type}
      size={size}
      StartIcon="none"
      Label="Label"
      IsAnimating={true}
      EndAddOn="none"
      {...props}
    />
  );
export default createChip;
