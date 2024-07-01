import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    gsap.to(
      transitionElement,
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

export const animatePageOut = (
  href: string, 
  router: AppRouterInstance
) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    gsap.to(
      animationWrapper,
      {
        // delay: 1,
        duration: 1.3,
        opacity: 1,
        ease:"back.out",
        zIndex: '10050',
        onComplete: () => {
          router.push(href);
          // router.push(`http://localhost:3000/${pathname}?id=${query.id}`)

          // router.push({ pathname, query });
          // router.push(`http://localhost:3000/${pathname}?query=${query}`)
          // http://localhost:3000/allProjects?id=ibd-projects

          // T href  { pathname: '/allProjects', query: { id: 'ibd-projects' } }

        },
      }
    );
  }
};
