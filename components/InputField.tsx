interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    multiline?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange, multiline }) => {
    return (
        <div className="w-full">
            <p>{label}</p>
            {multiline ? (
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="input-field h-24 resize-y"
                    style={{ minHeight: "80px", maxHeight: "200px" }}
                />
            ) : (
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="input-field"
                />
            )}
        </div>
    );
};

export default InputField;
