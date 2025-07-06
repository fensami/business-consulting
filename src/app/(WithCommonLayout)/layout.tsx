import Footer from "@/components/footer/Footer";
import Nav from "@/components/nav/Nav";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
