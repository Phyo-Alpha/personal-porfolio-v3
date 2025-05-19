import { HeroContent } from "../sub/hero";
import Sun from "../sub/Sun";

const Hero = () => {
    return (
        <section id="home" className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-center min-h-[600px]">
            <HeroContent />
            <div className="w-full flex justify-center items-center">
                <Sun />
            </div>
        </section>
    )
}

export default Hero;