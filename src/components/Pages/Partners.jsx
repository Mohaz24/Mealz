import { useState } from "react";
import { useHistory } from "react-router-use-history";
import { Link } from "react-router-dom";
import westpac from "../../assets/westpac.jpg";
import anz from "../../assets/anz.jpg";
import common from "../../assets/common.jpg";
import Nab from "../../assets/Nab.webp";
import Footer from "../Footer";

function Partners() {
  const [app, setApp] = useState({});

  const history = useHistory();

  function submit(e) {
    e.preventDefault();

    if (e.target.value === undefined) {
      return app;
    }

    setApp(null);
    document.getElementById("form").reset();

    history.replace("/partners");
  }

  return (
    <div className="custom-class-partners custom-scroll-y">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center">
        <header className="custom-bg-parnter custom-height-lg-partners w-full md:w-10/12 lg:w-6/12"></header>
        <div className="w-10/12 ">
          <h1 className="text-2xl text-center mt-3 pb-5 lg:mr-3 lg:text-4xl">
            {" "}
            How to become a our <span className="titles">Partner</span>
          </h1>
          <p
            className="mt-5 text-lg pl-3 font-small font-sans md:text-md md:w-11/12 md:mx-auto leading-9
        lg:w-8/12  lg:mx-auto lg:text-md"
          >
            We want to refer and endorse selected partners to our clients so our
            customers achieve their goals, with the comfort that we will support
            them as and when they need it.
          </p>
          <p
            className="mt-5 text-lg  pl-3 font-small  font-sans md:text-md md:w-11/12 md:mx-auto leading-9
        lg:w-8/12 lg:mx-auto lg:text-md"
          >
            {" "}
            Let us know about your business and how you believe a partnership
            with us would be beneficial. We'll review your proposal and discuss
            the possibilities further. We're excited to explore the potential of
            working together!
          </p>
        </div>
      </div>

      <main>
        <div className="mt-10 mb-20 text-center">
          <h1 className="titles text-xl lg:text-4xl">Our partners</h1>
          <p className="mt-3 w-10/12 mx-auto text-lg font-small leading-9 lg:w-6/12">
            In order to become our partner, you can start by reaching out to us
            through our website or contacting our partnership team directly.
          </p>
        </div>
        <section className="grid grid-col-1 gap-5 lg:place-items-center lg:grid-cols-2 ">
          <div className="w-full h-full lg:w-4/5 ">
            <img src={westpac} alt="westpac" className="w-full" />
            <div className="shawdow-lg p-4 flex flex-col items-start gap-5">
              <h2 className="text-2xl titles tracking-normal font-bold not-italic leading-normal">
                Westpac
              </h2>
              <p className="text-lg   font-small leading-9  not-italic">
                Westpac is Australia's oldest bank and company, one of four
                major banking organisations in Australia and one of the largest
                banks in New Zealand.
              </p>
              <Link
                to="https://www.westpac.com.au/about-westpac/"
                className="bg-red-600  py-2 px-4  uppercase text-white custom-font mt-3"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="h-full w-full lg:w-4/5 ">
            <img src={anz} alt="anz" className="w-full" />
            <div className="p-4 flex flex-col items-start gap-5 ">
              <h2 className="text-2xl titles tracking-normal font-bold not-italic leading-normal">
                ANZ
              </h2>
              <p className="text-lg font-small leading-9  not-italic">
                We provide banking and financial products and services to over
                8.5 million retail and business customers, and operate across
                close to 30 markets.
              </p>
              <Link
                to="https://www.anz.com.au/about-us/"
                className="bg-red-600  py-2 px-4  uppercase text-white custom-font mt-3"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="h-full w-full lg:w-4/5 ">
            <img src={common} alt="common" className="w-full" />
            <div className="shawdow-lg p-4 flex flex-col items-start gap-5">
              <h2 className="text-2xl titles tracking-normal font-bold not-italic leading-normal">
                Common Wealth{" "}
              </h2>
              <p className="text-lg font-small leading-9  not-italic ">
                We're Australia's leading provider of integrated financial
                services, including retail, premium, business and institutional
                banking, superannuation, insurance and share-broking products
                and services.
              </p>
              <Link
                to="https://www.commbank.com.au/about-us.html"
                className="bg-red-600  py-2 px-4  uppercase text-white custom-font mt-3"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="h-full w-full lg:w-4/5 ">
            <img src={Nab} alt="nab" className="w-full" />
            <div className="shawdow-lg p-4 flex flex-col items-start gap-5">
              <h2 className="text-2xl titles tracking-normal font-bold not-italic leading-normal">
                NAB
              </h2>
              <p className="text-lg font-small leading-9   not-italic ">
                National Australia Bank Ltd (NAB) is a provider of personal,
                business, and private banking services. It serves individuals,
                MSMEs, and large corporates.{" "}
              </p>
              <Link
                to="https://www.nab.com.au/about-us"
                className="bg-red-600  py-2 px-4  uppercase text-white custom-font mt-3"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="relative bg-gray-900">
            <div className="absolute inset-x-0 bottom-0">
              <svg
                viewBox="0 0 224 12"
                fill="currentColor"
                className="w-full -mb-1 text-white"
                preserveAspectRatio="none"
              >
                <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
              </svg>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Subscribe to our newsletter
                </h2>
                <p className="mb-6 text-base text-gray-200 md:text-lg">
                  Welcome to our newsletter! We are thrilled to bring you the
                  latest news and updates on all things Mealz. Whether you're a
                  proud customers or just a fan of the food, we have something
                  for everyone.
                </p>
                <form
                  id="form"
                  className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16"
                >
                  <input
                    placeholder="Email"
                    onChange={(e) => setApp(e.target.value)}
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 
                    border-transparent rounded appearance-none md:mr-2 md:mb-0 
                     focus:outline-none focus:shadow-outline focus:text-black"
                  />
                  <button
                    onClick={(e) => submit(e)}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold 
                    tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto 
                    hover:text-deep-purple-900 bg-red-700 hover:bg-white hover:text-black focus:shadow-outline
                   focus:outline-none"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="max-w-md mb-10 text-xs tracking-wide  text-gray-200 sm:text-sm sm:mx-auto md:mb-16">
                  Keep pace with us advancements! Join our mailing list for
                  selective, noteworthy updates.
                </p>
                <Link
                  to="/"
                  aria-label="Scroll down"
                  className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-8">
        <Footer />
      </footer>
    </div>
  );
}

export default Partners;
