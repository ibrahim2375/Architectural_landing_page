import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

//globals styles 
import '../styles/globals.scss'
//layout    
import Layout from '../components/Layouts/Layout'
function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
export default MyApp
