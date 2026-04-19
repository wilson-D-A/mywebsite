import Image from "next/image";

const Projects = () => {
  return (
    <div className="z-50 max-h-[calc(100svh-148px)] overflow-scroll">
      <div className="flex flex-col border-t-2 border-[#1E2D3D] md:justify-evenly md:border-t-0 [&>*]:border-[#1E2D3D]">
        <button className="mt-2 flex gap-3 border-b-2 border-[#1E2D3D] p-2">
          {/* <Image
            width={10}
            height={10}
            className="pt-1"
            src="/icons/arrow.svg"
            alt=""
          /> */}
          <h3 className="ml-3">all projects</h3>
        </button>
        <div className="mx-5 my-5 grid grid-cols-2 gap-x-10 gap-y-10 md:mx-44">
          <div className="col-span-2 h-auto justify-center pt-2">
            <h1 className="pb-3">
              <b className="text-[#5565e8]">MTA Accessible Station Tracker</b>{" "}
              <b className="whitespace-nowrap">
                {"//"}
                project 1
              </b>
            </h1>

            <div className="flex h-auto w-auto flex-col rounded-xl border-2 border-[#1E2D3D] bg-[#011221] xl:flex-row">
              <div className="mx-3 flex w-auto columns-2 justify-evenly gap-3">
                <Image
                  src="/projects/mtaADAmobile.jpeg"
                  alt="MTA Accessible Station Tracker Project"
                  width={200 * 3}
                  height={419 * 3}
                  className="max-h-[419px] min-w-10 object-contain object-top py-3"
                />
                <Image
                  src="/projects/mtaADA.png"
                  alt="MTA Accessible Station Tracker Project"
                  width={500 * 3}
                  height={700 * 3}
                  className="max-h-[419px] min-w-10 object-contain object-top py-3"
                />
              </div>
              <div className="flex flex-col justify-between px-3 py-5">
                <p className="pb-3">
                  Interactive website that allows users to check all train
                  accessibility information for a specific route.
                </p>
                <button className="w-fit flex-col justify-between rounded-lg bg-[#1c2b3a] px-4 py-2 text-xs text-white">
                  <a href="https://willdiaz.me/project/mtaTracker">
                    View-Website
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h1 className="pb-3">
              <b className="text-[#5565e8]">Device Inventory Application</b>{" "}
              <b className="whitespace-nowrap md:break-words">
                {"//"}project 2
              </b>
            </h1>
            <div className="overflow-hidden rounded-xl border-2 border-[#1E2D3D] bg-[#011221]">
              <Image
                src="/projects/deviceInventory.png"
                alt="Device Inventory Project"
                width={700}
                height={500}
                className="aspect-video min-h-[300px] object-cover"
              />
              <div className="min-h-[100px] px-3 py-5">
                <p className="pb-3">
                  Ipad device inventory app that allows users to create, read,
                  update, and delete device details of connected devices.
                </p>
                <button className="w-fit rounded-lg bg-[#1c2b3a] px-4 py-2 text-xs text-white">
                  <a href="https://github.com/wilson-diaz-antigua/Device_Inventory_App">
                    View-Repo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h1 className="pb-3">
              <b className="text-[#5565e8]">Endless Runner Game </b>

              <b className="whitespace-nowrap">
                {"//"}
                project 3
              </b>
            </h1>
            <div className="overflow-hidden rounded-xl border-2 border-[#1E2D3D] bg-[#011221]">
              <Image
                src="/projects/scroller.png"
                alt="Endless Runner Game"
                width={700}
                height={400}
                className="aspect-video min-h-[300px] object-cover"
              />
              <div className="min-h-[100px] px-3 py-5">
                <p className="pb-3">
                  Endless runner game built with Unity. Collect stars while
                  jumping on top of asteroid obstacles to use as platforms.
                </p>
                <button className="mt-auto w-fit rounded-lg bg-[#1c2b3a] px-4 py-2 text-xs text-white">
                  <a href="https://wildiant.itch.io/nyan-dog">
                    View in Itch.io
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
