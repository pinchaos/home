type Item = {
  title: string;
  subtitle: string;
};

type Stats = {
  id: string;
  title: string;
  items: {
    item1: Item;
    item2: Item;
    item3: Item;
  };
};

export default function Stats({ id, title, items }: Stats) {
  return (
    <div className="pb-28">
      <h1 className="text-center text-4xl text-primary underline decoration-2 decoration-secondary decoration-wavy">
        {title}
      </h1>
      <div className="mt-16 mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-lg leading-7 text-gray-600">
              {items.item1.subtitle}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
              {items.item1.title}
            </dd>
          </div>

          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-lg leading-7 text-gray-600">
              {items.item2.subtitle}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
              {items.item2.title}
            </dd>
          </div>

          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-lg leading-7 text-gray-600">
              {items.item3.subtitle}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
              {items.item3.title}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
