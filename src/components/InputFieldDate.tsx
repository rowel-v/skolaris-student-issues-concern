import { useState } from "react";

interface InputFieldDateProps {
    onChange: (value: string) => void;
}

function InputFieldDate({ onChange }: InputFieldDateProps) {
    const [value, setValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const showDateText = value !== "" || isFocused;

    return (
        <div className="relative w-full h-11 bg-slate-50/50 border border-slate-400 rounded-xl flex items-center transition-all duration-300 hover:border-slate-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-sky-500/10 focus-within:border-sky-400">
            
            <input
                type="date"
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => {
                    const val = e.target.value;
                    setValue(val);
                    onChange(val);
                }}
                className={`w-full h-full px-5 bg-transparent text-slate-700 focus:outline-none cursor-pointer z-10 appearance-none
                
                ${showDateText ? "[&::-webkit-datetime-edit]:opacity-100" : "[&::-webkit-datetime-edit]:opacity-0"}

                /* Hide the native browser icon so it doesn't overlap our custom one */
                [&::-webkit-calendar-picker-indicator]:opacity-0 
                [&::-webkit-calendar-picker-indicator]:absolute 
                [&::-webkit-calendar-picker-indicator]:inset-0 
                [&::-webkit-calendar-picker-indicator]:w-full 
                [&::-webkit-calendar-picker-indicator]:h-full 
                [&::-webkit-calendar-picker-indicator]:cursor-pointer
                [&::-webkit-calendar-picker-indicator]:z-20`}
                
                style={{
                    /* ─── CUSTOM ICON POSITIONING ─── */
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    /* This moves the arrow 1.5rem (24px) from the right edge */
                    backgroundPosition: 'right 1rem center', 
                    backgroundSize: '1rem'
                }}
            />

            {!showDateText && (
                <label className="absolute left-5 text-slate-400 font-normal pointer-events-none transition-all">
                    Birthdate
                </label>
            )}
        </div>
    );
}

export default InputFieldDate;