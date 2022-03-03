import React from 'react'
import styles from './styles/Flexbox.module.css'

const Flexbox = () => {
  return (
      <div className={styles.container}>
          <div className={styles.flexLeft}>
          </div>
          <div className={styles.flexRight}>
              <div className={styles.equal}>
                  <div className={styles.boxSm} />
                  <div className={styles.boxSm} />
                  <div className={styles.boxSm} />
                  <div className={styles.boxSm} />
                  <div className={styles.boxSm} />
              </div>
              <div className={styles.direction}>
                <div className={styles.equal}>
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                </div>  
                <div className={styles.equal}>
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                </div>
                <div className={styles.equal}>
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                    <div className={styles.boxSm} />
                </div>
              </div>
          </div>
        </div>
    )
}

export default Flexbox;