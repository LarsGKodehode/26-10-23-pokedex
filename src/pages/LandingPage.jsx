import { PokemonCard } from '../components/PokemonCard/PokemonCard'
import { Loading } from '../components/Loading/Loading'
import { ErrorDisplay } from '../components/ErrorDisplay/ErrorDisplay'
import style from './LandingPage.module.css'
import { useFetch } from '../hooks/useFetch'


export function LandingPage() {
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon"

  const { data, isLoading, error } = useFetch(pokemonApi)

  let pokemonList
  if (data !== null) {
    pokemonList = data.results
  }

  return (
    <div className={style.App}>
      <header>
        <h1>Pokedex</h1>
      </header>

      <main className={style.main}>
        <h2>List of Pokemons</h2>

        {
          isLoading ? <Loading />
            : error ? <ErrorDisplay />
              : (
                <ul className={style.pokemonList}>
                  {
                    pokemonList.map((pokemon) => {
                      return (
                        <li key={pokemon.name}>
                          <PokemonCard
                            name={pokemon.name}
                            detailsUrl={pokemon.url}
                          />
                        </li>
                      )
                    })
                  }
                </ul>
              )
        }
      </main>

      <footer>
        <p>Kodehodet</p>
      </footer>
    </div>
  )
}