import { animated, useSpring } from "@react-spring/web";

export default function Component1() {
  const props = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  });

  return (
    <>
      <animated.div style={props}>
        <div style={c1Style}>
          <h1>Component1</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </animated.div>
    </>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};
