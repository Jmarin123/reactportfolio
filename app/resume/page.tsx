export default function resume() {
    return (
    <div className="w-full h-full">
        <iframe
        src="/Resume.pdf"
        className="w-full h-full top-0 left-0 right-0 bottom-0 absolute z-50"
        loading="lazy"
        title="PDF-file"
        />
    </div>
    )
}
