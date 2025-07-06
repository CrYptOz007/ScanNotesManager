import type { UseFormRegister, FieldErrors, Path } from "react-hook-form";

export interface FormTextInputProps<T extends Record<string, any>> {
    label: string;
    name: Path<T>;
    rows?: number;
    placeholder?: string;
    type?: string;
    required?: boolean;
    disabled?: boolean;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
}

export const FormTextInput = <T extends Record<string, any>>({
    label,
    name,
    placeholder,
    rows = 4,
    type = "text",
    required = false,
    disabled = false,
    register,
    errors,
}: FormTextInputProps<T>) => {
    return (
        <div className="form-group flex flex-col gap-1">
            <label htmlFor={name} className="form-label">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={name}
                    placeholder={placeholder}
                    rows={rows}
                    {...register(name, { required: required ? 'This field is required' : false })}
                    disabled={disabled}
                    className={`border border-gray-300 rounded-md p-1 form-input ${errors[name] ? 'border-red-500' : ''}`}
                />
            ) : (
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    {...register(name, { required: required ? 'This field is required' : false })}
                    disabled={disabled}
                    className={`border border-gray-300 rounded-md p-1 form-input ${errors[name] ? 'border-red-500' : ''}`}
                />
            )}
            {errors[name] && (
                <span className="text-red-500 text-sm">
                    {String(errors[name]?.message) || 'This field is required'}
                </span>
            )}
        </div>
    );
}