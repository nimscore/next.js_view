import Head from "next/head";
import Link from "next/link";


const Layout = ({ title, description = '', children}) => {
	return (
		<>
			<Head>
				<title>{title} || Brewmaster Guid</title>
				<link rel="icon" href="/img/favicon.png" type="image/png" />
				<meta
					name='description'
					content={description || 'Гайды на хмелевара'}
				/>
				<meta
					property='og:description'
					content={description || 'Гайды на хмелевара'}
				/>
			</Head>
			
			<header>
				<img  src='/img/logo.png' alt='logo' />
				
				<Link href='/'>
					Главная
				</Link>
			</header>
			
			<div className="container">
				{children}
			</div>
			
			<footer>
				nims &copy; Warcraft Guide
			</footer>
			
		</>
	)
}

export default Layout