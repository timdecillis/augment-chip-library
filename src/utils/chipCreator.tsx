import AugmentChip from "../lib/AugmentChip/AugmentChip";

const createChip = (label: string, type: string, size: string, startIcon: any, endAddOn: any, isAnimating: boolean = true) => (props: any) =>
  (
    <AugmentChip
      type={type}
      size={size}
      startIcon={startIcon}
      label={label}
      isAnimating={isAnimating}
      endAddOn={endAddOn}
      {...props}
    />
  );
export default createChip;
