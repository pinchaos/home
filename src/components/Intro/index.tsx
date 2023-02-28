type Button = {
  title: string;
  src: string;
};

type Intro = {
  id: string;
  title: string;
  content: string;
  image: string;
  buttons: {
    button1: Button;
    button2: Button;
  };
};

export default function Intro({ id, title, content, image, buttons }: Intro) {
  return (
    <>
      <main id={id}>
        <div className="px-6 lg:px-8">
          <section className="mb-40">
            <div className="px-6 py-4 lg:py-12 md:px-12 text-gray-800 text-center lg:text-left">
              <div className="container mx-auto xl:px-32">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="mt-12 lg:mt-0 lg:basis-1/2">
                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-10 text-primary">
                      {title}
                    </h1>

                    <p className="w-11/12 font-normal text-xl text-black mb-10">
                      {content}
                    </p>

                    <div className="flex justify-center lg:justify-start gap-14">
                      <a
                        className="px-7 py-3 shadow shadow-gray-500 bg-primary text-white font-medium text-sm hover:bg-secondary uppercase rounded"
                        href={buttons.button1.src}
                      >
                        {buttons.button1.title}
                      </a>
                      <a
                        target="_blank"
                        href={buttons.button2.src}
                        className="px-7 py-3 shadow shadow-gray-500 border-solid border-2 border-primary bg-white text-primary font-medium text-sm hover:text-white hover:bg-secondary hover:border-secondary uppercase rounded"
                      >
                        {buttons.button2.title}
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center mb-12 lg:basis-1/2 lg:mb-0">
                    <img
                      src={image}
                      className="sm:w-8/12 md:w-7/12 lg:w-11/12"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#49403b" />
                  <stop offset={1} stopColor="#a54815" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}
