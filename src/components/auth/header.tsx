import { cn } from "@/lib/utils";

interface HeaderProps {
    label: string;
};

export const Header = ({
    label,
}: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-2 items-center">
            {/* <div className='font-bold text-lg cursor-default'>Superstack<span className='font-normal'>studios</span></div> */}
            <h1 className="font-semibold text-lg text-accent-foreground border-b-gray-200">Login or create an account</h1>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    );
};