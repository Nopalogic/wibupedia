import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Wibupedia',
	description: 'Website for make anime reviews',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				<main className='mx-4 mt-16'>{children}</main>
			</body>
		</html>
	);
}
