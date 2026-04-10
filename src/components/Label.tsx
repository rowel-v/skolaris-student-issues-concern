interface LabelProps {
    labelName: string;
}

function Label({ labelName }: LabelProps) {
    return (
        <label className="block text-[16px] font-semibold text-gray-800 mb-2 ml-1 tracking-tight">
            {labelName}
        </label>
    );
}

export default Label;