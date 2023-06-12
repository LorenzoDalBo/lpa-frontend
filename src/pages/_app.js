import Banner from "@/components/Banner/banner";
import Header from "@/components/Header/header";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <Header />
        <div className="flex bg-white justify-center">
        <Banner />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
