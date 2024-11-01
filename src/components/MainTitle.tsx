export function MainTitle({ text }: { text: string }) {
  return (
    <h1 className="border-l-2 border-dark-brown px-2 text-3xl font-semibold text-black md:text-4xl">
      {text}
    </h1>
  );
}
