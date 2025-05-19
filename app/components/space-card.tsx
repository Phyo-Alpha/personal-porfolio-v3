import { cn } from "~/lib/utils";

interface SpaceCardProps extends React.HTMLAttributes<HTMLDivElement> {

}

const SpaceCard = ({ className, children, ...props }: SpaceCardProps) => {
    return (
        <div className={cn("relative min-h-96 w-[90%] lg:w-[80%] xl:w-[70%] p-[2px] clip-path-angled bg-[#62EBCF] overflow-hidden", className)} {...props}>
            <div className="absolute inset-[2px] from-[#082628] to-[#081315] bg-gradient-to-r clip-path-angled">
                <div className="relative px-4 sm:px-6 md:px-10 pt-6 md:pt-10 z-10 text-[#62EBCF] h-full overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SpaceCard;