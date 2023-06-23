function Photos() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="carousel max-w-xl my-2">
        <div id="item1" className="carousel-item w-full">
          <img
            src="src/assets/butterfly-g87b0c801f_1280.jpg"
            alt="Photo 1"
            className="w-full object-contain"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="src/assets/butterfly-g87b0c801f_1280.jpg"
            alt="Photo 2"
            className="w-full object-contain"
          />
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2 m-2">
        <a
          href="#item1"
          className="btn btn-xs bg-darkest text-lightest font-semibold hover:bg-lightest hover:text-darkest"
        >
          1
        </a>
        <a
          href="#item2"
          className="btn btn-xs bg-darkest text-lightest font-semibold hover:bg-lightest hover:text-darkest"
        >
          2
        </a>
      </div>

      <div className="form-control w-full max-w-xs m-2">
        <input
          type="file"
          className="file-input file-input-bordered file-input-darkest file-input-sm w-full max-w-xs"
        />
      </div>
    </div>
  );
}
