"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}

interface Button {
  id: number;
  text: string;
  url: string;
  newTab: boolean;
}

interface MobileNavLink extends NavLink {
  closeMenu: () => void;
}

function NavLink({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 transition ease-in-out delay-50 text-gray-300 hover:text-gray-100 ${
          path === url && "text-gray-100"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
  const path = usePathname();
  const handleClick = () => {
    closeMenu();
  };
  return (
    <a className="flex">
      <Link
        href={url}
        onClick={handleClick}
        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900 ${
          path === url && "text-violet-400 border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </a>
  );
}

export default function Navbar({
  button,
  links,
  logoUrl,
}: {
  button: Button;
  links: Array<NavLink>;
  logoUrl: string | null;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div className="p-4 bg-primary text-gray-100">
      <div className="container flex justify-between h-16 mx-auto gap-2">
        <Logo src={logoUrl}/>

        <div className="flex-1 justify-between hidden lg:flex">
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <ul className="items-stretch space-x-3 hidden lg:flex">
              {links.map((item: NavLink) => (
                <NavLink key={item.id} {...item} />
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            <Link
              href={button.url}
              target={button.newTab ? "_blank" : "_self"}
              aria-label="Reach Us"
              className="-mb-1"
            >
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-full bg-accent text-gray-100 transition ease-in-out delay-150 hover:scale-110"
              >
                {button.text}
              </button>
            </Link>
          </div>
        </div>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75" />{" "}
          {/* Overlay */}
          <Dialog.Panel className="fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Strapi</span>
                {logoUrl && <img className="h-8 w-auto" src={logoUrl} alt="" />}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-gray-100" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6">
                  {links.map((item) => (
                    <MobileNavLink
                      key={item.id}
                      closeMenu={closeMenu}
                      {...item}
                    />
                  ))}
                </div>
                <Link
                  href={button.url}
                  target={button.newTab ? "_blank" : "_self"}
                  aria-label="Reach Us"
                  className="-mb-1"
                >
                  <button
                    type="button"
                    className="px-6 py-3 text-sm rounded-full hover:underline bg-accent text-gray-100 w-full justify-center"
                  >
                    {button.text}
                  </button>
                </Link>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <button
          className="p-4 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-7 w-7 text-gray-100" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
