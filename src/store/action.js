export const Add=()=>({type:"increment"});
export const Sub=()=>({type:"decrement"});
export const Addition=(value)=>({type:"add",payload:value});
export const Subtraction=(value)=>({type:"sub",payload:value});
export const Mul=(value)=>({type:"mul",payload:value});
export const Div=(value)=>({type:"div",payload:value});