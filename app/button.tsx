export function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-500/80"
    />
  )
}
