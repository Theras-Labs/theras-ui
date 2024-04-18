import { NeonH4 } from "react-neon-components";

export default function GlowingText({ children, ...rest }) {
  return <NeonH4 {...rest}>{children}</NeonH4>;
}
