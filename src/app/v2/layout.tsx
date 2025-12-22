import "./futuristic.css";
import HeaderDark from "@/components/futuristic/HeaderDark";
import FooterDark from "@/components/futuristic/FooterDark";

export const metadata = {
  title: "MDX Vision | The Future of Clinical Documentation",
  description:
    "Experience the future of healthcare. AI-powered voice documentation, real-time translation in 500+ languages, and augmented reality visualization.",
};

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-dark-950 text-white min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-glow-cyan focus:text-dark-950 focus:rounded-md"
      >
        Skip to main content
      </a>
      <HeaderDark />
      <main id="main-content" role="main">
        {children}
      </main>
      <FooterDark />
    </div>
  );
}
