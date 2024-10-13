import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

const links = [
    { name: 'About us', href: '/about' },
    { name: 'Our values', href: '/about' },
    { name: 'Internship program', href: '#' },
    { name: 'Open roles', href: '#' },
  ]
  const stats = [
    { name: 'Remote Locations', value: '12' },
    { name: 'Full-time colleagues', value: '30+' },
    { name: 'Working Timezones', value: 'Flexible' },
    { name: 'Medical Insurance', value: 'Benefits' },
  ]


  const Workwithus = () => {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <MaxWidthWrapper>
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Partner with us</h2>
          <p className="mt-6 leading-8 text-gray-300">
            Find related media or tech services to work on or get hired as an individual for long-term work contracts, both at the convenience of your own location. 
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </MaxWidthWrapper>
    </div>
  )
}
  

export default Workwithus;