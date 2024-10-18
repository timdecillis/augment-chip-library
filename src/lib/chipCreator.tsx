import AugmentChip from "./AugmentChip";

const createChip = (type: string, size: string) => (props: any) =>
  (
    <AugmentChip
      Type={type}
      Size={size}
      StartIcon="none"
      Label="test chip"
      IsAnimating={true}
      EndAddOn="none"
      {...props}
    />
  );
export default createChip;
