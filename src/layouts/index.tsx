import type { PropsWithChildren } from 'react'

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <main>
        {props.children}
      </main>
    </>
  )
}
