function Clips(){
    return(
        <>
            <video width="100%" autoplay="" loop="" playsinline="" poster="https://cdn.arc.dev/images/client-landing/client-landing-video-1.png" className="rounded-lg">
                <source src="https://assets.arc.dev/videos/client-landing-video-1.webm" type="video/webm; codecs=&quot;vp8, vorbis&quot;" />
                <source src="https://assets.arc.dev/videos/client-landing-video-1.mp4" type="video/mp4" />
            </video>
        </>
    )
}
export default Clips;