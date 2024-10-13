import { ArrowPathIcon, BoltIcon, CloudArrowUpIcon, CloudIcon, FingerPrintIcon, LockClosedIcon, PresentationChartLineIcon, RectangleGroupIcon, RectangleStackIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Cloud-based CRMs',
    description:
      'We use cloud-based CRM solution that helps us manage customer and client relationship, empowering teams to centralize, organize, and optimize their interactions with clients.',
    icon: RectangleGroupIcon,
  },
  {
    name: 'Dedicated teams',
    description:
      'With a deep understanding of your objectives and unwavering commitment to excellence, our teams seamlessly integrate into your workflow, ensuring optimal results and smooth collaboration.',
    icon: UserGroupIcon,
  },
  {
    name: 'Instant resolution',
    description:
      'Our dedicated team is always on standby to swiftly address any concerns, ensuring minimal disruptions and maximum satisfaction for our clients.',
    icon: BoltIcon,
  },
  {
    name: 'Realtime reporting',
    description:
      'From monitoring key metrics to identifying trends as they happen, with real-time reporting you can make informed decision and stay ahead of competition',
    icon: PresentationChartLineIcon,
  },
]

const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-screen-lg lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Dedicated Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Full-service Global Capability Center
          </p>
          <p className="mt-6 text-lg font-thin leading-8 text-gray-600">
          We aim to become the central hub embracing digital transformation for teams and businesses alike, providing comprehensive media production and seamlessly integrating technologies into every facet of business operations. We seek to enhance customer experiences, streamline work processes, and facilitate data-driven decision-making.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


export default Features;