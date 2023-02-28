import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./style.css";

type HeaderItem = {
  title: string;
  src: string;
};

type HeaderSection = {
  desktop: {
    item1: HeaderItem;
    item2: HeaderItem;
    item3: HeaderItem;
  };
  mobile: {
    title: string;
    item1: HeaderItem;
    item2: HeaderItem;
  };
};

type Header = {
  id: string;
  logoSrc: string;
  header: HeaderSection;
};

export default function Header({ id, logoSrc, header }: Header) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openUrl = (url: string) => {
    window.open(url);
  };

  return (
    <header id={id} className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-14">
        <div className="flex flex-1">
          <a href={"#" + id} className="-m-1.5 p-1.5">
            <img className="h-14 w-auto" src={logoSrc} alt="logo company" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-52">
          <a
            target="_blank"
            href={header.desktop.item1.src}
            className="font-semibold leading-6 text-primary text-xl hover:text-secondary hover:underline hover:decoration-2 hover:decoration-secondary"
          >
            {header.desktop.item1.title}
          </a>
          <a
            href={header.desktop.item2.src}
            className="font-semibold leading-6 text-primary text-xl hover:text-secondary hover:underline hover:decoration-2 hover:decoration-secondary"
          >
            {header.desktop.item2.title}
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            className="-mx-3 block rounded-lg py-2.5 px-14 text-base font-semibold leading-7 text-white hover:bg-green-500 bg-whatsapp "
            onClick={() => openUrl(header.desktop.item3.src)}
          >
            {header.desktop.item3.title}
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-yellow-800/10">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">{header.mobile.title}</p>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  target="_blank"
                  href={header.mobile.item1.src}
                  className="-mx-3 block rounded-lg py-2 px-3 font-normal leading-7 text-primary hover:bg-gray-50 text-xl"
                >
                  {header.mobile.item1.title}
                </a>
              </div>
              <div className="py-6">
                <button
                  className="-mx-3 block rounded-lg py-2.5 px-10 text-base font-semibold leading-7 text-white hover:bg-green-400 bg-whatsapp "
                  onClick={() => openUrl(header.mobile.item2.src)}
                >
                  {header.mobile.item2.title}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
