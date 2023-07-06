import Banner from "@/components/Banner/banner";
import Header from "@/components/Header/header";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Footer from "@/components/Footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <Header />
        <div>
        
        </div>
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
