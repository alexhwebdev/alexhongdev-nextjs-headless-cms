"use client";
import { useEffect } from "react";
import { animatePageIn } from "@/lib/animations";



export default function Template(
  { children }: { children: React.ReactNode }
) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="transition-element"
        className=""
        style={{
          width: '100vw', 
          height: '100vh', 
          background: 'white',
          position: 'fixed',
          transition: '1s',
          // zIndex: '10010'
        }}
      ></div>
      {children}
    </div>
  );
}
// Tutorial : https://medium.com/@josiah.webdev/page-transitions-with-gsap-next-js-app-router-5508cee43a80
// Github : https://github.com/josiah-brown/page-transitions-with-gasp-and-next/tree/main