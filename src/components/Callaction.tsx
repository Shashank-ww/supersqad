import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button } from "@/components/ui/button";

const Callaction = () => {

    return (
        <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-evenly text-left py-12 px-4 gap-3">
            <div className="p-8 rounded-md bg-stone-200 hover:bg-zinc-100">
            <h3 className="font-semibold text-xl mb-4">
                Find Talent
            </h3>
            <p className="text-sm mb-8 max-w-sm">
             Discover and connect with top professionals who can bring your projects to life with their expertise and skills.
            </p>
            <a href="/talent">
            <Button variant={"outline"} size={"lg"}> 
                Get Started <span> &rarr;</span>
            </Button>
            </a>
            </div>
            <div className="p-8 rounded-md bg-sky-600 hover:bg-sky-500 text-white">
            <h3 className="font-semibold text-xl mb-4">
                Find Job
            </h3>
            <p className="text-sm mb-8 max-w-sm">
             Explore work opportunities that match your skills and career aspirations. Start your journey toward the perfect job today!
            </p>
            <a href="https://forms.gle/sihRooqtQVBCxcZ1A" target="_blank" rel="noopener noreferrer">
            <Button className="text-black" variant="outline" size="lg"> 
            Submit Form <span> &rarr;</span>
            </Button>
            </a>
            </div>
        </div>

        </MaxWidthWrapper>
    )
}

export default Callaction;
