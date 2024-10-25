import AugmentChip from "../lib/AugmentChip/AugmentChip";

export const createChip = (label: string, type: string, size: string, startIcon: any, endAddOn: any, isAnimating: boolean = true) => (props: any) =>
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

  export const createChipArray = (
    arrays: []
  ) => {
    arrays.map((array) => {
      return createChip(...array);
    });
  };

