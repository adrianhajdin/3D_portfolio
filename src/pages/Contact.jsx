import { Suspense, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import { Fox } from "../models/Fox";
import { Loader } from "../components";

const Contact = () => {
  const form = useRef();
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [foxPosition, setFoxPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setFoxPosition([2, 1, -7.6]); // set the position of the fox for mobile screens
      } else {
        setFoxPosition([0, 0, 0]); // set the default position for larger screens
      }
    };

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Bind the event listener
    window.addEventListener("resize", handleResize);

    // Unbind the event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array to ensure that effect is only run on mount and unmount

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setNotificationMessage("Message sent successfully");
          setCurrentAnimation("hit"); // play hit animation
          // Hide notification after 3 seconds
          setTimeout(() => setNotificationMessage(null), 3000);
        },
        (error) => {
          setNotificationMessage("Failed to send message");
          // Hide notification after 3 seconds
          setTimeout(() => setNotificationMessage(null), 3000);
        }
      );
  };

  return (
    <section className='flex flex-row max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-100px)]'>
      {notificationMessage && (
        <div className='notification'>{notificationMessage}</div>
      )}

      <div className='flex-1 flex flex-col'>
        <h1 className='sm:text-5xl text-3xl font-extrabold sm:leading-snug font-manrope'>
          Get in Touch
        </h1>

        <form className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-[#1D2235] font-semibold'>
            Name
            <input
              type='text'
              id='first_name'
              class='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
              placeholder='John'
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-[#1D2235] font-semibold'>
            Email
            <input
              type='email'
              id='first_name'
              class='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card'
              placeholder='John@gmail.com'
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-[#1D2235] font-semibold'>
            Your Message
            <textarea
              id='message'
              rows='4'
              class='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card'
              placeholder='Write your thoughts here...'
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            class='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            Submit
          </button>
        </form>
      </div>

      <div className='flex-1'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={foxPosition}
              rotation={[12.629, 5.254, 0]}
              scale={[0.45, 0.45, 0.45]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
