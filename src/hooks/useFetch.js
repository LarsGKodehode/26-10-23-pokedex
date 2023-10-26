import { useEffect, useState } from "react"

export function useFetch(url) {
  const [data, setData] = useState(null)
  const error = false
  
  useEffect(
    () => {
      fetch(url)
        .then(respons => respons.json())
        .then(responseData => setData(responseData))
    },
    [url]
  )


  return {
    data,
    isLoading: data ? false : true,
    error
  }
}