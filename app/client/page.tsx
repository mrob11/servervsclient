import { Characters } from "./characters"

export default function ClientPage() {
  return (
    <div className="border-2 border-emerald-500 p-8">
      <p>
        On this page we're going to fetch some data client-side. You can verify
        this by looking at the network tab in your dev inspector.
      </p>
      <Characters />
    </div>
  )
}
