import { Comment } from "./comment"
import styles from "./Post.module.css"

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div className={styles.authorInfo}>
            <strong>Fedrerico Forró</strong>
            <span>back-end developer</span>
          </div>
        </div>

        <time datetime="2022-05-11 01:58:41">publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>iubuiuduiwd </p>
        <p>grgrjyjthjbfsdehjbsbhjsd</p>
        <p>
          <a href="">bhjbhebewbhkn </a>
        </p>
        <p>
          <a href=""> ddddawdddddddddddda </a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
