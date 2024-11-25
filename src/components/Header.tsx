"use client";

import { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PAGES_ENDPONTS } from "../utils/consts";
import escudo from "/public/escudo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@/utils/Icons";
import { gsap } from "gsap";
import React from "react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const seccionRef = useRef<HTMLAnchorElement[]>([]);
  const lineRef = useRef<HTMLHRElement[]>([]);

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const isActividades = (path: string) => {
    return (
      path === "ACTIVIDADES" &&
      [
        "/actividades/voluntariado",
        "/actividades/ingles",
        "/actividades/coroybaile",
        "/actividades/handball",
        "/actividades/futbol",
        "/actividades/basquet",
      ].includes(pathname)
    );
  };

  useEffect(() => {
    PAGES_ENDPONTS.forEach((_, index) => {
      const animation = gsap.to(lineRef.current[index] as HTMLElement, {
        width: "100%",
        duration: 0.4,
        paused: true,
      });

      const handleMouseEnter = () => animation.play();
      const handleMouseLeave = () => animation.reverse();

      const seccion = seccionRef.current[index];
      if (seccion) {
        seccion.addEventListener("mouseenter", handleMouseEnter);
        seccion.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        if (seccion) {
          seccion.removeEventListener("mouseenter", handleMouseEnter);
          seccion.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    });
  }, [pathname]);


  return (
    <header
      className={
        mobileMenuOpen
          ? "z-999 absolute left-0 top-0"
          : "fixed left-0 top-0 z-50 flex h-[8vh] w-full items-center justify-between bg-primary-color py-10"
      }
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image src={escudo} alt="Escudo" width={50} height={50} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center p-2.5 text-light-brown"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          {PAGES_ENDPONTS.map((page, id) => (
            <Link
              ref={(el) => {
                if (el) {
                  seccionRef.current[id] = el;
                }
              }}
              key={page.name}
              href={page.href}
              className={`text-[11px] font-semibold text-light-brown ${
                isActive(page.href) || isActividades(page.name)
                  ? "border-b-2 border-light-brown"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <Icon path={page.path} />
                  <p>{page.name}</p>
                </div>
                {!isActive(page.href) && (
                  <hr
                    ref={(el) => {
                      if (el) {
                        lineRef.current[id] = el;
                      }
                    }}
                    className="w-0 border-b border-light-brown"
                  />
                )}
              </div>
            </Link>
          ))}
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 h-[325px] w-full overflow-y-auto bg-primary-color sm:ring-1">
          <div className="flex h-[8vh] items-center justify-between p-6 py-10">
            <Link href="/">
              <Image src={escudo} alt="Escudo" width={50} height={50} />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-light-brown"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="flow-root">
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-full flex-col justify-center gap-1 p-4"
            >
              {PAGES_ENDPONTS.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="px-2 py-1 font-semibold text-light-brown"
                >
                  <div className="flex items-center gap-3">
                    <Icon path={page.path} />
                    <p>{page.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
