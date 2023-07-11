function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-zodiac-950 to-blue-zodiac-300">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-bittersweet sm:block">
              Increase Conversion.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-bittersweet px-12 py-3 text-sm font-medium text-white shadow hover:bg-bittersweet-600 focus:outline-none focus:ring active:bg-bittersweet-500 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-bittersweet shadow hover:text-bittersweet-500 focus:outline-none focus:ring active:text-bittersweet-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
