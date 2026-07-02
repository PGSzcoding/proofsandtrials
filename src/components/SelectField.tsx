import { ChevronDown } from "lucide-react";

type SelectOption = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  label?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
  value: string;
  placeholder?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
};

export default function SelectField({
  label,
  value,
  placeholder = "Selecciona una opción",
  options,
  className,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none rounded-full border border-slate-300 bg-white px-6 py-4 pr-14 text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100 ${className ?? ""}`}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={20}
          className="pointer-events-none absolute right-6 top-[43%] -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}