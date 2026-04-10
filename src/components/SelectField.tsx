interface Option {
  value: string;
  label: string;
}

interface GroupedOption {
  label: string;
  options: Option[];
}

interface SelectFieldProps {
  value: string;
  onChange: (val: string) => void;
  options: (Option | GroupedOption)[]; // Handles both flat and grouped lists
  placeholder: string;
}

const SelectField = ({ value, onChange, options, placeholder }: SelectFieldProps) => {
  return (
    <div className="relative w-full group">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-12 pl-4 pr-10 py-2 border border-slate-300 rounded-xl 
          bg-slate-50/50 shadow-sm appearance-none transition-all duration-200
          focus:outline-none focus:ring-4 focus:ring-sky-500/10 focus:border-sky-400
          ${value === "" ? "text-gray-400" : "text-slate-800 font-medium text-[15px]"}`}
        style={{
          // Custom SVG arrow that stays visible and aligned on mobile
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230ea5e9'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          backgroundSize: "1.2rem",
        }}
      >
        <option value="" disabled className="bg-white">
          {placeholder}
        </option>

        {options.map((item, idx) => {
          // If it's a Grouped object (has 'options' array)
          if ("options" in item) {
            return (
              <optgroup 
                key={idx} 
                label={item.label} 
                className="bg-white text-sky-600 font-bold uppercase text-[11px] tracking-tight"
              >
                {item.options.map((opt) => (
                  <option key={opt.value} value={opt.value} className="text-slate-900 bg-white">
                    {/* Native indentation for mobile pickers */}
                    {"\u00A0\u00A0" + opt.label}
                  </option>
                ))}
              </optgroup>
            );
          }
          
          // Otherwise, render as a flat option (like Year Level)
          return (
            <option key={item.value} value={item.value} className="text-slate-900 bg-white">
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;