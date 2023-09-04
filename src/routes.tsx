import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import BebidasPage from './pages/Main/Bebidas'
import SorvetesPage from './pages/Main/Sorvetes'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='bebidas' element={<BebidasPage />} />
        <Route path='sorvetes' element={<SorvetesPage />} />
      </Route>
    </Routes>
  )
}
