import styles from '../styles/NavMenu.module.scss'
import Link from 'next/link'
export default function NavMenu() {
	return (
		<div className={styles.navMenu}>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/users'>
				<a>Users</a>
			</Link>
			<Link href='/posts'>
				<a>Posts</a>
			</Link>
		</div>
	)
}
