import Layout from '../components/MyLayout.js'

export default function About() {
  const aboutPageContent = <p>This is the about page</p>
  return (
    <Layout content={aboutPageContent} />
  )
}