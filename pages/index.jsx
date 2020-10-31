import Link from 'next/link';

function Home() {
    return(
        <>
            <h1>Home</h1>

            <Link href="/about"><a>About</a></Link>
        </>
    )
}

export default Home;
