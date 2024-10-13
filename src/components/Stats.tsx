import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Stats = () => {
    const stats = [
      { id: 1, name: "Projects created and deployed", value: "47+" },
      { id: 2, name: "Media companies and channel partners", value: "Over 3" },
      { id: 3, name: "^Monthly budget management", value: "$1 million" },
    ];
    
    return (
      <div className="bg-slate-600 py-12 sm:py-12">
        <MaxWidthWrapper>
        <div className="mx-auto max-w-screen-lg px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        </MaxWidthWrapper>
      </div>
    );
  };
  
  export default Stats;
  