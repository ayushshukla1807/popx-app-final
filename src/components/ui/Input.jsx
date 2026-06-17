import { forwardRef, useId } from 'react';

export const Input = forwardRef(({ label, error, type = 'text', ...props }, ref) => {
  const id = useId();
  return (
    <div className="relative w-full mb-6">
      <div className={`relative w-full border rounded-lg px-3 py-3 transition-colors focus-within:border-brand ${error ? 'border-red-500' : 'border-[#cbcbcb]'} bg-white`}>
        <input
          id={id}
          ref={ref}
          type={type}
          className="peer w-full bg-transparent text-[#2c2c2c] outline-none text-[15px] placeholder-transparent"
          placeholder={label}
          {...props}
        />
        {/* True floating label exactly as requested */}
        <label 
          htmlFor={id} 
          className={`absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium transition-all peer-placeholder-shown:text-[15px] peer-placeholder-shown:text-[#8c8c8c] peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brand cursor-text pointer-events-none ${error ? 'text-red-500' : 'text-brand'}`}
        >
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
      </div>
      {error && <p className="mt-1 absolute text-xs text-red-500">{error}</p>}
    </div>
  );
});
Input.displayName = 'Input';
