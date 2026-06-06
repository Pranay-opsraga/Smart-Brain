import React from 'react';

const FaceRecognition = ({ imageUrl, boxes, onImageLoad }) => {
    return (
        <div className="flex justify-center my-8 px-4">
            {imageUrl && (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-white/10 shadow-2xl">
                    <div className="relative">
                        <img
                            id="inputimage"
                            src={imageUrl}
                            alt="Detect target"
                            onLoad={onImageLoad}
                            crossOrigin="anonymous"
                            className="rounded-lg w-[500px] max-w-full h-auto object-contain shadow-md"
                        />
                        {boxes && boxes.map((box, index) => (
                            <div
                                key={index}
                                className="absolute border-2 border-[#149dfb] flex flex-wrap justify-center cursor-pointer shadow-[0_0_0_3px_#149dfb_inset] z-10"
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
