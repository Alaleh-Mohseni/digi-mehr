import '../globals.css'

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='fa'>
			<body>{children}</body>
		</html>
	)
}
