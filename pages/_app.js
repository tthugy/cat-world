import '../styles/globals.css'
import wrapper from './configureStore.js'
import PropTypes from 'prop-types'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
