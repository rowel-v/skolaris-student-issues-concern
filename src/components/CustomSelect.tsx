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

  // Find the currently selected option object
  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
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

  /**
   * Logic to determine what text to show in the box.
   * If "Other concern (Click here)" is selected, we shorten it to "Other concern".
   */
  const getDisplayText = () => {
    if (value === "" || !selectedOption) return placeholder;
    
    if (selectedOption.label.includes("(Click here)")) {
      return "Other concern";
    }
    
    return selectedOption.label;
  };

  return (
    <div className="relative flex flex-col gap-1 w-full" ref={dropdownRef}>
      {/* ─── Trigger Button ─── */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 pl-5 pr-12 border rounded-xl transition-all duration-200 text-left flex items-center relative
          ${isOpen ? "border-sky-400 bg-white ring-4 ring-sky-500/10" : "border-slate-400 bg-slate-50/50 hover:border-sky-300"} 
          ${value === "" ? "text-gray-400" : "text-slate-800 font-medium text-[14px]"}`}
      >
        <span className="truncate">
          {getDisplayText()}
        </span>

        {/* Dropdown Arrow */}
        <div className="absolute right-4 inset-y-0 flex items-center pointer-events-none">
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-500" : "text-slate-400"}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* ─── Dropdown List (Opens Upwards) ─── */}
      {isOpen && (
        <div className="absolute left-0 bottom-[calc(100%+8px)] w-full max-h-87.5 bg-white border border-slate-200 rounded-xl shadow-2xl z-[100] overflow-y-auto animate-in fade-in slide-in-from-bottom-2">
          {options.map((option, index) => {
            // Render Category Headers
            if (option.isHeader) {
              if (option.label === "") {
                return (
                  <div key={`header-${index}`} className="px-4 py-3">
                    <div className="h-px w-full bg-slate-200"></div>
                  </div>
                );
              }

              return (
                <div
                  key={`header-${index}`}
                  className="px-4 pt-4 pb-1 text-[#2563eb] font-extrabold uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 sticky top-0 bg-white z-10"
                >
                  <span className="grow h-[1.5px] bg-sky-100 rounded-full"></span>
                  <span className="shrink-0">{option.label}</span>
                  <span className="grow h-[1.5px] bg-sky-100 rounded-full"></span>
                </div>
              );
            }

            // Render Selectable Items (Centered)
            return (
              <button
                key={`opt-${index}`}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-5 py-3 text-center text-[13px] transition-colors active:bg-sky-100
                  ${value === option.value
                    ? "bg-sky-50 text-sky-700 font-semibold"
                    : option.label.toLowerCase().includes("other")
                      ? "bg-[#E7F6FF] text-slate-700 hover:bg-amber-100" 
                      : "text-slate-700 hover:bg-slate-50"
                  }
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