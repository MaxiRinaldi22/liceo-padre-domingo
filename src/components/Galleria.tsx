import Image, { StaticImageData } from "next/image";

type GalleriaProps = {
  img1: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
  img4: StaticImageData;

  img5: StaticImageData;
};

export function Galleria({ img1, img2, img3, img4, img5 }: GalleriaProps) {
  return (
    <section className="bg-white px-5 md:px-0">
      <div className="mx-auto max-w-screen-xl py-4 sm:py-4 lg:px-5">
        <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
          <div className="col-span-2 flex h-auto flex-col bg-gray-50 sm:col-span-1 md:col-span-2 md:h-full">
            <div className="group relative flex flex-grow flex-col overflow-hidden rounded-md px-4 pb-4 pt-40">
              <Image
                src={img1}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </div>
          </div>
          <div className="col-span-2 bg-stone-50 sm:col-span-1 md:col-span-2">
            <div className="group relative mb-4 flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40">
              <Image
                src={img2}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40">
                <Image
                  src={img3}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </div>
              <div className="group relative flex flex-col overflow-hidden rounded-md px-4 pb-4 pt-40">
                {" "}
                /
                <Image
                  src={img4}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex h-auto flex-col bg-sky-50 sm:col-span-1 md:col-span-1 md:h-full">
            <div className="group relative flex flex-grow flex-col overflow-hidden rounded-md px-4 pb-4 pt-40">
              <Image
                src={img5}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              className
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
