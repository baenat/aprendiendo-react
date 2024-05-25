import { useEffect, useState } from 'react'

// Recuperar la imagen cada vez que cambia el fact
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?color=green`)
      .then(response => {
        const { url } = response
        console.log({ response })
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
