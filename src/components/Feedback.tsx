import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export type Testimonial = {
  quote: string;
  author: string;
  imageSrc: string;
  imageAlt?: string;
};

interface FeedbackCarouselProps {
  title?: string;
  subtitle?: string;
  items: Testimonial[];
}

export default function FeedbackCarouselShadcn({
  title = "Depoimentos",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu velit turpis. Nunc imperdiet, nunc sed ullamcorper interdum, odio nunc mollis ligula, a posuere massa tellus in nulla.",
  items,
}: FeedbackCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  // 🔒 Desabilita completamente o wheel dentro do viewport do Embla
  React.useEffect(() => {
    if (!wrapperRef.current) return;
    // o shadcn/embla cria .embla__viewport dentro do wrapper do Carousel
    const viewport =
      wrapperRef.current.querySelector<HTMLDivElement>(".embla__viewport");
    if (!viewport) return;

    const blockWheel = (e: WheelEvent) => {
      e.preventDefault(); // não deixa a página nem o container rolar
      e.stopPropagation(); // não propaga para ancestrais
    };

    // precisa ser passive:false para o preventDefault funcionar
    viewport.addEventListener("wheel", blockWheel, { passive: false });

    return () => viewport.removeEventListener("wheel", blockWheel as any);
  }, [api]);

  return (
    <section className="bg-[#efece3] text-stone-900 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide uppercase text-[#3b492f]">
            {title}
          </h2>
          <p className="mt-4 text-stone-700 leading-relaxed">{subtitle}</p>
        </header>

        {/* Wrapper do carrossel — evita scroll chaining */}
        <div ref={wrapperRef} className="mt-10 overscroll-contain select-none">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
              dragFree: false, // snap por card (como no Figma)
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent
              className="
                cursor-grab active:cursor-grabbing
                [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
                [&>div]:pl-4 md:[&>div]:pl-6
              "
            >
              {/* Espaçador inicial */}
              <CarouselItem
                className="basis-3 md:basis-4 lg:basis-6 xl:basis-8 pointer-events-none"
                aria-hidden
              />

              {items.map((t, i) => (
                <CarouselItem
                  key={i}
                  className="basis-[85%] sm:basis-[70%] md:basis-[55%] lg:basis-[45%] xl:basis-[38%]"
                >
                  <Card item={t} />
                </CarouselItem>
              ))}

              {/* Espaçador final */}
              <CarouselItem
                className="basis-3 md:basis-4 lg:basis-6 xl:basis-8 pointer-events-none"
                aria-hidden
              />
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function Card({ item }: { item: Testimonial }) {
  return (
    <article
      className="group h-full rounded-[22px] border border-stone-300 bg-[#faf8f4] shadow-sm p-4 md:p-5
                 flex items-stretch gap-4 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-lg hover:border-stone-400 hover:bg-white"
    >
      <div className="w-28 md:w-32 shrink-0 overflow-hidden rounded-xl">
        <img
          src={item.imageSrc}
          alt={item.imageAlt || item.author}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          draggable={false} // evita travar o drag
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <blockquote className="text-sm md:text-[15px] leading-relaxed text-stone-700">
          {item.quote}
        </blockquote>
        <p className="mt-3 text-right text-sm font-semibold text-stone-800">
          {item.author}
        </p>
      </div>
    </article>
  );
}
