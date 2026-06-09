const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="image-form-container">
            <p>This Magic Brain will detect faces in your pictures. Give it a try.</p>
            <div className="image-form-card">
                <div className="image-form-input-group">
                    <input
                        type="text"
                        placeholder="Paste image URL here..."
                        className="image-form-input"
                        onChange={onInputChange}
                    />
                    <button
                        className="image-form-btn"
                        onClick={onButtonSubmit}
                    >
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;
