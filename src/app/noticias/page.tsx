import { MainTitle } from "@/components/MainTitle";
import { Margin } from "@/components/Margin";
import { NOTICIAS_INFO } from "@/utils/noticias";
import Image from "next/image";

export default function NoticiasPage() {
  return (
    <section className="bg-white pt-[8vh]">
      <Margin>
        <div className="px-5 py-10">
          <MainTitle text="NOTICIAS" />
        </div>
        <div className="mb-20 mt-10 grid w-full grid-cols-1 gap-10 px-5 md:grid-cols-2 xl:grid-cols-3">
          {NOTICIAS_INFO.map((item) => (
            <div
              key={item.date}
              className="flex h-[560px] w-full flex-col bg-gray-50 transition duration-200 hover:shadow-lg md:w-96"
            >
              <Image
                src={item.img}
                alt="..."
                width={300}
                height={300}
                className="w-full"
              />
              <div className="flex h-full flex-col justify-between p-2">
                <div>
                  <h3 className="text-lg font-[500] text-primary-color">
                    {item.title}
                  </h3>
                  <p className="text-sm font-[500] text-[#13587a]">
                    {item.date}
                  </p>
                </div>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Margin>
    </section>
  );
}
