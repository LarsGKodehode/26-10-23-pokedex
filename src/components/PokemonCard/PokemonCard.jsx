import style from './PokemonCard.module.css'

export function PokemonCard(props) {
  const { name, imageUrl } = props

  return (
    <div className={style.card}>
      <img src={imageUrl} alt={name} />
      <p className={style.name}>{name}</p>
    </div>
  )
}