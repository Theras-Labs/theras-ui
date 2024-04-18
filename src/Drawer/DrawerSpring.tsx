import { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import { toast } from "react-toastify";
import styles from "./spring.scss";

export default function DrawerSpring({ open, set, data = [] }) {
  const springApi = useSpringRef();

  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%",
      translateX: "100%",
      opacity: 0,
    },
    to: {
      size: open ? "100%" : "20%",
      translateX: open ? "-80%" : "100%",
      opacity: open ? 1 : 0,
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div>
      <animated.div
        className={`absolute min-w-[400px] bg-gray-800 pr-6`}
        style={{
          ...rest,
          height: window?.innerHeight,
          marginTop: -55,
          zIndex: -1,
          paddingTop: 60,
        }}
        // className={styles.container}
      >
        {transition((style, item, I) => {
          return (
            <animated.div
              onClick={() => {
                toast("Navbar feature is locked due to security issue");
              }}
              // className={styles.item}
              className={`m-2 bg-black p-6 uppercase font-bold cursor-pointer`}
              style={{ ...style }}>
              {item?.name}
            </animated.div>
          );
        })}
      </animated.div>
    </div>
  );
}
