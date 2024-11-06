// components/servicesData.ts
import { SlEnergy, SlMap } from 'react-icons/sl';
import { BsBank, BsBuildings } from 'react-icons/bs';
import { MdOutlineEnergySavingsLeaf, MdOutlineCampaign } from 'react-icons/md';
import { GiMedicines, GiShoppingCart, GiAutoRepair } from 'react-icons/gi';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export const sectorData = [
  {
    icon: <SlEnergy size={46} />,
    title: 'Energy & Power',
    description: 'Driving the green revolution with sustainable media strategies using digital billboards and OTT',
  },
  {
    icon: <BsBank size={46} />,
    title: 'Fintech',
    description: 'Improvising data and statistics to yield measurable outcomes towards banking and crypto',
  },
  {
    icon: <MdOutlineEnergySavingsLeaf size={46} />,
    title: 'EV & Sustainability',
    description: 'Paradigm shift towards greenhouse reduction and long-term approach reducing Carbon footprints',
  },
  {
    icon: <GiMedicines size={46} />,
    title: 'Healthcare & Pharma',
    description: 'Elevating healthcare and pharma brands through niche-specific marketing solutions.',
  },
  {
    icon: <GiShoppingCart size={46} />,
    title: 'Retail & FMCG',
    description: 'Transforming retail experiences with engaging and effective channel partner strategies',
  },
  {
    icon: <GiAutoRepair size={46} />,
    title: 'Auto & Manufacturing',
    description: 'Accelerating growth for auto and manufacturing through dynamic marketing within the industry',
  },
  {
    icon: <SlMap size={46} />,
    title: 'Travel & Leisure',
    description: 'Inspiring wanderlust with compelling air-fare and travel marketing solutions',
  },
  {
    icon: <MdOutlineCampaign size={46} />,
    title: 'Non-Profits & Gov. PSA',
    description: 'Amplifying causes with impactful PSAs for the non profit organizations',
  },
  {
    icon: <BsBuildings size={46} />,
    title: 'Real Estate',
    description: 'Elevating real estate ventures with compelling lead generation and digital marketing',
  },
];

const Sectors = () => {
    return (
        <div className="items-center justify-center text-center">
        <MaxWidthWrapper>
      <div className="py-24 sm:py-16 mx-auto">
        <h2 className="text-base font-bold text-blue-500">TOP SERVICE INDUSTRIES</h2>
        <h2 className="my-2 text-3xl font-bold tracking-tight text-primary-background sm:text-4xl">
          Tailored solutions across diverse sectors
        </h2>
        <div className="w-full flex items-center justify-center my-4 px-4">
          <p className="max-w-screen-md text-center">
            Delivering services or managing autonomous tasks, our expertise spans across various industry sectors. Specializing in ensuring competitive advantage to meet their specific requirements.
          </p>
        </div>
        <div className="mx-auto py-24 sm:py-16 px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 gap-x-4">
            {sectorData.map((service, index) => (
              <div
                key={index}
                className="gap-4 p-6 rounded-md flex flex-col items-center justify-center hover:bg-blue-600 hover:text-white hover:shadow-lg transition-colors duration-100">
                {service.icon}
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Sectors;
