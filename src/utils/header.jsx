import Image from 'next/image';
import styles from '../app/page.module.css'
import Link from 'next/link';
export default async function Header() {
return (
<Link href="/contact">
    <div className={styles.header} >
            <Image
                    src="/header.svg"
                    alt="header"
                    width={2000}
                    height={150}
                    priority
                />
                </div>
                </Link>
    )
}
