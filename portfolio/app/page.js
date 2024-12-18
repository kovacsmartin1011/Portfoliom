import { Button } from "@/components/Button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/*text*/}
                    <div className="text-center xl:text-left">
                        <span className="text-xl">Webfejlesztő</span>
                        <h1 className="h1 mb-6">
                            Üdv, <br/><span className="text-accent">Kovács Martin</span> vagyok.
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            Professzionális weboldalakat készítek vállalkozásoknak és magánszemélyeknek egyaránt.
                        </p>
                    </div>
                    {/*photo*/}
                    <div>photo</div>
                </div>
            </div>
        </section>
    )
}

export default Home;