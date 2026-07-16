const base =
  " items-center justify-center rounded-full  transition duration-300 cursor-pointer shadow";

export const buttonStyles = {
  btn: `${base}`,
  white: `${base} bg-white text-slate-900 hover:bg-sky-400 hover:text-white`,
  primary: `${base} bg-sky-400 text-white hover:bg-sky-500 shadow-sky-400/30 text-white disabled:cursor-not-allowed disabled:opacity-50`,
  outline: `${base} border border-white text-white hover:bg-white hover:text-slate-900`,
};