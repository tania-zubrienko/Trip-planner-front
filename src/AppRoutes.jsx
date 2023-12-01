import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
import TripsPage from './pages/TripsPage/TripsPage.jsx'
import SignupForm from './components/Forms/SignupForm/SignupForm.jsx'
import LoginForm from './components/Forms/LoginForm/LoginForm.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import NewTripForm from './components/Forms/NewTripForm/NewTripForm.jsx'
import NewBookingForm from './components/Forms/NewBookingForm/NewBookingForm.jsx'
import TripDetail from './pages/TripDetail/TripDetail.jsx'
import NewExpenseForm from "./components/Forms/NewExpensesForm/NewExpensesForm.jsx"
import PlanDetails from "./components/PlanDetails/PlanDetails.jsx"
import DocumentsForm from './components/Forms/DocumentsForm/DocumentsForm.jsx'

const AppRoutes = () => {

    return (<Routes>


        <Route path='/pruebas' element={<DocumentsForm />}></Route>


        <Route path='/' element={<HomePage />} />
        <Route path='/recomendados' element={<h1>Soy los Recomendados</h1>} />
        <Route path='/registrarse' element={<SignupForm />} />
        <Route path='/inicio-sesion' element={<LoginForm />} />

        <Route element={<PrivateRoute />}>
            <Route path='/lista-deseos' element={<h1>Dime tu lista de deseos para reyes :P</h1>} />
            <Route path='/perfil' element={<ProfilePage />} />
            <Route path='/viajes' element={<TripsPage />} />
            <Route path='/viajes/crear' element={<NewTripForm />} />
            <Route path='/viajes/reservas/:id/crear' element={<NewBookingForm />} />
            <Route path='/viajes/detalles/:id' element={<TripDetail />} />
            <Route path="/viajes/planes/:id" element={<h1>Soy los planes del viaje</h1>} />
            <Route path="/viajes/informacion/:id" element={<h1>Soy la información viajes</h1>} />
            <Route path="/viajes/gastos/:id/añadir" element={<NewExpenseForm />} />
            <Route path="/viajes/gastos/:id" element={<p>vista de gastos</p>} />
            <Route path="/viajes/:id/planes/:id/detalle" element={<PlanDetails />} />
        </Route>

        <Route path='*' element={<h1>Error 404 (no soy una tetera pero ojalá)</h1>} />

    </Routes>
    )

}

export default AppRoutes