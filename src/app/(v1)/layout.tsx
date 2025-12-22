import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function V1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white text-neutral-800">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
