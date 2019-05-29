import Layout from '../components/MyLayout.js'

export default function Index() {
  const indexPageContent = <p>Hello Next.js</p>
  return (
    <Layout content={indexPageContent} />
  )
}