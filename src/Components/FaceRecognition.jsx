import React from 'react';

const FaceRecognition = ({ imageUrl, boxes, onImageLoad }) => {
    return (
        <div className="face-recognition-container">
            {imageUrl && (
                <div className="face-recognition-card">
                    {boxes.length > 0 && (
                        <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>
                            Detected {boxes.length} face{boxes.length === 1 ? '' : 's'}
                        </p>
                    )}
                    <div className="face-recognition-wrapper">
                        <img
                            id="inputimage"
                            src={imageUrl}
                            alt="Detect target"
                            onLoad={onImageLoad}
                            crossOrigin="anonymous"
                            className="face-recognition-img"
                        />
                        {boxes && boxes.map((box, index) => (
                            <div
                                key={index}
                                className="face-box"
                                style={{
                                    top: box.topRow,
                                    right: box.rightCol,
                                    bottom: box.bottomRow,
                                    left: box.leftCol
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FaceRecognition;
