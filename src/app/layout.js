import '@/app/globals.css'

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
}

const RootLayout = ({ children }) => (
	<html lang='en'>
		<body className='flex flex-col min-h-screen'>
			<header className='bg-gray-100 text-black py-4'>
				<h1 className='text-center text-lg'>Empress Origin</h1>
			</header>

			{/* Main content should flex-grow */}
			<main className='flex-grow bg-gray-200 text-red-900'>{children}</main>

			<footer className='bg-gray-100 text-black py-4'>
				<p className='text-center text-sm text-black'>
					© 2024 Empress Origin. All Rights Reserved.
				</p>
			</footer>
		</body>
	</html>
)

export default RootLayout
