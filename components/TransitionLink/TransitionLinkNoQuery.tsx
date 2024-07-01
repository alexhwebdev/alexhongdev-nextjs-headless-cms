"use client";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/lib/animationsNoQuery";
import { raleway } from '@/app/fonts';
import { montserrat } from '@/app/fonts';
import { inter } from '@/app/fonts';

// interface Query {
//   id: string;
// }
// interface Href {
//   pathname: string;
//   query: Query;
// }
// export interface TransitionLinkProps {
//   href: Href;
//   label: string;
// }

interface TransitionLinkNoQueryProps {
  children: React.ReactNode;
  className: string;
  href: string;
  label: string;
  // onClick: () => void;
  prefetch: boolean;
}

export default function TransitionLinkNoQuery(
  { 
    children,
    className,
    href,
    label,
    // onClick,
    prefetch,
  }: TransitionLinkNoQueryProps
  // : {
  //   className: string;
  //   href: string;
  //   label: string;
  // }
) {
  // console.log('TransitionLink href ', href)

  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button
      className={`${raleway.className}`}
      onClick={handleClick}
      style={{
        // color: 'silver',
        position: 'absolute',
        zIndex: '10005'
      }}
    >
      {label}
    </button>
  );
}