
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&family=Mulish:wght@700&display=swap');
</style>
import { Mulish } from 'next/font/google'
import styles from "/src/styles/styles.css"
const mulish = Mulish({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={mulish.className}>
      <Component {...pageProps} />
    </main>
  )
}