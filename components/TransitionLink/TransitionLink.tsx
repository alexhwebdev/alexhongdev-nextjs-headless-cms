"use client";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/lib/animations";


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

export default function TransitionLink(
  {
    href,
    label,
  }: 
  {
    href: {
      pathname: string;
      query: {
        id: string;
      };
    },
    label: string;
  }
) {
  // console.log('TransitionLink href ', href)

  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (
    <button
      className=""
      onClick={handleClick}
      style={{
        color: 'silver',
        position: 'absolute',
        zIndex: '10005'
      }}
    >
      {label}
    </button>
  );
}