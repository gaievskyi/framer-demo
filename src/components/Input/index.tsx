type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode
}

export const Input = ({
  id,
  onChange,
  value,
  label,
  type = 'text',
  ...rest
}: InputProps) => (
  <label htmlFor={id}>
    <span>{label}</span>
    <input
      className="input"
      id={id}
      value={value}
      type={type}
      onChange={onChange}
      {...rest}
    />
  </label>
)
