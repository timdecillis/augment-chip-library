import AugmentChip from "./AugmentChip";

const createChip = (type: string) => (props: any) =>
  (
    <AugmentChip
      Type={type}
      Size="Medium"
      StartIcon="none"
      Label="test chip"
      IsAnimating={true}
      EndAddOn="none"
      {...props}
    />
  );
export default createChip;
