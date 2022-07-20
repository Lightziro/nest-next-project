import { NextPage } from "next";
import React, { Fragment } from "react";
import { FOOTER_ITEMS } from "../../items/menu";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer: NextPage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <footer>
        <div className="items-container">
          {FOOTER_ITEMS.map((item) => (
            <Link href={item.value}>
              <a className={item.value === router.asPath ? "active" : ""}>
                {item.label}
              </a>
            </Link>
          ))}
        </div>
        <div className="copyright"> &copy; 2022 «АйТиХаб».</div>
      </footer>
    </Fragment>
  );
};
export default Footer;
