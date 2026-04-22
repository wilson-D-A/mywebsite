import { Typewriter } from "@/components/Typewriter";
import { useEffect } from "react";
const Landing = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    }
  }, []);
  return (
    <>
      <div className="class flex h-full flex-col">
        <div className="z-40 flex min-h-[[calc(100lvh+13rem)]] flex-col justify-around pl-5 pt-16 align-middle md:pl-52 [&>*]:py-1">
          {/* header page */}
          <section className="flex flex-col text-slate-100">
            <p className="pb-2">Hello all. i am</p>
            <h1 className="text-4xl md:text-5xl">
              <span className="typewriter">Wilson</span>
            </h1>
            <h1 className="text-4xl md:text-5xl">
              <span>Diaz-Antigua</span>
            </h1>
            <div className="flex gap-1 py-5 text-xl text-[#43D9AD]">
              {">"}
              <Typewriter text="Full-Stack Developer" />
            </div>
          </section>
          {/* github link */}
          <section className="">
            <p className="py-2">{"//"} find my github profile</p>
            <p>
              <span className="text-[#5565e8]">const</span>
              <span className="text-[#43D9AD]"> githubLink</span>
              <span> =</span>{" "}
              <span className="block text-[#e99287] md:inline">
                <a href="https://github.com/wilson-D-A">
                  “github.com/wilson-D-A”
                </a>
              </span>
            </p>
          </section>
        </div>
      </div>

      {/* BLOB SVG */}
    </>
  );
};

export default Landing;
