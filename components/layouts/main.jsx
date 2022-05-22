import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return(
    <Box align = "center" p = { 0 } m = { 0 }>
    <Head>
      <meta name = "viewport" content = "width=device-width,initial-scale=1"/>
      <title>Tris - Homepage</title>
    </Head>
      <Container display = "flex" alignItems = "center" justifyContent = "center">
    {children}
    </Container>
    </Box>
  )
}
export default Main
