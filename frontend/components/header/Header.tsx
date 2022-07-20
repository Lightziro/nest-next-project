import { NextPage } from "next";
import { HEADER_ITEMS } from "../../items/menu";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useTransition, animated } from "react-spring";

const Header: NextPage = () => {
  const router = useRouter();
  const transitions = useTransition(HEADER_ITEMS, {
    from: { opacity: 0, transform: `translate3d(0,-100%,0)` },
    enter: { opacity: 1, transform: `translate3d(0,0%,0)` },
    delay: 50,
  });
  return (
    <div className="parent-header">
      <header>
        {transitions((style, item) => (
          <Link href={item.value}>
            <animated.a
              style={{ ...style }}
              className={`item ${item.value === router.asPath ? "active" : ""}`}
            >
              {item.label}
            </animated.a>
          </Link>
        ))}
      </header>
    </div>
  );
};
export default Header;
