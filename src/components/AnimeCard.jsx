import Image from 'next/image';
import Link from 'next/link';

export default function AnimeCard({animeUrl, imgUrl, title, eps }) {
	return (
		<Link href={animeUrl} className="cursor-pointer">
			<figure className="flex flex-col gap-2">
				<Image src={imgUrl} width={174} height={174} alt="" className="h-96 w-full rounded-xl" />
				<div className="flex flex-col">
					<h1 className="text-lg truncate font-bold text-white">{title}</h1>
					{eps && <h2 className="text-base truncate font-normal capitalize text-white">{`${eps} episode`}</h2>}
				</div>
			</figure>
		</Link>
	);
}
