import { PokemonCard } from '../components/PokemonCard/PokemonCard'
import style from './LandingPage.module.css'

export function LandingPage() {
  return (
    <div className={style.App}>
      <header>
        <h1>Pokedex</h1>
      </header>

      <main className={style.main}>
        <h2>List of Pokemons</h2>

        <ul className={style.pokemonList}>
          <li><PokemonCard name="Charmander" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" /></li>
          <li><PokemonCard name="Charmander" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" /></li>
          <li><PokemonCard name="Charmander" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" /></li>
          <li><PokemonCard name="Charmander" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" /></li>
          <li><PokemonCard name="Charmander" imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" /></li>
        </ul>
      </main>

      <footer>
        <p>Kodehodet</p>
      </footer>
    </div>
  )
}