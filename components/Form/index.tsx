import React, { useState } from 'react';
import { FormControl, InputLabel, Input, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Modal from '../Modal';
import Backdrop from '../Backdrop';
// import '../styles/form.css';
import styles from './form.module.css';

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [showModal, toggleModal] = useState(false);

  //Modal Handlers
  function deleteHandler() {
    toggleModal(true);
  }
  function closeModalHandler() {
    toggleModal(false);
  }

  const formSubmit = (data: any) => {
    deleteHandler();
    let templateParams = {
      email: data.email,
      from_name: data.name,
      message: data.message
    };

    // For sending an email when Form is submitted
    emailjs.send('service_80k1rge', 'template_vgjw1uj', templateParams, process.env.REACT_APP_EMAILJS_KEY).then(
      (res: any) => console.log(res.text),
      (err: any) => console.log(err.text)
    );
  };

  return (
    <div className={styles.formContainer} id='contact'>
      <form className={styles.contactForm} action='' onSubmit={handleSubmit((data) => formSubmit(data))}>
        <div className={styles.contactHeader}>
          <h1>Contact Me</h1>
          <i className='far fa-id-card'></i>
        </div>
        <svg id='visual' viewBox='0 0 645 600' width='540' height='500' xmlns='http://www.w3.org/2000/svg' version='1.1'>
          <rect x='0' y='0' width='0' height='100' fill='#ffffff'></rect>
          <g transform='translate(391.2271740935551 270.99777235862325)'>
            <path
              d='M110 -152.3C145.2 -125.9 178.2 -97.2 206.4 -56.2C234.6 -15.2 258.1 38.1 239.8 72.9C221.6 107.6 161.6 123.8 114.7 158.6C67.8 193.3 33.9 246.7 -4.1 252.3C-42.1 258 -84.2 216 -104.2 172.4C-124.2 128.9 -122 83.9 -124.3 47.4C-126.5 10.8 -133.1 -17.3 -124.2 -39C-115.2 -60.6 -90.7 -75.8 -67.4 -106.1C-44.1 -136.3 -22 -181.7 7.7 -192.3C37.4 -202.8 74.8 -178.7 110 -152.3'
              fill='#0F1538'></path>
          </g>
        </svg>
        <FormControl variant='filled'>
          <InputLabel htmlFor='email-input'>Email address</InputLabel>
          <Input {...register('email')} type='email' required id='email-input' />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='name-input'>Name</InputLabel>
          <Input {...register('name')} required id='email-input' />
        </FormControl>
        <FormControl>
          <TextField {...register('message')} required id='textfield' label='Message' variant='outlined' multiline minRows='4' />
        </FormControl>
        <button className='formButton' type='submit'>
          Send
        </button>
      </form>
      {showModal && <Modal onClick={closeModalHandler} />}
      {showModal && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}
