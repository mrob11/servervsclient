import { getEpisodes } from "@/lib/ram-serveronly"
import { Suspense } from "react"
import { ServerCharacters } from "./server-characters"

export default async function ServerPage() {
  const episodes = await getEpisodes()
  return (
    <div className="p-4 border-2 border-emerald-500 space-y-4">
      <h1 className="font-bold text-3xl">Server Page</h1>
      <p>
        I'm still a server component even though I'm wrapped inside a client
        component.
      </p>
      <p>
        All components in Next.js are server components by default. Even when
        their parents are client components!
      </p>
      <div className="grid grid-cols-2 gap-8 my-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Episodes</h2>
          <p className="mb-4">
            This data was fetched on the server, in the{" "}
            <code>&lt;ServerPage /&gt;</code> component, by{" "}
            <code>getEpisodes()</code>:
          </p>
          {/* <pre>{JSON.stringify(episodes, null, 2)}</pre> */}
          <ul>
            {episodes.results.map(episode => (
              <li key={episode.id}>
                <strong>{episode.episode}:</strong> {episode.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Suspense fallback={<div>Fetching characters on the server ...</div>}>
            <ServerCharacters />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
