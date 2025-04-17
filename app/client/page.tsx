import { Characters } from "./characters"

export default function ClientPage() {
  return (
    <div className="border-2 border-emerald-500 p-8 space-y-4">
      <p>
        On this page we're going to fetch some data client-side. You can verify
        this by looking at the network tab in your dev inspector.
      </p>
      <p>
        If the data fetching code inside the <code>&lt;Characters /&gt;</code>{" "}
        component tried to import from the <code>@lib/ram-serveronly</code>{" "}
        module, there would've been an error, because it's marked with{" "}
        <code>import "server-only"</code>.
      </p>
      <Characters />
    </div>
  )
}
