export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      {children}
    </div>
  )
}
