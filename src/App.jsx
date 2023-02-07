import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Proyectos from './paginas/Proyectos'
import NuevoProyecto from './paginas/NuevoProyecto'
import Proyecto from './paginas/Proyecto'
import EditarProyecto from './paginas/EditarProyecto'
import NuevoColaborador from './paginas/NuevoColaborador'
import Inicio from './paginas/Inicio'
import SobreNosotros from './paginas/SobreNosotros'
import Galeria from './paginas/Galerias'
import Noticias from './paginas/Noticias'
import NoticiasTeatro from './paginas/noticiateatro'
import NoticiasTranvia from './paginas/noticiatranvia'
import NoticiasCasas from './paginas/noticiacasas'
import Recorrido from './paginas/Recorridos'
import RecorridoBasilica from './paginas/recorridoBasilica'
import RecorridoMuseo from './paginas/RecorridoMuseo'
import GaleriaImg from './paginas/GaleriaImg'
import GaleriaTeatro from './paginas/GaleriaTeatro'
import GaleriaSanta from './paginas/GaleriaSanta'
import GaleriaMuseo from './paginas/GaleriaMuseo'
import PrincilMuseo from './paginas/PrincipalMuseo'
import PrincilBasilica from './paginas/PrincipalBasilica'
import Contacto from './paginas/Contacto'
import {AuthProvider} from './context/AuthProvider'
import {ProyectosProvider} from './context/ProyectosProvider'



function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
              <Route path="/" element={<AuthLayout />}>
                  <Route index element={<Login />} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="registrar" element={<Registrar />} />
                  <Route path="olvide-password" element={<OlvidePassword />} />
                  <Route path="olvide-password/:token" element={<NuevoPassword />} />
                  <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                 
              </Route>

              <Route path="/inicio" element={<Inicio />} />
              <Route path="/SobreNosotros" element={<SobreNosotros />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/noticias" element={<Noticias/>} />
              <Route path="/noticiasteatro" element={<NoticiasTeatro/>} />
              <Route path="/noticiastranvia" element={<NoticiasTranvia/>} />
              <Route path="/noticiascasas" element={<NoticiasCasas/>} />
              <Route path="/galerias" element={<Galeria/>} />
              <Route path="/recorridos" element={<Recorrido/>} />
              <Route path="/recorridobasilica" element={<RecorridoBasilica/>} />
              <Route path="/recorridomuseo" element={<RecorridoMuseo/>} />
              <Route path="/galeriaimg" element={<GaleriaImg/>} />
              <Route path="/galeriateatro" element={<GaleriaTeatro/>} />
              <Route path="/galeriamuseo" element={<GaleriaMuseo/>} />
              <Route path="/galeriasanta" element={<GaleriaSanta/>} />
              <Route path="/principalbasilica" element={<PrincilBasilica/>} />
              <Route path="/principalmuseo" element={<PrincilMuseo/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/proyectos" element={<RutaProtegida />}>
              
                  <Route index element={<Proyectos />} />
                 
                  <Route path="crear-proyecto" element={<NuevoProyecto />} />
                  <Route path="nuevo-colaborador/:id" element={<NuevoColaborador />} />
                  <Route path=":id" element={<Proyecto />} />
                  <Route path="editar/:id" element={<EditarProyecto />} />
              </Route>
          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
