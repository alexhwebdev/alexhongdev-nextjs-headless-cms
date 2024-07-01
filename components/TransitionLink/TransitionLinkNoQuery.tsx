"use client";
import { useRouter } from "next/navigation";
import { animatePageOut } from "@/lib/animationsNoQuery";


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

export default function TransitionLinkNoQuery(
  { href, label }: {
    href: string;
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