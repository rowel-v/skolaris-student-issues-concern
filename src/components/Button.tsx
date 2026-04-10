interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full h-12 py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center 
        ${disabled 
          ? "bg-slate-400 cursor-not-allowed opacity-70" 
          : "bg-[#2563eb] hover:bg-sky-600 active:scale-95 shadow-lg shadow-sky-200"
        }`}
    >
      {/* Circle Loader (only visible when disabled/loading) */}
      {disabled && (
        <svg 
          className="animate-spin h-5 w-5 text-white absolute" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          ></circle>
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {/* Label (hidden when disabled/loading to keep center empty for the loader) */}
      <span className={disabled ? "opacity-0" : "opacity-100"}>
        {label}
      </span>
    </button>
  );
}

export default Button;