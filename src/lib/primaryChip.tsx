type PrimaryChipType = {
  label: string;
}

function PrimaryChip({label}: PrimaryChipType) {
  return (
    <div>{label}</div>
  )
}

export default PrimaryChip