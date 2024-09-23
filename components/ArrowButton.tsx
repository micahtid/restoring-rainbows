"use client";

import React, { useState, useEffect, useRef } from 'react';
import { interpolate } from 'flubber';
import { div } from 'framer-motion/client';

interface ArrowButtonProps {
  text: string;
  link: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, link }) => {
  return(
    <a 
    className='flex justify-center items-center gap-x-2'
    href={link}>
      <p className='text-lg text-primary font-semibold'>{text}</p>
      <svg viewBox="0 0 74 17" width="74px" height="17px">
        <path d="
          M20.7.3l-1.3 1.3 6.7 
          6H0v1.8h26.1l-6.7 
          6 1.3 1.3 
          9.4-8.2z" 
          fill="#73a0e1">
        </path>
      </svg>
    </a>
  )
};

export default ArrowButton;
