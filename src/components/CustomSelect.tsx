import { useState, useRef, useEffect } from "react";
import type { CustomSelectOption } from "../data/program";

interface CustomSelectProps {
    value: string;
    onChange: (val: string) => void;
    options: CustomSelectOption[];
    placeholder: string;
}

function CustomSelect({ value, onChange, options, placeholder }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: CustomSelectOption) => {
        if (option.isHeader) return;
        onChange(option.value);
        setIsOpen(false);
    };

    return (
        <div className="relative flex flex-col gap-1 w-full" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full h-11 pl-5 pr-12 border rounded-xl transition-all duration-200 text-left flex items-center 
          ${isOpen ? "border-sky-400 bg-white ring-4 ring-sky-500/10" : "border-slate-400 bg-slate-50/50 hover:border-sky-300"} 
          ${value === "" ? "text-gray-400" : "text-slate-800 font-medium text-[14px]"}`}
            >
                {value === "" ? placeholder : (selectedOption ? selectedOption.label : placeholder)}

                <div className="absolute right-4 inset-y-0 flex items-center pointer-events-none">
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-500" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* ─── Dropdown List (Moved to Upperside) ─── */}
            {isOpen && (
                <div className="absolute left-0 bottom-[calc(100%+8px)] w-full max-h-155 bg-white border border-slate-200 rounded-xl shadow-2xl z-99 overflow-y-auto animate-in fade-in slide-in-from-bottom-2">
                    {options.map((option, index) => {
                        if (option.isHeader) {
                            // If label is empty, show a simple full-width line
                            if (option.label === "") {
                                return (
                                    <div key={`header-${index}`} className="px-4 py-3">
                                        <div className="h-px w-full bg-slate-200"></div>
                                    </div>
                                );
                            }

                            // Otherwise, show the text divider
                            return (
                                <div
                                    key={`header-${index}`}
                                    className="px-4 pt-4 pb-1 text-[#2563eb] font-extrabold uppercase text-[10px] tracking-widest flex items-center gap-2 sticky top-0 bg-white"
                                >
                                    <span className="w-3 h-[1.5px] bg-sky-100 rounded-full"></span>
                                    {option.label}
                                    <span className="grow h-[1.5px] bg-sky-100 rounded-full"></span>
                                </div>
                            );
                        }

                        return (
                            <button
                                key={`opt-${index}`}
                                type="button"
                                onClick={() => handleSelect(option)}
                                className={`w-full px-5 py-3 text-left text-[13px] transition-colors active:bg-sky-100
        ${value === option.value ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-700 hover:bg-slate-50"}
      `}
                            >
                                {option.label}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default CustomSelect;