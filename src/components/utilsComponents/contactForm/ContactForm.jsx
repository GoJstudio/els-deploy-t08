'use client';

import { useState } from 'react'
import styles from './contactForm.module.scss';

const ContactForm = ({children}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      phone: String(event.target.phone.value),
      message: String(event.target.message.value),
    }

    // const response = await fetch("http://localhost:3000/api/contact", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(data),
		// })
  }

  return (
    <div className={styles.contact}>
      {children}

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.name}>
          <label htmlFor='name'>Name</label>
          <input
            type="text"
            id='name'
            required
            placeholder='Leave your name'
          />
        </div>

        <div className={styles.email}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            required
            placeholder='Leave your email'
          />
        </div>

        <div className={styles.phone}>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            id='phone'
            placeholder='Leave your phone number'
          />
        </div>

        <div className={styles.message}>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            rows={7}
            placeholder='Leave your message'
          />
        </div>

        <button
          type="submit"
          // disabled={loading}
          className={styles.btn}
          // className={`${styles.btn} ${styles.active}`}
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
export default ContactForm