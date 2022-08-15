import Head from "next/head";
import Link from "next/link";

const complete = () => {
    return (
        <div>
            <Head>
                <title>complete</title>
            </Head>
            <Link href="/">ホームへ戻る</Link>
        </div>
    );
}

export default complete;