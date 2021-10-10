import Image from "next/image";

export const Jumbotron = ({ img, description, title, buttonText, pitcher }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] brightness-90">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt={title}
        />
      </div>

      <div className="absolute top-40 left-12">
        <h3 className="text-4xl mb-3 w-64 font-medium  md:w-40">{title}</h3>
        <p className="text-gray-500">
          {description}{" "}
          <span className="underline text-indigo-500">{pitcher}</span>
        </p>
        <button className="text-sm bg-indigo-600 hover:bg-indigo-800 transition ease-in duration-150 text-white px-8 py-3 rounded-md mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};
