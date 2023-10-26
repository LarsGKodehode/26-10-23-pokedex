import { useFetch } from '../../hooks/useFetch'
import { ErrorDisplay } from '../ErrorDisplay/ErrorDisplay'
import { Loading } from '../Loading/Loading'
import style from './PokemonCard.module.css'

export function PokemonCard(props) {
  const { name, detailsUrl } = props

  const { data, isLoading, error } = useFetch(detailsUrl)

  return (
    <div className={style.card}>
      {
        isLoading ? <Loading />
          : error ? <ErrorDisplay message="Could not find pokemon" />
            : (
              <img src={data.sprites.front_default} alt={name} />
            )
      }
      <p className={style.name}>{name}</p>
    </div>
  )
}