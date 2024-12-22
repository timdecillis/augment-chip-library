import AugmentChip from "../lib/AugmentChip/AugmentChip";
import { icon, addOn } from "../icons";
import { ChipArgumentsArrayType } from "../types";

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

const createChipArray = (chipArgumentsArray: ChipArgumentsArrayType[]) => {
  return chipArgumentsArray.map((chipArguments) => {
    return createChip(...chipArguments);
  });
};

const chipArgumentsArrayLiteral: ChipArgumentsArrayType[] = [
  ["label", "primary", "medium", icon, addOn, false],
  ["label", "secondary", "medium", icon, addOn, false],
  ["label", "tertiary", "medium", icon, addOn, false],
  ["label", "secondary", "small", icon, addOn, false],
  ["label", "secondary", "medium", icon, addOn, false],
  [
    "this is a really long label hey hey hey this is a long label",
    "secondary",
    "large",
    icon,
    addOn,
    true,
  ],
];

const displayComponents = createChipArray(chipArgumentsArrayLiteral);

export default displayComponents;
