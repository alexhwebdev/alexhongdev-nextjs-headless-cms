import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
// import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/navigation";


export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    gsap.to(
      transitionElement,
      // { 
      //   delay: 1,
      //   duration: 1,
      //   opacity: 0,
      //   ease:"back.out",
      // },
      {
        // delay: 1,
        duration: 1.3,
        opacity: 0,
        zIndex: '0',
        // ease: "sine.inOut",
        ease:"back.out",
      }
    );
  }
};
type HrefObject = {
  pathname: string;
  query: {
    id: string;
  };
};
export const animatePageOut = (
  href: HrefObject, 
  router: AppRouterInstance
) => {
  const animationWrapper = document.getElementById("transition-element");
  const { pathname, query } = href;

  if (animationWrapper) {
    gsap.to(
      animationWrapper,
      // { 
      //   delay: 1,
      //   duration: 2,
      //   opacity: 1,
      //   // ease:"back.out",
      //   // onComplete: () => {
      //   //   router.push(href);
      //   // },
      // },
      {
        // delay: 1,
        duration: 1.3,
        opacity: 1,
        ease:"back.out",
        zIndex: '10050',
        onComplete: () => {
          // router.push(href);
          // router.push({ pathname, query });
          // router.push(`http://localhost:3000/${pathname}?query=${query}`)
          router.push(`http://localhost:3000/${pathname}?id=${query.id}`)
          // http://localhost:3000/allProjects?id=ibd-projects

          // T href  { pathname: '/allProjects', query: { id: 'ibd-projects' } }

        },
      }
    );
  }
};
