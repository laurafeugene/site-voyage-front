function Slider() {
    return(
        <div className="flex justify-center">
                <div className="carousel max-h-80 h-auto m-8 mx-60 ">

                <div id="slide1" className="carousel-item relative w-full">
                <img src="../src/assets/eva-darron-oCdVtGFeDC0-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                </div> 

                <div id="slide2" className="carousel-item relative w-full">
                <img src="../src/assets/francesco-ungaro-JA-SFjT1FS0-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                </div> 

                <div id="slide3" className="carousel-item relative w-full">
                <img src="../src/assets/marek-piwnicki-jFukTjphXbI-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                </div> 

                <div id="slide4" className="carousel-item relative w-full">
                <img src="../src/assets/zetong-li-AEYbdyOH2cU-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                </div>
            </div>

        </div>
    );
}

export default Slider;
  