import './ImageLinkForm.css'
const ImageLinkForm = () => {
    return (
        <div className="flex flex-col items-center mt-8 px-4">
            <p className="text-xl md:text-2xl mb-6 text-center">
                This Magic Brain will detect faces in your pictures. Give it a try.
            </p>
            <div className="rounded-lg p-4 md:p-6 pattern w-full max-w-xl">
                <div className="flex items-center bg-white rounded-lg shadow-xl overflow-hidden">
                    <input
                        type="text"
                        placeholder="Paste image URL here..."
                        className="text-base md:text-lg px-3 md:px-4 py-3 flex-1 outline-none min-w-0"
                    />
                    <button className="text-base md:text-lg px-4 md:px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold transition-colors duration-200 whitespace-nowrap">
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;

