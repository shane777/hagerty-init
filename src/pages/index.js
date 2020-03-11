import React from "react"
import { Grid } from "semantic-ui-react"

import Layout from "../components/layout"
import Image from "../components/common/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: `100vw`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
