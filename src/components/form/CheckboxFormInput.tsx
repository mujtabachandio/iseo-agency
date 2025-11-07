import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface CheckboxFormInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
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
      render={({ field: { onChange, value = [] }, fieldState: { error } }) => {
        const handleChange = (optionValue: string, checked: boolean) => {
          const currentValues = Array.isArray(value) ? value : []
          if (checked) {
            onChange([...currentValues, optionValue])
          } else {
            onChange(currentValues.filter((v: string) => v !== optionValue))
          }
        }

        const isChecked = (optionValue: string) => {
          return Array.isArray(value) && value.includes(optionValue)
        }

        return (
          <div className="mb-3">
            {label && <label className="form-label fw-medium text-dark mb-3 d-block">{label}</label>}
            <div className={`row g-3`}>
              {options.map((option, idx) => (
                <div key={idx} className={`col-${12 / columns}`}>
                  <div className="form-check p-2 rounded" style={{ backgroundColor: isChecked(option.value) ? 'rgba(0, 188, 212, 0.1)' : 'transparent', transition: 'background-color 0.2s' }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`${name}-${idx}`}
                      checked={isChecked(option.value)}
                      onChange={(e) => handleChange(option.value, e.target.checked)}
                      style={{ cursor: 'pointer' }}
                    />
                    <label className="form-check-label" htmlFor={`${name}-${idx}`} style={{ cursor: 'pointer', width: '100%' }}>
                      {option.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            {error && <div className="text-danger fs-12 mt-1">{error.message}</div>}
          </div>
        )
      }}
    />
  )
}

export default CheckboxFormInput

