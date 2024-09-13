import {useRef} from "react"
import DotPattern from "@/components/magicui/dot-pattern";
import { Card, CardContent } from "@/components/ui/card"
import Profile from "@/assets/profile.png"
import BoxReveal from "@/components/magicui/box-reveal";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const accordionItems = [
  {
    title: "Gestion de projet",
    content: "Planification, exécution et suivi de projets pour atteindre les objectifs dans les délais impartis.",
  },
  {
    title: "Relations clients",
    content: "Gestion des relations avec les clients pour assurer une satisfaction optimale et une fidélisation.",
  },
  {
    title: "Informatique (NSI AMC)",
    content: "Compétences en programmation et en gestion des systèmes informatiques.",
  },
  {
    title: "Organisation et planification",
    content: "Compétences en organisation et gestion du temps pour maximiser l'efficacité.",
  },
]

function App() {
  const plugin = useRef(
    Autoplay({ delay: 20_000, stopOnInteraction: true })
  )

  return (
    <div className="@container">
      <DotPattern className="z-[-2]" />

      <div className="grid @[80rem]:grid-cols-3 gap-10 w-screen min-h-screen margin-0 py-10 px-0 @[80rem]:px-10">
        <div className="w-screen @[80rem]:w-auto flex items-center justify-center px-10">
          <Card className="h-full">
            <CardContent className="flex flex-col justify-center p-6 gap-10">
              <div className="flex flex-row gap-10">
                  <div className="w-36 @[80rem]:w-52">
                    <Card className="overflow-hidden">
                      <AspectRatio ratio={1}>
                        <CardContent className="p-0 overflow-hidden">
                          <img
                            src={Profile}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </CardContent>
                      </AspectRatio>
                    </Card>
                  </div>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="text-lg">
                    Étudiant en BTS GPME, passionné par la gestion et la technologie
                  </p>
                </BoxReveal>
              </div>

              <div>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="text-2xl font-semibold">
                    Contact
                  </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <div className="mt-[1.5rem]">
                    <p>
                      -&gt; Email: <span className="font-semibold text-[#5046e6]"> <a href="mailto:contact@nikolazvoisson.com">contact@nikolazvoisson.com</a></span><br />
                      -&gt; Téléphone: <span className="font-semibold text-[#5046e6]"> <a href="tel:+33780687630">07 80 68 76 30</a></span>
                    </p>
                  </div>
                </BoxReveal>
              </div>

              <div>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <p className="text-2xl font-semibold">
                    Compétences
                  </p>
                </BoxReveal>
                <Accordion type="single" collapsible className="w-full">
                  {accordionItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{item.title}</AccordionTrigger>
                      <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-2 flex flex-col items-center justify-center w-screen @[80rem]:w-auto h-full gap-10 px-10">
          <div className="w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">
                Nikolaz Voisson<span className="text-[#5046e6]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="mt-[1.5rem]">
                <p>
                  -&gt; Alternance dans le cadre d'un <span className="font-semibold text-[#5046e6]"> BTS Gestion de la PME</span>.<br />
                  -&gt; Mon parcours comprend un <span className="font-semibold text-[#5046e6]"> service civique</span> et une expérience dans le centre des impôts de Saint-Malo.
                </p>
              </div>
            </BoxReveal>
          </div>

          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 2 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-video items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default App
