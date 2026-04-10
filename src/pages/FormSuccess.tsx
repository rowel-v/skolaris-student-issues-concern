import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function FormSuccess() {
    const navigate = useNavigate();
    const location = useLocation();

    // Extract only the digits from the row number (e.g., "15" from "Row 15")
    const rawData = location.state?.ticketNumber || "0";
    const ticketNumber = typeof rawData === 'string' ? rawData.replace(/\D/g, "") : rawData;

    return (
        <div className="min-h-screen bg-[url('tech.jpg')] bg-cover bg-center flex flex-col font-sans">
            <div className="flex justify-center items-center px-4 py-8 flex-1">
                <div className="w-full max-w-lg bg-white/90 backdrop-blur-2xl rounded-md shadow-2xl p-10 text-center animate-in fade-in zoom-in duration-500">

                    {/* Minimalist Success Icon */}
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg shadow-emerald-200">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    {/* <Header /> */}

                    {/* THE "JUST THE NUMBER" BOX */}
                    <div className="mt-10 mb-8">
                        <p className="text-7xl font-black text-sky-900 leading-none tracking-tighter drop-shadow-sm">
                            # {ticketNumber}
                        </p>
                        <div className="h-1.5 w-24 bg-sky-500 mx-auto mt-2 rounded-full"></div>
                    </div>

                    {/* Instruction Description */}
                    <p className="text-slate-600 leading-relaxed text-md px-6">
                        Your concern has been logged. Please
                        <span className="font-bold text-sky-700"> have this number ready </span>
                        to present as you approach the
                        <span className="font-bold text-sky-700"> Data Verifier </span>
                        for seamless assistance.
                    </p>

                    <div className="mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] pt-6 border-t border-slate-100">
                        {/* Tip: Take a screenshot so you don't lose your place in line! */}
                    </div>

                    <button
                        onClick={() => navigate("/entry-form")}
                        className="w-full mt-8 py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition-all shadow-xl active:scale-95"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FormSuccess;