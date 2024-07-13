import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
	title: 'Wibupedia',
	description: 'Website for make anime reviews',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${openSans.className} bg-neutral-900 text-white`}>
				<Navbar />
				<main className='mx-4 mt-16'>{children}</main>
			</body>
		</html>
	);
}
