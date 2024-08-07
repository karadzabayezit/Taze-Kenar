import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const GoToButton = ({
  children,
  link,
  className,
}: {
  children: ReactNode;
  link?: string;
  className?: string;
}) => {
  if (link)
    return (
      <Link to={link} className={`${styles.button} ${className}`}>
        {children}
      </Link>
    );
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
};

export default GoToButton;
