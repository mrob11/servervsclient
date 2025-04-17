import { getCharacters } from "@/lib/ram-serveronly"

export async function ServerCharacters() {
  const characters = await getCharacters()

  return (
    <div className="border-2 border-emerald-500 p-8">
      <h2 className="text-2xl font-bold mb-4">Characters</h2>
      <p className="mb-4">
        This data was fetched inside the <code>&lt;ServerCharacters /&gt;</code>{" "}
        component which was included inside a <code>&lt;Suspense /&gt;</code>{" "}
        boundary:
      </p>
      <ul>
        {characters.results.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  )
}
