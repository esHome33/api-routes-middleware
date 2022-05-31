import useSWR from 'swr'
import Head from 'next/head'

const fetcher = (url) => fetch(url).then((res) => res.text())

export default function Index() {
  const { data, error } = useSWR('/api/cookies', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <h2>
        Résultat du cookie placé :
      </h2>
      {` Cookie from response: "${data}"`}
    </div>
}
