import type { NextPage } from "next"
import { useEffect } from "react"
import { useRouter } from "next/router"

const Home: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.push("/feed")
    }, [router])

    return <main className={"text-3xl"}></main>
}

export default Home
