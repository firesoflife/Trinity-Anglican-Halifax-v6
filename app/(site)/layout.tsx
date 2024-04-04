import {
	heading,
	heading2,
	mainContent,
	mainContent2,
	subContent,
	subContent2,
} from './utilities/fonts';
import NavLayout from './components/Nav/layout';
import Footer from './components/Footer/Footer';

type LayoutProps = {
	children: React.ReactNode;
};

export const metadata = {
	title: 'Trinity Anglican Church, Halifax',
	description: 'Generated by create next app',
};

export default function Layout({ children }: LayoutProps) {
	return (
		<div
			className={`
            			// Fonts // 
						${heading.variable} 
						${heading2.variable} 
						${mainContent.variable}
						${mainContent2.variable}
						${subContent.variable}
						${subContent2.variable}
						`}>
			<div className='bg-secondary pt-7'>
				<div>
					<NavLayout />
				</div>

				<main>{children}</main>

				<Footer />
			</div>
		</div>
	);
}