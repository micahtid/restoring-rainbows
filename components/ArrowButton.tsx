import React from 'react';
import './arrow-button.css'; // Import the CSS file

interface ArrowButtonProps {
  text: string;
  link: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, link }) => {
  return(
    <a 
    className='flex justify-center items-center gap-x-1
    arrow-link'
    href={link}>
      <p className='uppercase dynamic-text text-primary font-semibold font-accent2'>{text}</p>
      <svg 
      id="right"
      className='arrow-svg scale-75'>
        <path d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z" fill="#73a0e1"></path>
      </svg>
    </a>
  )
};

export default ArrowButton;