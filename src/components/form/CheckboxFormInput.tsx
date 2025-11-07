import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface CheckboxFormInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: string
  options: { value: string; label: string }[]
  columns?: number
}

const CheckboxFormInput = <T extends FieldValues>({
  control,
  name,
  label,
  options,
  columns = 2,
}: CheckboxFormInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const currentValues = Array.isArray(value) ? [...value] : []

        const handleChange = (optionValue: string, checked: boolean) => {
          if (checked) {
            onChange([...currentValues, optionValue])
          } else {
            onChange(currentValues.filter((v) => v !== optionValue))
          }
        }

        const isChecked = (optionValue: string) => {
          return currentValues.includes(optionValue)
        }

        return (
          <div className="mb-3">
            {label && <label className="form-label fw-medium text-dark mb-3 d-block">{label}</label>}
            <div className={`