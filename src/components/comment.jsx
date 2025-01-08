import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./comment.module.css"
import { Avatar } from "./avatar"

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/marciovin.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jotaro junior</strong>
              <time datetime="2022-05-11 01:58:41">publicado há 30m</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>ffeffhjy feff sdd 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>30</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
