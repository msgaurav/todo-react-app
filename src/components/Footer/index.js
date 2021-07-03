import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.Footer_wrapper}>
      <div>
        Made with
        {' '}
        <FavoriteIcon className={styles.heart_icon} />
        {' '}
        and Next.js by me
      </div>
      <div>2021 © Copyrights | All Right Reserved</div>
    </footer>
  )
}
