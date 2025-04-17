import "server-only"

export async function getEpisodes() {
  console.log("Fetching episodes on the server.")
  const response = await fetch("https://rickandmortyapi.com/api/episode")
  return response.json()
}

export async function getCharacters() {
  console.log("Fetching characters on the server.")
  const response = await fetch("https://rickandmortyapi.com/api/character")
  return response.json()
}
