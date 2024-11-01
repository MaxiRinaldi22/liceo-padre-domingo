import { ContactCardProps } from "@/types/types";

export function ContactCard({ title, text, icon }: ContactCardProps) {
  return (
    <div className="flex min-h-[13vh] w-full items-center justify-between gap-3 rounded-md border border-primary-color p-3 px-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        <p className="text-lg">{text}</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          {icon}
        </svg>
      </div>
    </div>
  );
}
