import AugmentChip from "../lib/AugmentChip/AugmentChip";
import { icon, addOn } from "../icons";

const createChip =
  (
    label: string,
    type: string,
    size: string,
    startIcon: any,
    endAddOn: any,
    isAnimating: boolean = true
  ) =>
  (props: any) =>
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

const createChipArray = (arrays: []) => {
  arrays.map((array) => {
    return createChip(...array);
  });
};

const chipArguments = [
  ["label", "primary", "medium", icon, addOn, false],
  ["label", "secondary", "medium", icon, addOn, false],
  ["label", "terniary", "medium", icon, addOn, false],
  ["label", "secondary", "small", icon, addOn, false],
  ["label", "secondary", "medium", icon, addOn, false],
  [
    "this is a really long label hey hey hey this is a long label",
    "secondary",
    "large",
    icon,
    addOn,
    false,
  ],
];

const displayComponents = createChipArray(chipArguments);
export default displayComponents;
