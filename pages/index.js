import Link from 'next/link';
import styles from '../styles/Home.module.css';

const buttonStyle = {width: "400px", textAlign: "center", padding: "8px", border: "1px solid", cursor: "pointer", marginBottom: "4px"}

export default function Home() {

  return (
    <div className={styles.container}>

      <main>
        <h1>
          Solitaire Daily
        </h1>

        <div>

          <Link href="/solitaire">
            <div style={buttonStyle}>{"Play solitaire"}</div>
          </Link>

          <Link href="/spider">
            <div style={buttonStyle}>{"Play spider solitaire"}</div>
          </Link>
        </div>


      </main>
    </div>
  )
}
