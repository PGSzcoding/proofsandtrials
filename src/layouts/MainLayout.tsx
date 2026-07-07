import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";
import WhatsAppButton from "../components/WhatsAppButton";

export default function MainLayout() {
  return (
    <>
      <ScrollToHash />

      <Header />
      <Outlet />
      <WhatsAppButton/>
      <Footer />
    </>
  );
}