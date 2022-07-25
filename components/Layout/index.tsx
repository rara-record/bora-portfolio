import Header from "components/Header";
import Footer from "components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>컨텐츠 {children}</div>
      <Footer />
    </>
  );
};

export default Layout;
