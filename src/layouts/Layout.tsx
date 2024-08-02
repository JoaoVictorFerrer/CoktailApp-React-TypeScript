import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";
import Notification from "../components/Notification";

export default function Layout() {
  //? Outlet es um componente de react Router Dom para poder componer varios Layots que comparten los
  //? mismos componentes gracias el Router que le esta envolviendo el las paginas que comparten
  const  loadFromStorage= useAppStore(state => state.loadFromStorage)
  useEffect(() => {
    loadFromStorage()
  },[])
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />{" "}
        {/* contenido que contiene cada una de las paginas que estan dentro del router */}
      </main>
      <Modal />
      <Notification/>
    </>
  );
}
