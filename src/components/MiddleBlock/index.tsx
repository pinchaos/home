type Content = {
  beforeSpan: string;
  span: string;
  afterSpan: string;
};

type Button = {
  text: string;
  src: string;
};

type Middle = {
  id: string;
  title: string;
  content: Content;
  button: Button;
};

function MiddleBlock({ id, title, content, button }: Middle) {
  return (
    <section id={id}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="text-4xl tracking-wide font-bold text-primary mb-10">
            {title}
          </h2>
          <p className="mb-6 font-normal text-gray-700 text-xl">
            {content.beforeSpan}
            <span className="font-bold text-primary">{content.span}</span>
            {content.afterSpan}
          </p>
          <div className="flex justify-center mt-14">
            <a
              target="_blank"
              className="px-10 py-3 shadow shadow-gray-500 bg-primary text-white font-medium text-sm hover:bg-secondary uppercase rounded"
              href={button.src}
            >
              {button.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiddleBlock;
