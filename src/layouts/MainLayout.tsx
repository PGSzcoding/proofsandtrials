import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToHash from "../components/ScrollToHash";

export default function MainLayout() {
  return (
    <>
      <ScrollToHash />
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}