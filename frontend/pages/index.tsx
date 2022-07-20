import { NextPage } from "next";
import {useEffect, useRef} from "react";
import {io} from "socket.io-client";

const Index: NextPage = () => {
  const socketRef = useRef(null)
  useEffect(() => {
    socketRef.current = io('http://localhost:6001')
  })
  return (
      <div>Base</div>
  );
};
export default Index;
// export const getStaticProps: GetStaticProps = async () => {
//   const data = await axios.get("/").then((res) => res.data);
//   console.log(data);
//   return {
//     props: {},
//     revalidate: 20,
//   };
// };
