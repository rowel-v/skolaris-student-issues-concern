interface TextAreaProps {
    placeholder: string;
    onChange: (value: string) => void;
}

function TextArea({placeholder, onChange}: TextAreaProps) {

    return (
        <textarea
            rows={4}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-5 py-4 bg-slate-50/50 border border-slate-400 rounded-2xl 
                   text-slate-700 font-medium transition-all duration-300 ease-in-out
                   
                   /* Matching the high-contrast placeholder style */
                   placeholder:text-gray-500 placeholder:font-semibold
                   
                   /* Focus states for the blue sky glow */
                   focus:outline-none focus:bg-white focus:ring-4 focus:ring-sky-500/10 focus:border-sky-400
                   
                   /* Subtle hover effect */
                   hover:border-slate-300 resize-none"
        />
    )

}

export default TextArea;