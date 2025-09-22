import Footer from "../components/footer"
export const meta = () => [
  { title: "About | Design Index" },
  {
    name: "description",
    content:"why i built design index",
  },
  { property: "og:title", content: "About | Design Index" },
  {
    property: "og:description",
    content:"why i built design index",
  },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://designindex.xyz/preview.avif" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "About | Design Index" },
  {
    name: "twitter:description",
    content:
      "why i built design index",
  },
  {
    name: "twitter:image",
    content: "https://designindex.xyz/twitter_preview.avif",
  },
];

export default function About() {

    return (
        <>
            <div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px] flex flex-col items-start justify-center w-auto h-auto bg-white md:ml-[12px] md:mr-[20px] md:p-[5px]">
                <p className="font-semibold text-[32px] md:text-[32px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-Outfit">about me</p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Hi, I’m Atharv Remeshan, a designer and developer based in Mumbai, India. I created this website to help fellow designers find the best design resources available on the internet.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    I started this directory because I know what it’s like to be an average designer with big ideas and limited resources. I spent hours searching for high-quality mockups, fonts, illustrations, icons, and color tools — most of them scattered, overpriced, or hard to find.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    But over time, I discovered a world of free and underrated resources that helped me improve my work dramatically.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    This site is my way of giving back — a curated collection of design tools, inspiration, and assets that are:
                </p>
                <ul className="list-disc ml-[30px] mb-2">
                    <li className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]">Handpicked for Quality</li>
                    <li className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]">Mostly free or freemium</li>
                    <li className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-[#525252]">Built to help you grow as a designer</li>
                </ul>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Whether you're just starting out or already working on client projects, I hope these resources help you save time, learn faster, and create better work.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Thanks for being here,
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    ~ Atharv Remeshan
                </p>
            </div>
            <div className='md:ml-[12px]'>
                <Footer />
            </div>
        </>
    );
}