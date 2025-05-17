import { HeroContent } from "../sub/hero";
import Sun from "../sub/Sun";

const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center min-h-[600px]">
            <HeroContent />
            <div className="w-full flex justify-center items-center">
                <Sun />
            </div>
        </div>
    )
}

export default Hero;