const base =
  " items-center justify-center rounded-full  transition duration-300 cursor-pointer shadow";

export const buttonStyles = {
  btn: `${base}`,
  white: `${base} bg-white text-slate-900 hover:bg-[#0651DC] hover:text-white`,
  primary: `${base} bg-[#0651DC] text-white hover:bg-[#042F99] shadow-sky-400/30 text-white disabled:cursor-not-allowed disabled:opacity-50`,
  outline: `${base} border border-white text-white hover:bg-white hover:text-slate-900`,
};