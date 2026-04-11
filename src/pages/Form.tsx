import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import InputField from "../components/InputField";
import InputFieldDate from "../components/InputFieldDate";
import TextArea from "../components/TextArea";
// import SelectField from "../components/SelectField";
import { CONCERN_OPTIONS, PROGRAM_OPTIONS, YEARLEVEL_OPTIONS } from "../data/program";
import CustomSelect from "../components/CustomSelect";

// 1. API Mapping - Replace the placeholder URLs with your actual Google Script URLs
const CAMPUS_APIS: Record<string, string> = {
    "Angono": "https://script.google.com/macros/s/AKfycbzOGaJb3abXya7iWDPd1A5rK91dGxZ_JV4JhaqkYrcF4DOas80ulNl7m9MzDr_KBDVtyQ/exec",
    "Antipolo": "https://script.google.com/macros/s/AKfycbwD--3S4OfI8GQg6t2S8Uujcas0B96JB0YNhAoE_6LhTEflVe4EOrxewXj68ofx-QRC/exec",
    "Binangonan": "https://script.google.com/macros/s/AKfycbxgjzzBm8WevuOA-vf9Kz5oTyCSPK9i_JHPsCjEYSMkcUAehznmaa6QZ7dRoGCaFaCq6Q/exec",
    "Cainta": "https://script.google.com/macros/s/AKfycbzJjTuQKgmEvDo5qResiOHgTuU7D-Air9wEjC14hSYmqjgOVZ7amSkPDVECPl0Xr4s/exec",
    "Cogeo": "https://script.google.com/macros/s/AKfycbyjAi7p4CciWqTCw_YalpccRG8HTu1s3RwWpZ_WLU-w1LqWnkmrkHpKf3soFjQScR1kNg/exec",
    "San Mateo": "https://script.google.com/macros/s/AKfycbzOlJzxXbtPHofpKV-MxHEJqMayv9rTZKG_Hp-aDePXBzvDHRg3Q3BboIfo-VlcwK8H/exec",
    "Sumulong": "https://script.google.com/macros/s/AKfycbw3zk89LKJYj7FmJ6C1FHvQ-KyKznz4ez85141Y7UuY1vxZKyGpaU3DwPmToCapKFKnrw/exec",
    "Taytay": "https://script.google.com/macros/s/AKfycbyVsnWCWqDHM2dpuOdOknV7hDxjNSaA7KTul6QUNUXR4zSR-tYtvo53aEdFfDCeFGv3/exec",
};

function Form() {
    const [campus, setCampus] = useState<string>("");
    const [studentIdNumber, setStudentIdNumber] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
    const [middlename, setMiddlename] = useState<string>("");
    const [birthdate, setBirthdate] = useState<string>("");
    const [program, setProgram] = useState<string>("");
    const [yearlevel, setYearlevel] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [concern, setConcern] = useState<string>("");
    const [otherConcern, setOtherConcern] = useState<string>("");

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    // Dynamically get campus list from our API keys
    const CAMPUSES = Object.keys(CAMPUS_APIS);

    const handleSubmit = async () => {
        // Validation - ensure all required fields are filled
        if (!campus || !studentIdNumber || !surname || !firstname || !email || !program || !concern) {
            alert("Please fill in all required fields.");
            return;
        }

        setIsLoading(true);

        // Select the specific API based on chosen campus
        const targetApi = CAMPUS_APIS[campus];

        const formData = {
            campus,
            studentIdNumber,
            surname,
            firstname,
            middlename,
            birthdate,
            program,
            yearlevel,
            email,
            concern: concern === "Other concern (Click here)" ? otherConcern : concern
        };

        try {
            const response = await fetch(targetApi, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(formData),
            });

            const rowNumber = await response.text();
            navigate("/submitted", { state: { ticketNumber: rowNumber } });
        } catch (error) {
            console.error(error);
            alert("Submission failed. Please check your internet connection.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[url('tech.jpg')] bg-cover bg-center bg-no-repeat flex flex-col font-sans">
            {/* Optimized outer padding for mobile view */}
            <div className="flex justify-center items-center px-2 py-6 sm:px-4 sm:py-12">

                {/* Form container: row-by-row layout maintained */}
                <div className="w-full max-w-lg bg-white/90 backdrop-blur-2xl rounded-md shadow-2xl border border-white p-6 sm:p-10">

                    {/* Logo Section */}
                    <div className="mb-6 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                                <img
                                    src="skolaris-logo.png"
                                    alt="Skolaris Logo"
                                    className="w-full h-full object-contain mix-blend-multiply brightness-110 contrast-104 scale-110"
                                />
                            </div>
                        </div>
                        <Header />
                    </div>

                    <div className="flex flex-col gap-5">

                        {/* CAMPUS SELECTION */}
                        <div className="p-2 bg-slate-50/50 border border-slate-300 rounded-xl transition-all">
                            <p className="text-[12px] uppercase font-bold text-gray-400 pb-1 mb-2 tracking-widest text-center">Select Campus</p>
                            <div className="grid grid-cols-4 gap-1">
                                {CAMPUSES.map((loc) => (
                                    <label key={loc} className={`flex flex-col items-center justify-center p-1.5 rounded-lg border cursor-pointer transition-all active:scale-95 ${campus === loc ? "bg-sky-50 border-sky-400 shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"}`}>
                                        <input type="radio" name="campus" value={loc} checked={campus === loc} onChange={(e) => setCampus(e.target.value)} className="hidden" />
                                        <div className={`w-3 h-3 mb-1 rounded-full border flex items-center justify-center ${campus === loc ? "border-sky-500" : "border-slate-300"}`}>
                                            {campus === loc && <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full"></div>}
                                        </div>
                                        <span className={`text-[10px] sm:text-[13px] leading-tight text-center ${campus === loc ? "text-sky-700 font-bold" : "text-slate-500"}`}>
                                            {loc}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* INPUT FIELDS: Row by Row Layout */}
                        <div className="flex flex-col gap-4">
                            <InputField placeholder="Student ID Number" type="text" onChange={(x) => setStudentIdNumber(x.toUpperCase())} />
                            <InputField placeholder="Surname" type="text" onChange={(x) => setSurname(x.toUpperCase())} />
                            <InputField placeholder="Firstname" type="text" onChange={(x) => setFirstname(x.toUpperCase())} />
                            <InputField placeholder="Middlename" type="text" onChange={(x) => setMiddlename(x.toUpperCase())} />

                            {/* Date Field Row */}
                            <InputFieldDate onChange={(date) => setBirthdate(date)} />

                            {/* <SelectField placeholder="Select Program" value={program} options={PROGRAM_OPTIONS} onChange={setProgram} />
                            <SelectField placeholder="Year Level" value={yearlevel} options={YEARLEVEL_OPTIONS} onChange={setYearlevel} /> */}

                              <CustomSelect
                                placeholder="Select Program"
                                value={program}
                                options={PROGRAM_OPTIONS}
                                onChange={setProgram}
                            />

                            <CustomSelect
                                placeholder="Year Level"
                                value={yearlevel}
                                options={YEARLEVEL_OPTIONS}
                                onChange={setYearlevel}
                            />
                            
                            {/* Email Field with normal case forced */}
                            <InputField placeholder="Email Address" textCase="normal-case" type="email" onChange={(x) => setEmail(x)} />

                            {/* <SelectField placeholder="Select your Concern" value={concern} options={CONCERN_OPTIONS} onChange={setConcern} /> */}

                            <CustomSelect
                                placeholder="Select your Concern"
                                value={concern}
                                options={CONCERN_OPTIONS}
                                onChange={setConcern}
                            />
                            {concern === "Other concern (Click here)" && (
                                <div className="w-full animate-in fade-in slide-in-from-top-1">
                                    <TextArea onChange={(x) => setOtherConcern(x)} placeholder="Please specify your concern..." />
                                </div>
                            )}
                        </div>

                        <Button
                            label={isLoading ? "Submitting..." : "Submit"}
                            onClick={handleSubmit}
                            disabled={isLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;