import { Outlet } from "react-router-dom"
import { PackOpeningProvider } from "../context/PackOpeningContext"

export default function Root() {
  return (
    <PackOpeningProvider>
      <Outlet />
    </PackOpeningProvider>
  )
}
