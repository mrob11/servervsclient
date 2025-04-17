"use client"

// import { getCharacters } from "@/lib/ram-serveronly"  // <-- try uncommenting this line
import { getCharacters } from "@/lib/ram"
import { useEffect, useState } from "react"

export function Characters() {
  const [characters, setCharacters] = useState<{ id: number; name: string }[]>()

  useEffect(() => {
    ;(async function () {
      const characters = await getCharacters()

      setCharacters(characters.results)
    })()
  }, [])

  if (!characters) return <div>Fetching characters ...</div>

  return (
    <div className="border-2 border-sky-500 p-8 my-8">
      <ul>
        {characters.map(character => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  )
}
