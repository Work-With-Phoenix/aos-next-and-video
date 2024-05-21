'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import VideoLoop from '@/components/VideoLoop';

export default function Home() {
  useEffect(()=>{
    AOS.init({
      offset: 100,
    });

  },[]);
  return (
   <div className='max-w-sm mx-auto mt-10 flex flex-col gap-10'>
    <div data-aos="fade-up" className='bg-white border border-slate-200 rounded shadow p-4'>
      <h1 className='text-2xl font-bold text-gray-800'>Hello World</h1>
      <p className='text-gray-600'>This is a test</p>
    </div>
    <div data-aos="fade-left" className='bg-white border border-slate-200 rounded shadow p-4'>
      <h1 className='text-2xl font-bold text-gray-800'>Hello World</h1>
      <p className='text-gray-600'>This is a test</p>
    </div>
    <div data-aos="fade-right" className='bg-white border border-slate-200 rounded shadow p-4'>
      <h1 className='text-2xl font-bold text-gray-800'>Hello World</h1>
      <p className='text-gray-600'>This is a test</p>
    </div>
    <div className="flex justify-center items-center">
      <VideoLoop
        src="/video.mp4"
        className={"w-full max-w-md"}
       />
    </div>
   </div>
   
  );
}
