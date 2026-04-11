export interface Option {
  value: string;
  label: string;
}

export interface GroupedOption {
  label: string;
  options: Option[];
}

// 1. ADD THIS INTERFACE
export interface CustomSelectOption {
  value: string;
  label: string;
  isHeader?: boolean; // New flag
}

export const PROGRAM_OPTIONS = [
    { value: "ABA", label: "ABA - Associate in Business Administration" },
    { value: "ABCOMM", label: "ABCOMM - Bachelor of Arts in Communication" },
    { value: "AB_ENGLISH", label: "AB ENGLISH - Bachelor of Arts in English" },
    { value: "ACT", label: "ACT - Associate in Computer Technology" },
    { value: "BECEd", label: "BECEd - Bachelor in Early Childhood Education" },
    { value: "BElemEd", label: "BElemEd - Bachelor of Elementary Education" },
    { value: "BPA", label: "BPA - Bachelor of Sciences in Public Administration" },
    { value: "BSA", label: "BSA - Bachelor of Science in Accountancy" },
    { value: "BSAIS", label: "BSAIS - Bachelor of Science in Accounting Information System" },
    { value: "BSBA_BUS.ECO", label: "BSBA BUS.ECO - B.S. Business Economics" },
    { value: "BSBA_FINAMGMT", label: "BSBA FINAMGMT - Financial Management" },
    { value: "BSBA_HRMGMT", label: "BSBA HRMGMT - Human Resource Management" },
    { value: "BSBA_MKTGMGMT", label: "BSBA MKTGMGMT - Marketing Management" },
    { value: "BSBA_OPMGMT", label: "BSBA OPMGMT - Operations Management" },
    { value: "BSC", label: "BSC - Bachelor of Sciences in Criminology" },
    { value: "BSCOE", label: "BSCOE - Bachelor of Science in Computer Engineering" },
    { value: "BSCS", label: "BSCS - Bachelor of Science in Computer Science" },
    { value: "BSED_ENGLISH", label: "BSED ENGLISH - Bachelor in Secondary Education" },
    { value: "BSED_FILIPINO", label: "BSED FILIPINO - Bachelor in Secondary Education" },
    { value: "BSED_MATH", label: "BSED MATH - Bachelor in Secondary Education" },
    { value: "BSED_SCIENCE", label: "BSED SCIENCE - Bachelor in Secondary Education" },
    { value: "BSELE", label: "BSELE - Bachelor of Science in Electronics Engineering" },
    { value: "BSHM", label: "BSHM - Bachelor of Science in Hospitality Management" },
    { value: "BSIA", label: "BSIA - Bachelor of Science in Internal Auditing" },
    { value: "BSIS", label: "BSIS - Bachelor of Science in Information System" },
    { value: "BSISM", label: "BSISM - Bachelor of Science in Industrial Security Management" },
    { value: "BSIT", label: "BSIT - Bachelor of Science in Information Technology" },
    { value: "BSLM-GBM", label: "BSLM-GBM - Legal Management (General Business)" },
    { value: "BSLM-LAW", label: "BSLM-LAW - Legal Management (Law)" },
    { value: "BSM", label: "BSM - Bachelor of Science in Mathematics" },
    { value: "BSMA", label: "BSMA - Bachelor of Science in Management Accounting" },
    { value: "BSP", label: "BSP - Bachelor of Sciences in Psychology" },
    { value: "BSREM", label: "BSREM - Bachelor of Science in Real Estate Management" },
    { value: "BSTM", label: "BSTM - Bachelor of Science in Tourism Management" },
    { value: "BTVTEd", label: "BTVTEd - Bachelor in Tech. Voc. Teacher Education" },
    { value: "DHRM1", label: "DHRM 1 - Diploma in Hotel & Restaurant Management" },
    { value: "DHRM2", label: "DHRM 2 - Diploma in Hotel & Restaurant Management" },
    { value: "DHWA", label: "DHWA - Diploma in Health & Wellness Associate" },

    // ADD THIS SEPARATOR OBJECT HERE
     { value: "other", label: "", isHeader: true },

    { value: "BSMedTech", label: "BSMedTech - Bachelor of Sciences in Medical Technology" },
    { value: "BSN", label: "BSN - Bachelor of Science in Nursing" },
    { value: "BSRT", label: "BSRT - Bachelor of Science in Radiologic Technology" },
];

// 2. UPDATE CONCERN_OPTIONS TO USE HEADERS
export const CONCERN_OPTIONS: CustomSelectOption[] = [
  { value: "h_account", label: "ACCOUNT & ACCESS", isHeader: true },
  { value: "Account deactivated", label: "Account deactivated" },
  { value: "New Student account error", label: "Existing Student created New Student account" },
  { value: "No record found", label: "Existing Student no record found" },
  { value: "Forgot password", label: "Forgot password" },

  { value: "h_registration", label: "REGISTRATION & ENROLLMENT", isHeader: true },
  { value: "Adding/Dropping course", label: "Adding/Dropping course" },
  { value: "Cannot enroll course (Prerequisite not met)", label: "Cannot enroll course (Prerequisite not met)" },
  { value: "Change of section request", label: "Change of section request" },
  { value: "Class schedule conflict (Adding course)", label: "Class schedule conflict (Adding course)" },
  { value: "No course offerings for program", label: "No course offerings for program" },

  { value: "h_records", label: "RECORDS & PROFILE", isHeader: true },
  { value: "Enrolled courses missing in ORF", label: "Enrolled courses missing in ORF" },
  { value: "Grade verification", label: "Grade verification" },
  { value: "Profile information correction", label: "Profile information correction" },
  { value: "Wrong campus selected", label: "Wrong campus selected" },

  { value: "h_payment", label: "PAYMENT / FINANCE", isHeader: true },
  { value: "Payment not reflected", label: "Payment not reflected" },

  { value: "h_misc", label: "", isHeader: true },
  { value: "Other concern (Click here)", label: "Other concern (Click here)" },
];

export const YEARLEVEL_OPTIONS: Option[] = [
  { value: "1", label: "1st Year" },
  { value: "2", label: "2nd Year" },
  { value: "3", label: "3rd Year" },
  { value: "4", label: "4th Year" },
];