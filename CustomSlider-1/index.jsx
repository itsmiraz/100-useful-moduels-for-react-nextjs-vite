import React from 'react';


const Data = [
    {
        id: 1,
        img: 'https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png',
        title: "Web Copy",
    },
    {
        id: 13,
        img: 'https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png',
        title: "Web Copy",
    },
    {
        id: 12,
        img: 'https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png',
        title: "Web Copy",
    },
    {
        id: 132,
        img: 'https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png',
        title: "Web Copy",
    },
    {
        id: 123,
        img: 'https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png',
        title: "Web Copy",
    },
    {
        id: 123,
        img: 'https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png',
        title: "Web Copy",
    },

];


const Slider = () => {

    const [services, setServices] = useState(1);
    const SmallCard = ({ data }) => {
        return (
            <div>
                <Image
                    className="w-full rounded"
                    width={200}
                    height={200}
                    src={data.img}
                    alt=""
                />
                <p className="my-2 text-center text-[#666666]">{data.title}</p>
            </div>
        );
    };


    return (
        <div className="mx-auto w-full md:w-[850px]">
            <div className=" relative m-2 my-6 flex select-none  items-center justify-between rounded-full bg-[#F1F5F1]">
                <button
                    onClick={() => setServices(1)}
                    className={`rounded-full ${services === 1 ? " text-white" : "bg-transparent"
                        } relative z-30 px-4 py-4 text-center text-sm text-[#3E3E46]    md:text-xl`}
                >
                    Attract
                </button>
                <button
                    onClick={() => setServices(2)}
                    className={`rounded-full ${services === 2 ? " text-white" : "bg-transparent"
                        } relative z-30 px-4 py-4 text-center text-sm text-[#3E3E46]    md:text-xl`}
                >
                    Educate
                </button>
                <button
                    onClick={() => setServices(3)}
                    className={`rounded-full ${services === 3 ? " text-white" : "bg-transparent"
                        } relative z-30 px-4 py-4 text-center text-sm text-[#3E3E46]    md:text-xl`}
                >
                    Convert
                </button>
                <button
                    onClick={() => setServices(4)}
                    className={`rounded-full ${services === 4 ? " text-white" : "bg-transparent"
                        } relative z-30 px-4 py-4 text-center text-sm text-[#3E3E46]    md:text-xl`}
                >
                    Retain
                </button>

                <div
                    className={`
          absolute bottom-0  top-0 h-full  w-[80px] select-none  rounded-full bg-[#759C78] duration-200 ease-in-out md:w-[100px]
          ${services === 1 && "left-[0px] md:left-[4px]"}
          ${services === 2 && "left-1/4 md:left-[244px]"}
          ${services === 3 &&
                        "left-1/2 translate-x-2 md:left-[496px] md:translate-x-0"
                        }
          ${services === 4 &&
                        "left-3/4 translate-x-2 md:left-[740px] md:translate-x-0"
                        }
          `}
                ></div>
            </div>

            {/*Show when  attract btn is clicked */}
            {services === 1 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: services === 1 ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <p className="my-10 text-center text-xl text-[#666666]  md:text-3xl">
                        Position yourself an as expert in the minds{" "}
                        <br className="hidden md:block" /> of your audience
                    </p>

                    <div className="grid grid-cols-2 items-center gap-5 md:grid-cols-4">
                        <div className="col-span-2 md:col-span-1">
                            <p className="text-center text-3xl md:text-start md:text-lg">
                                Build Brand <br className="block md:hidden" /> awareness
                            </p>
                        </div>
                        {Data.map(data => (
                            <SmallCard data={data} key={data.id} />
                        ))}
                    </div>
                    <div className="my-10 grid grid-cols-2 items-center gap-5 md:grid-cols-4">
                        <div className="col-span-2 md:col-span-1">
                            <p className="text-center text-3xl md:text-start md:text-lg">
                                Attract more <br className="block md:hidden" /> audience
                            </p>
                        </div>
                        {Data.map(data => (
                            <SmallCard data={data} key={data.id} />
                        ))}
                    </div>
                </motion.div>
            )}

            {/*Show when  Educate btn is clicked */}

            {services === 2 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: services === 2 ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <p className="my-10 text-center text-xl text-[#666666]  md:text-3xl">
                        Educate your buyers about your{" "}
                        <br className="hidden md:block" /> solution and its use cases.
                    </p>

                    <div className="grid grid-cols-2 items-center gap-5 md:grid-cols-4">
                        <div className="col-span-2 md:col-span-1">
                            <p className="text-center text-3xl font-medium md:text-start md:text-lg">
                                Build solution awareness
                            </p>
                        </div>
                        {Data.map(data => (
                            <SmallCard data={data} key={data.id} />
                        ))}
                    </div>
                    <div className="my-10 grid grid-cols-2 items-center gap-5 md:grid-cols-4">
                        <div className="col-span-2 md:col-span-1">
                            <p className="text-center text-3xl font-medium md:text-start md:text-lg">
                                Differentiate your solution
                            </p>
                        </div>
                        {Data.map(data => (
                            <SmallCard data={data} key={data.id} />
                        ))}
                    </div>
                </motion.div>
            )}

            {/*Show when  convert btn is clicked */}

            {services === 3 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: services === 3 ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <p className="my-10 text-center text-xl text-[#666666]  md:text-3xl">
                        Show compelling reasons for buyers to{" "}
                        <br className="hidden md:block" /> choose your solution. Enhance
                        your:
                    </p>

                    <div className="grid grid-cols-2 items-start gap-5 md:grid-cols-4">
                        <div className="col-span-2 my-6 md:col-span-1">
                            <p className="text-center text-3xl font-medium md:text-start md:text-lg">
                                Sales enablement function
                            </p>
                        </div>
                        <div className="col-span-3 grid grid-cols-2 gap-5 md:grid-cols-3">
                            {Data.map(data => (
                                <SmallCard data={data} key={data.id} />
                            ))}
                        </div>
                    </div>
                    <div className="my-10 grid grid-cols-2 items-center gap-5 md:grid-cols-4">
                        <div className="col-span-2 md:col-span-1">
                            <p className="text-center text-3xl font-medium md:text-start md:text-lg">
                                Performance marketing efforts
                            </p>
                        </div>
                        {Data.map(data => (
                            <SmallCard data={data} key={data.id} />
                        ))}
                    </div>
                </motion.div>
            )}
            {/*Show when  Retain btn is clicked */}

            {services === 4 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: services === 4 ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <p className="my-10 text-center text-xl text-[#666666]  md:text-3xl">
                        Nurture your customers with engagement-{" "}
                        <br className="hidden md:block" /> focused content.
                    </p>

                    <div className="my-10 grid grid-cols-2 items-center gap-5 md:grid-cols-4">
                        <div className="col-span-2 md:col-span-1">
                            <p className="text-center text-3xl font-medium md:text-start md:text-lg">
                                Increase customer engagement
                            </p>
                        </div>
                        {Data.map(data => (
                            <SmallCard data={data} key={data.id} />
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Slider;