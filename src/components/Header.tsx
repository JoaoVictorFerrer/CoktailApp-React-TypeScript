import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {

  const [searchFilter, setSearchFilter] = useState({
    ingredient: '',
    category:''
  });

  const { pathname } = useLocation()
  const isHome = useMemo(() => pathname === '/', [pathname]) 

  const fetchCategories = useAppStore(state => state.fetchCategories)
  const categories = useAppStore(state => state.categories)
  const searchRecipes = useAppStore(state => state.searchRecipes)
  const showNotification = useAppStore(state => state.showNotification)


  useEffect(() => {
    fetchCategories()

  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
    setSearchFilter({
      ...searchFilter,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //TODO validacion
    if (Object.values(searchFilter).includes('')) {

     showNotification({text:'Todos los campos son Obligatorios',error:true})
      return
    }
    //Consultar las Recetas
    searchRecipes(searchFilter)
  }

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>

          <nav className="flex gap-4">
                      <NavLink to="/" className={({ isActive }) => 
                isActive ? " text-orange-500 uppercase font-bold text-2xl" : " text-white uppercase font-bold text-2xl"
            }>
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) => 
                isActive ? " text-orange-500 uppercase font-bold text-2xl" : " text-white uppercase font-bold text-2xl"
            }>
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form onSubmit={handleSubmit} className="md:1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-4">
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"  
              >
                Nombre o Ingredientes
              </label>
              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className=" p-3 w-full rounded-lg focus:outline-none "
                placeholder="Nombre o Ingredientes. Ej. Vodka,Tequila,Café"
                value={searchFilter.ingredient}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"  
              >
                Categoria
              </label>
              <select
                id="category"
                name="category"
                className=" p-3 w-full rounded-lg focus:outline-none "
                value={searchFilter.category}
                onChange={handleChange}
              >
                <option value="">--Seleccione--</option>
                {categories.drinks.map(category => (
                  <option key={ category.strCategory} value={ category.strCategory}>{ category.strCategory}</option>
                ))}
              </select>
            </div>
            <input
              type="submit"
              value='Buscar Recetas'
              className="cursor-pointer bg-orange-800  hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}
