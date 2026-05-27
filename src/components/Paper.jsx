import clsx from "clsx";
import { m } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Paper({ as = "div", className, torn = false, hover = true, children, ...props }) {
  const Tag = m[as] ?? m.div;

  return (
    <Tag
      className={clsx("paper-surface", torn && "torn-edge", hover && "paper-hover", className)}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Washi({ children, dark = false, className, style }) {
  return (
    <span className={clsx("washi", dark && "dark", className)} style={style}>
      {children}
    </span>
  );
}

export function HandNote({ children, className, style }) {
  return (
    <span className={clsx("hand-note", className)} style={style}>
      {children}
    </span>
  );
}
