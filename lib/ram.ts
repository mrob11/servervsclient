export async function getCharacters() {
  console.log("Fetching characters on the client.")
  const response = await fetch("https://rickandmortyapi.com/api/character")
  return response.json()
}
