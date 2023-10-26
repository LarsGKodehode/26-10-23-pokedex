import { useEffect, useState } from "react"

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(
    () => {
      fetch(url)
        .then(respons => respons.json())
        .then(responseData => setData(responseData))
        .catch(reason => setError(reason))
    },
    [url]
  )


  return {
    data,
    isLoading: data || error ? false : true,
    error
  }
}