type AugmentChipType = {
  label: string;
  type: string;
}

function AugmentChip({label, type}: AugmentChipType) {
  return (
    <div>{label}</div>
  )
}

export default AugmentChip