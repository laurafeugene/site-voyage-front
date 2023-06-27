function Reviews() {
  return (
    <div className="m-4">
      <section className="px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-6 text-3xl font-bold pt-4">
            Ce que nos utilisateurs pensent de nous
          </h3>
          <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300 md:mb-12">
            Petit aperçu de ce que nos clients pensent de nous. Nous sommes
            fiers de vous présenter les avis de nos utilisateurs.
          </p>
        </div>

        <div className="grid gap-12 text-center md:grid-cols-2 my-6">
          {/* <!--First Testimonial--> */}
          <div className="mb-6 md:mb-0 p-4 m-3 bg-lightest rounded-md">
            <div className="mb-6 flex justify-center">
              <img
                src="/chat.png"
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt=""
              />
            </div>
            <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
              "Avec cette application, j'ai pu suivre mes propriétaires à la
              trace et leur réclamer des croquettes à toute heure du jour et de
              la nuit !."
            </p>
            <p className="italic">- Anna Morian</p>
          </div>

          {/* <!--Second Testimonial--> */}
          <div className="mb-0 p-4 m-3 bg-lightest rounded-md">
            <div className="mb-6 flex justify-center">
              <img
                src="/selfie.png"
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                alt=""
              />
            </div>
            <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
              "Peu importe le pays, cette application m'a permis de prendre des
              vacances avec mes amis en organisant tous ensembre nos sortis."
            </p>
            <p className="italic">- Teresa May</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
