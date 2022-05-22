import Layout from '../components/layouts/main.jsx'
const Website = ({ Component, pageProps, router }) => {
  return(
    <Layout router = {router}>
    <Component {...pageProps}/>
    </Layout>
  )
}

export default Website
