import Link from 'next/link'
import Layout from '../components/Layout'
import HomeHeader from '../components/homePage/headerSection'
import HomeMain from '../components/homePage/layout/mainSection'
import HomeMid from '../components/homePage/layout/midSection'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <HomeHeader />
    <HomeMain />
    <HomeMid />
  </Layout>
)

export default IndexPage