import { AiOutlineBorderOuter } from "react-icons/ai";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="">
      <section class="bg-light_bg">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-error">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-text_primary md:text-4xl">
              Something's missing.
            </p>
            <p class="mb-4 text-lg font-light text-text_secondary">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Link
              to="/"
              replace
              class="inline-flex text-white text-lg bg-primary btn"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
