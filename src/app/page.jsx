import Link from 'next/link';
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '../utils/api';
import AnimeCard from '../components/AnimeCard';

export default async function Home() {
	const topAnime = await getAnimeResponse('top/anime', 'limit=8');
	let recommendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry');
	recommendedAnime = reproduce(recommendedAnime, 10);

	return (
		<>
			<section className="mx-16 mb-4">
				<div className="flex justify-between items-center p-4">
					<h1 className="text-2xl font-bold text-slate-100">Most Popular</h1>

					<Link href={'/popular'} className="md:text-md text-sm font-semibold text-slate-300 hover:text-slate-500 transition-all">
						See more
					</Link>
				</div>
				<div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:px-4">
					{topAnime.map((anime, index) => (
						<AnimeCard key={index} animeUrl={`/anime/${anime.mal_id}`} title={anime.title} eps={anime.episodes} imgUrl={anime.images.webp.image_url} />
					))}
				</div>
			</section>
			<section className="mx-16 mb-4">
				<div className="flex justify-between items-center p-4">
					<h1 className="text-2xl font-bold text-slate-100">Recommended for you</h1>
				</div>
				<div className="grid md:grid-cols-5 grid-cols-1 gap-4 md:px-4">
					{recommendedAnime.data.map((anime, index) => (
						<AnimeCard key={index} animeUrl={`/anime/${anime.mal_id}`} title={anime.title} imgUrl={anime.images.webp.image_url} />
					))}
				</div>
			</section>
		</>
	);
}
