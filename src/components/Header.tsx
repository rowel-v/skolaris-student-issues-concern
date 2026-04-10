function Header() {
    return (
        <header className="w-full flex flex-col items-center justify-center pb-1">
            {/* Sleek Blue Decorative Bar */}
            {/* <div className="w-12 h-1 bg-blue-600 rounded-full mb-3" /> */}

            {/* Main Title - Font styling updated to match image */}
             <p className="text-[35px] font-bold tracking-wide leading-none text-[#2563eb] font-sans">
                Issues  / Concerns
            </p> 
            
            {/* Subtitle */}
            {/* <p className="text-[12px] font-bold text-gray-700 uppercase tracking-[0.4em] pt-1">
                Entry Form
            </p> */}
        </header>
    );
}

export default Header;