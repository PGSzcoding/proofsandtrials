export default function BgWaves(){
    return (
        <>
            {/* Fondo degradado */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.30),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.20),transparent_30%)]" />

            {/* Ondas animadas */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-25">
                <svg
                className="bg-waves h-full w-[140%]"
                viewBox="0 0 1200 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M0 160 C 250 60, 450 260, 700 160 S 1000 60, 1200 160"
                    stroke="rgba(14,165,233,0.7)"
                    strokeWidth="2"
                />
                <path
                    d="M0 210 C 250 110, 450 310, 700 210 S 1000 110, 1200 210"
                    stroke="rgba(14,165,233,0.5)"
                    strokeWidth="1.5"
                />
                <path
                    d="M0 260 C 250 160, 450 360, 700 260 S 1000 160, 1200 260"
                    stroke="rgba(14,165,233,0.35)"
                    strokeWidth="1"
                />
                <path
                    d="M0 310 C 250 210, 450 410, 700 310 S 1000 210, 1200 310"
                    stroke="rgba(14,165,233,0.25)"
                    strokeWidth="1"
                />
                </svg>
            </div>
        </>
    )
}