import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'

import Editor from '../src/components/Editor'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Training App</title>
      <meta name="description" content="Training App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <div className={styles.main__text}>
        <h1>Training App</h1>
        <h3>content goes here</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer tempor dolor maximus interdum interdum. 
          Phasellus lobortis augue sollicitudin accumsan placerat.ctor lorem.
        </p>
      </div>

        <Editor/>

    </main>

    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stat your Strength{'©'}
        </a>
      </footer>
    </div>
  )
}
