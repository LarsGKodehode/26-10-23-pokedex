import { PokemonCard } from '../components/PokemonCard/PokemonCard'
import { Loading } from '../components/Loading/Loading'
import { ErrorDisplay } from '../components/ErrorDisplay/ErrorDisplay'
import style from './LandingPage.module.css'

export function LandingPage() {

  const isLoading = false
  const error = false

  const pokemonData = [
    { name: "Charmander", imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { name: "Charmander", imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { name: "Charmander", imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { name: "Charmander", imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  ]

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
                    pokemonData.map((pokemon) => {
                      return (
                        <li key={pokemon.name}>
                          <PokemonCard name={pokemon.name} imageUrl={pokemon.imageUrl} />
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