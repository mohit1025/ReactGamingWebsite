import React, { useRef, useState } from 'react'


function Hero() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(false);

    const totalVideos = 3;
    const nextVideoRef = useRef(null);
    const getVideoSrc = (index) => `/videos/hero-${index}.mp4`

    const handleVideoLoad = ()=>{
        setLoadedVideos((previous)=> previous+1)
    }

    const handleMinVdClick = () => {
        setHasClicked(true)
        setCurrentIndex((previous) => previous + 1)

    }
    const upcommingVideoIndex = (currentIndex % totalVideos)+1;
    return (
        <div className='relative h-dvh w-screen overflow-x-hidden bg-black'>
            <div id="video-frame" className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMinVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                        <video src="/videos/hero-1.mp4" controls autoPlay loop muted></video>
                            <video ref={nextVideoRef} src={getVideoSrc(currentIndex + 1)} loop muted id="current-video" className='size-64 origin-center scale-150 object-cover object-center' onLoadedData={handleVideoLoad}></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero