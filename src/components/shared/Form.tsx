type InputProps = {
  label: string;
  type: string;
  placeholder?: string;
  autoComplete?: string;
};

type CheckboxProps = {
  label: string;
  checked?: boolean;
};

type RadioProps = {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
};

const Input = ({ label, type, placeholder, autoComplete }: InputProps) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-gray-900">{label}</span>
      <input
        type={type}
        className="border-gray-300 px-3 py-2 font-light text-gray-700 placeholder-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0"
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </label>
  );
};

const Checkbox = ({ label, checked = false }: CheckboxProps) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="border-gray-300 text-gray-900 focus:ring-0"
        defaultChecked={checked}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

const Radio = ({ label, name, value, checked = false }: RadioProps) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        className="border-gray-300 text-gray-900 focus:ring-0"
        defaultChecked={checked}
        name={name}
        value={value}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

const Form = { Input, Checkbox, Radio };

export default Form;
