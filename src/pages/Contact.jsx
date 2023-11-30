import emailjs from '@emailjs/browser';
import { Loader } from '@react-three/drei';
import React, { Suspense, useRef, useState } from 'react';
// import {Fox} from '../models';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  /**
   * 
   * @param {Event} event 
   */
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  /**
   * 
   * @param {Event} event 
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Igor',
        from_email: form.email,
        to_email: 'igor.akira.yuki@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      //TODO: success msg and hide it
      setCurrentAnimation('idle');
      setForm({ name: '', email: '', message: '' });
    }).catch((err) => {
      setIsLoading(false);
      console.log(err);
      //TODO: success msg and hide it
      setCurrentAnimation('idle');
    })
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Talk to me</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John Doe"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John.Doe@mailbox.there"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              className="textarea"
              rows={4}
              placeholder="Let me know how can I help you?"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: .1, far: 1000 }}>
          <directionalLight position={[0, 0, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <Suspense
            fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              rotation={[12.6, -.6, 0]}
              position={[.5, .35, 0]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
