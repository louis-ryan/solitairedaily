import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Solitaire from './solitaire.js';

const buttonStyle = {width: "400px", textAlign: "center", padding: "8px", border: "1px solid", cursor: "pointer", marginBottom: "4px"}

export default function Home() {

  const router = useRouter();
  const { route } = router.query;

  let Game

  if (route?.[0] === 'solitaire') {
    Game = Solitaire;
  } else if (route?.[0] === 'spider') {
    Game = UserPosts;
  }

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

          <Link href="/mahjong">
            <div style={buttonStyle}>{"Play mahjong"}</div>
          </Link>
        </div>


        {Game ? <Game /> : <h3>Please select a User section.</h3>}

      </main>
    </div>
  )
}
