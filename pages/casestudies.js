import Link from "next/link"
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'

import Layout from '../components/layout'
import client from '../utils/contentful'


const Index = props => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      {
        props.shows.map(i => {
          return(
            <li key={i.sys.ud} onClick={() => Router.push('/p/[id]',`/p/${i.sys.id}`)}>
                <a>{i.fields.title}</a>
            </li>
          )
        })
      }
    </Layout>
  </div>
);

Index.getInitialProps = async () => {
  const data = await client.getEntries()

  return {
    shows: data.items
  };
}

export default Index;
