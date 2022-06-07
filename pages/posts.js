import { useEffect } from 'react'
import styles from '../styles/Posts.module.scss'

export async function getServerSideProps() {
	const result = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await result.json()

	return {
		props: {
			posts: data,
		},
	}
}

export default function Users({ posts }) {
	useEffect(() => {
		console.log(posts)
	}, [])

	return (
		<div className={styles.postsPage}>
			{posts.map(post => (
				<div className={styles.postTile} key={post.id}>
					<h2>
						{post.id}. {post.title}
					</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	)
}
