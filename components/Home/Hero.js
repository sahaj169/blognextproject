import React from 'react'
import classes from "./hero.module.css"
import Image from "next/image"
export default function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}><Image src="/images/site/sahaj.JPG" alt="An image showing Max" width={300} height={300}/></div>
        <h1>Hi, I'm Sahaj</h1>
        <p>I blog about web development - expecially frontend frameworks like Angular or React.</p>
    </section>
  )
}
