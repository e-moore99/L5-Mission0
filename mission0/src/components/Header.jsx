import React from 'react'
import styles from './Header.module.css'
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { deepPurple, blue } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
          main: deepPurple[400],
        },
        secondary: {
          main: blue[300],
        },
      },
})

export default function Header() {
  return (
    <>
    <div className={styles.header}>
        <div className={styles.headerLeft}>Hello</div>
        <div className={styles.headerRight}>
        <Button variant="text" color="primary">About</Button>
        <Button variant="text">Contact</Button>
        <Button variant="text">FAQ</Button>
        <Button variant="outlined">Login</Button>
        </div>
    </div>
    </>
  )
}
