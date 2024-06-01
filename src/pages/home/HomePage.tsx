// import { useContext, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import { AbsoluteBg } from "../../components/absolute-bg/AbsoluteBg"
import { HomeLoaderResult } from "./loader"
import { useEffect } from "react"
// import PackOpeningContext from "../../context/PackOpeningContext"

export default function HomePage() {
  const { pack } = useLoaderData() as HomeLoaderResult

  useEffect(() => {
    console.log(pack)
  }, [pack])
  // const { state } = useContext(PackOpeningContext)!

  return (
    <div className="flex min-h-screen flex-col w-screen relative">
      <AbsoluteBg />
    </div>
  )
}
