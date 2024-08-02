import {lazy,Suspense} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
const FavoritesPage = lazy(()=> import('./views/FavoritesPage'))
const IndexPage = lazy(()=> import('./views/IndexPage'))


//! Aumentamos la performace de la pagina fragamentando las rutas yq eu se carge la parte correspondiente en cada llamada
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={
            <Suspense fallback='Cargando....'> {/* en la prop fallback puedo renderezar un loading mientras carga la pagina */}
               <IndexPage/>
           </Suspense>
          } index />
          <Route path="/favoritos" element={
            <Suspense fallback='Cargando....'>
              <FavoritesPage/>
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
