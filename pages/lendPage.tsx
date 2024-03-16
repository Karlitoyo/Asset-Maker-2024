import Link from "next/link";
import Layout from "../components/Layout";
import LendHeader from "../components/lendPage/lendPageHeader";
import LendMain from "../components/lendPage/layout/mainSection";
import LendMid from "../components/lendPage/layout/midSection";

const LendPage = () => (
  <Layout>
    <LendHeader />
    <LendMain />
    <LendMid />
  </Layout>
);

export default LendPage;