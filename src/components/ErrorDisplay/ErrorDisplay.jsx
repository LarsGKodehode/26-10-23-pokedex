export function ErrorDisplay(props) {
  const { message } = props

  return (
    <div>
      <p>Error:</p>
      <p>{
        message ? message : "Internal error"
      }</p>
    </div>
  )
}