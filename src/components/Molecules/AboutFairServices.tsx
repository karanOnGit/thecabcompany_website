import Image from "next/image";

export default function AboutFairServices() {
    return (
        <section className="flex justify-center items-center md:py-16 py-5 px-6">
            <div className="flex flex-col lg:flex-row bg-[#c8c8c8] rounded-2xl shadow-lg max-w-6xl w-full overflow-hidden p-10 relative">
                <div className="relative flex-1 flex justify-center items-center mb-12 lg:mb-0">
                    <div className="absolute w-[130%] h-[130%] bg-[#c6f900] -z-10 rotate-[10deg] rounded-3xl blur-sm"></div>

                    <div className="absolute -rotate-[15deg] top-10 left-10 shadow-xl">
                        <Image
                            src="https://images.pexels.com/photos/7988088/pexels-photo-7988088.jpeg"
                            alt="Passenger in car"
                            width={220}
                            height={300}
                            className="rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Right Image */}
                    <div className="absolute rotate-[10deg] top-24 left-40 shadow-xl">
                        <Image
                            src="https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg"
                            alt="Delivery person"
                            width={260}
                            height={340}
                            className="rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center lg:pl-16">
                    <div className="bg-[#c6f900] rounded-xl inline-flex items-center justify-center w-auto h-14 mb-6">
                        <span className="text-black text-2xl font-bold">TheCabCompany</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        Fair services <br /> for all
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed font-medium max-w-md">
                        inDrive has grown beyond just ride-hailing to create solutions that
                        enable the provision of honest and ethical services to communities
                        around the world.
                    </p>
                </div>
            </div>
        </section>
    );
}
