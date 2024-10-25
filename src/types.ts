export type ChipPropsType = {
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  startIcon?: any;
  label: string;
  isAnimating: boolean;
  endAddOn: string;
};

export type ChipArgumentsArrayType = [
  string,
  string,
  string,
  JSX.Element,
  JSX.Element,
  boolean
];
