import Footer from '../components/footer.jsx';
export const meta = () => [
  { title: "Terms | Design Index" },
  {
    name: "description",
    content:"Terms and Conditions",
  },
  { property: "og:title", content: "Terms | Design Index" },
  {
    property: "og:description",
    content:"Terms and Conditions",
  },
  { property: "og:type", content: "website" },
  { property: "og:image", content: "https://designindex.xyz/preview.avif" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Terms | Design Index" },
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

export default function Terms_and_Conditions() {
    return (
        <>
            <div className="mt-[90px] md:mt-[40px] lg:mt-[50px] xl:mt-[50px] 2xl:mt-[50px] p-[5px] flex flex-col items-start justify-center w-auto h-auto bg-white ml-[12px] mr-[20px]">
                <p className="font-semibold text-[32px] md:text-[32px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-Outfit">terms and conditions</p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Effective Date: July 20, 2025
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    Welcome to design index, a curated directory of the best design resources on the internet. By accessing or using this website, you agree to be bound by these Terms of Service. Please read these terms carefully before using our website.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    By accessing or using design index, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    <strong>1.Use of Website: </strong>This Site is intended for personal and non-commercial use. You may not copy, reproduce, republish, upload, or distribute any part of the Site for commercial purposes without our prior written consent.You may not use this Site in any way that causes damage or interferes with other's use of it.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    <strong>2.Content Ownership: </strong>The Site features links, previews, and OG (Open Graph) images from third-party websites.All trademarks, logos, images, and content referenced or displayed on the Site belong to their respective owners.We do not claim ownership over third-party content. Use of such content on this Site is strictly for informational and attribution purposes.
                </p>
                <p className='text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2'>
                    <strong>3.Third Party links: </strong>This Site contains links to external websites that are not owned or controlled by us. We are not responsible for the content, policies, or practices of any third-party sites.We encourage you to read the privacy policies and terms of service of any external websites you visit. 
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    <strong>4.No Guarantee </strong>While we strive to keep the content updated and accurate, we make no guarantees regarding the completeness, reliability, or availability of resources listed. Use the information and links at your own discretion.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    <strong>5.Limitation of Liability: </strong>In no event shall we be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this Site or any third-party content linked from it.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    <strong>6.Changes to Terms: </strong>We reserve the right to modify or update these Terms of Service at any time without prior notice. Your continued use of the Site after any changes constitutes your acceptance of the revised terms.
                </p>
                <p className="text-[15px] lg:text-[17px] xl:text-[19px] 2xl:text-[25px] font-Outfit font-semibold text-justify text-[#525252] mb-2">
                    If you have any questions or concerns about these Terms of Service, please contact us at: <b>atharv.rem@gmail.com</b>
                </p>
            </div>
            <div className='ml-[12px]'>
                <Footer />
            </div>
        </>
    );
}