import React, { useState } from 'react';
import { InputFieldProps } from './InputField.types';
import classNames from 'classnames';

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  showClearButton,
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => setInputValue('');

  const inputClass = classNames(
    'border rounded px-3 py-2 focus:outline-none w-full',
    {
      'border-gray-300': variant === 'outlined',
      'bg-gray-100': variant === 'filled',
      'bg-transparent border-none': variant === 'ghost',
      'border-red-500': invalid,
      'opacity-50 cursor-not-allowed': disabled,
      'text-sm': size === 'sm',
      'text-base': size === 'md',
      'text-lg': size === 'lg',
    }
  );

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}
      <div className="relative">
        <input
          className={inputClass}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
        />
        {showClearButton && inputValue && !disabled && (
          <button
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            ✕
          </button>
        )}
      </div>
      {helperText && !invalid && <p className="text-gray-500 text-sm">{helperText}</p>}
      {invalid && errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
};
