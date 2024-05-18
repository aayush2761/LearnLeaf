import React, { useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-slate-50 duration-200 border border-slate-200 w-full ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
}

export default React.forwardRef(Input);
