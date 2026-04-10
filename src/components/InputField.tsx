interface InputFieldProps {
  placeholder: string;
  type: string;
  textCase?: string;
  onChange: (value: string) => void;
}

function InputField({ placeholder, type, textCase, onChange}: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`placeholder:normal-case w-full h-11 px-5 py-2 bg-slate-50/50 border border-slate-400 rounded-xl 
                 text-slate-700 transition-all duration-300 ease-in-out
                 
                 ${textCase ? "" : "uppercase"}

                 focus:outline-none focus:bg-white focus:ring-4 focus:ring-sky-500/10 focus:border-sky-400
                 hover:border-slate-300"`}
    />
  );
}

export default InputField;