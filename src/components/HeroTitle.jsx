import { TypeAnimation } from "react-type-animation";

const HeroTitle = () => {
    return (
        <div className="my-3 lg:text-6xl text-4xl font-bold" data-aos="fade-right">
            <TypeAnimation
                sequence={[
                "UI & UX Designer",
                10000,
                "Web Developer",
                10000,
                ]}
                speed={1}
                deletionSpeed={1}
                repeat={Infinity}
                wrapper="span"
                className="text-green-500"
            />
        </div>
    );
};

export default HeroTitle;
