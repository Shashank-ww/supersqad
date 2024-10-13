import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";


  const Faqs = () => {
    return (
    <>
    <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row max-w-full items-start justify-center p-4 py-12">
        <div className="w-full lg:w-1/3 items-center justify-center lg:pr-4 p-4">
            <h1 className="font-bold text-xl text-secondary-foreground pb-4">FAQs</h1>
            <p className="font-light text-sm">We understand that collaboration needs trust. That comes upon differentiating facts from perception. Here are <span className="font-medium">frequently asked questions</span> to help you make the right decision.</p>
        </div>
        <div className="w-full lg:w-2/3 items-start justify-start p-4">
    <Accordion type="single" collapsible className="w-full">

      <AccordionItem value="item-1">
        <AccordionTrigger>What business services do you offer?</AccordionTrigger>
        <AccordionContent>
        We offer a range of services to enhance your digital presence, including social media marketing, custom Micro SaaS solutions, Web 3.0 integration, SEO, content creation, and digital advertising.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Are you production-ready?</AccordionTrigger>
        <AccordionContent>
        Yes, we are production-ready and equipped to implement innovative and practical solutions to ensure your brand stands out in the digital landscape.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Why do we need you?</AccordionTrigger>
        <AccordionContent>
        You need us to boost your digital presence, connect with your audience effectively, and achieve your business goals through tailored marketing and technology solutions.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Do you hire independent resources?</AccordionTrigger>
        <AccordionContent>
        Yes, we hire independent resources to bring diverse expertise and perspectives to our projects. These resources work on individual contribution role.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Do you manage and tech and media?</AccordionTrigger>
        <AccordionContent>
        Yes, we manage both tech and media to provide comprehensive solutions that cover all aspects of your digital strategy.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Do you have inhouse multi-capability?</AccordionTrigger>
        <AccordionContent>
        Yes, we have in-house multi-capability, allowing us to offer a wide range of services under one roof to meet all your digital needs.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
    </div>
    </div>
    </MaxWidthWrapper>
    </>
  );
};

export default Faqs;