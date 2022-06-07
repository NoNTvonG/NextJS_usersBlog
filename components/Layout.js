import NavMenu from './NavMenu'

const Layout = ({ children }) => {
	return (
		<div>
			<NavMenu />
			{children}
		</div>
	)
}

export default Layout
