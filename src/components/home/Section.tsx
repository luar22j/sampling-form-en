import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section className="flex flex-col gap-5 my-5 lg:mt-[100px]">
      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h1 className="title text-2xl lg:text-3xl text-[#F04D79]">
          Discover the new Body Milk by Sampling Innovations
        </h1>
        <p>
          The innovative body lotion that deeply penetrates the skin's surface:
        </p>
        <ul className="list-inside pl-1 space-y-5">
          <li>
            💧 Provides up to 48h of hydration thanks to its fresh and light
            texture, while nourishing and illuminating the skin.
          </li>
          <li>
            🍊 Formulated with Vitamin C, the most powerful antioxidant
            ingredient.
          </li>
          <li>🌱 Vegan product with 98% natural ingredients.</li>
        </ul>
        <p>
          Enjoy the fruity embrace with this TOUS Electro Touch perfume with
          100ml spray.
        </p>
      </article>

      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h2 className="title text-2xl lg:text-3xl text-[#F04D79]">
          Win a free product bundle!
        </h2>
        <p>
          Answer a brief survey about your experience with the product to enter
          the draw for a Sampling Innovations product bundle.
        </p>
        <Link
          className="title-bold active-button w-full sm:w-auto bg-[#F04D79] rounded-md flex items-center shadow hover:shadow-md justify-center text-white font-semibold uppercase py-3 px-10 transition-shadow"
          to="/form"
        >
          I want to participate
        </Link>
      </article>
    </section>
  );
};

export default Section;
