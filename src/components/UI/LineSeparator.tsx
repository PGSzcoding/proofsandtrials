export default function LineSeparator({className = '',width="16",height="1"}){
    return (
        <div className={` rounded-full h-${height} w-${width} ${className}`} />
    )
}