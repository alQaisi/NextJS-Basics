import Link from "next/link";

function Page404() {
    return (
        <div>
            <h1>This page is not exist</h1>
            <Link href="/"><h3 >Home</h3></Link>
        </div>
    );
}

export default Page404;