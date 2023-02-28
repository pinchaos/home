type Content = {
  beforeSpan: string;
  span: string;
  afterSpan: string;
};

type Section = {
  id: string;
  direction: string;
  title: string;
  content: Content;
  img: string;
};

function SectionBlock({ id, direction, title, content, img }: Section) {
  return (
    <>
      <main id={id} className="mt-24">
        <div className="px-6 lg:px-8">
          <section className="mb-40">
            <div className="px-6 py-4 lg:py-12 md:px-12 text-gray-800 text-center lg:text-left">
              <div className="container mx-auto xl:px-32">
                <div
                  className={
                    direction === "left"
                      ? "flex flex-col gap-12 items-center lg:flex-row"
                      : "flex flex-col gap-12 items-center lg:flex-row-reverse"
                  }
                >
                  <div className="flex justify-center mb-12 lg:flex-1 lg:mb-0">
                    <img
                      src={img}
                      className="sm:w-8/12 md:w-7/12 lg:w-11/12"
                      alt=""
                    />
                  </div>
                  <div className="lg:flex-1">
                    <h1 className="text-3xl md:text-5xl xl:text-5xl font-bold mb-10 text-primary">
                      {title}
                    </h1>

                    <p className="font-normal text-xl text-black mb-10">
                      {content.beforeSpan}
                      <span className="text-primary font-bold">
                        {content.span}
                      </span>
                      {content.afterSpan}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default SectionBlock;
