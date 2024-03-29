function Hero() {
    const home = () => {
        window.location = '/home'
    }

    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/03/27/20/00/coffee-1284041_1280.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button onClick={home} className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
  )
}

export default Hero
