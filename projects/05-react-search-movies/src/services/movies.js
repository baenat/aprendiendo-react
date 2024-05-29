const API_KEY = '7286b51'

export const searchMovies = async ({ search }) => {
  if (search === '') return

  try {
    const data = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await data.json()

    const movies = json.Search

    return movies?.map(movie =>
      ({
        key: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
      }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
