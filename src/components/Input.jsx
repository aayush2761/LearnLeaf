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
        ref={ref}  // gives the reference to the parent component 
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-slate-50 duration-200 border border-slate-200 w-full ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
}

export default React.forwardRef(Input);





// why we are using forward ref hook 
// suppose we are taking input in seperate component and using that input in some other component for example in forms 
// now the problem is the state is in differnet component and it is required in different component
//  to give the access to the state of the input field or any state to another state we use forward ref 

// if we have redux then why to use forward ref 
// 

//  redux provide the data that is being stored in the global store 

// forward ref -> Sometimes you want a parent component to control or interact with a child’s input, div, button, etc.

// Normally, refs don’t pass through props. forwardRef allows you to "forward" a ref so the parent can still grab the child’s DOM node.
