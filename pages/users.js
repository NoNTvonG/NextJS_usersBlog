import { useEffect } from 'react'
import styles from '../styles/Users.module.scss'

export async function getServerSideProps() {
	const result = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await result.json()

	return {
		props: {
			users: data,
		},
	}
}

export default function Users({ users }) {
	return (
		<div className={styles.usersPage}>
			{users.map(u => (
				<div className={styles.userTile} key={u.id}>
					<p>Name: {u.name}</p>
					<p>Nickname: {u.username}</p>
					<p>E-mail: {u.email}</p>
				</div>
			))}
		</div>
	)
}
