import Image from "next/image";
import Styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={Styles.header}>
      <div className={Styles.links}>
        <Image src="/bankerKlub-logo.svg" width={100} height={20} alt="logo" />
        <p>for Bankers</p>
        <Link href="/corporation">for Corporations</Link>
        <p>Services</p>
      </div>
      <div className={Styles.buttons}>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
}
