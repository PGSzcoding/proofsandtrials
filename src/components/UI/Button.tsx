import { Link } from "react-router-dom";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

type Variant = "primary" | "secondary" | "outline";

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkProps = BaseProps & {
  to: string;
  href?: never;
};

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: never;
  };

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    to?: never;
  };

type Props = LinkProps | AnchorProps | ButtonProps;

const variants = {
  primary: "bg-sky-500 text-white hover:bg-sky-600",
  secondary: "bg-white text-slate-900 hover:bg-sky-400 hover:text-white",
  outline:
    "border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-medium transition duration-300 cursor-pointer";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`;
  const { to,href, ...rest } = props;

  if ("to" in props) {
    return (
      <Link to={to} {...rest} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in props) {
    return (
      <a href={href} {...rest} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}