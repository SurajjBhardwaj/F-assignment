import React, { useEffect } from 'react'
import OneBox from './OneBox';
import { ToastProvider } from '../component/reuse/Toast';

const page = () => {
  return      <ToastProvider>
        <OneBox />
    </ToastProvider>
}

export default page
