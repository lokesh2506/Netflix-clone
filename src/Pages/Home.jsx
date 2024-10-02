import React from 'react';
import BannerHome from '../components/BannerHome';
import { useSelector } from 'react-redux';
import HorizontalScroll from '../components/HorizontalScroll';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../queries/FetchData';

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);
  const ImageURLhz=useSelector((state)=>state.movieData.imageURLhz)

  const { data: nowPlaying , isLoading: npLoading, error: npError } = useQuery({
    queryKey: ['now-playing'],
    queryFn: () => fetchData("/movie/now_playing"),
  });
  const { data: TopRatedMovie , isLoading: TPMLoading, error: TPMError } = useQuery({
    queryKey: ['Top-rated'],
    queryFn: () => fetchData("/movie/top_rated"),
  });
  const { data: TvPopular , isLoading: TPLoading, error: TPError } = useQuery({
    queryKey: ['Tv-popular'],
    queryFn: () => fetchData("/tv/popular"),
  });
  const { data: onAir , isLoading: OALoading, error: OAError } = useQuery({
    queryKey: ['On The Air'],
    queryFn: () => fetchData("tv/top_rated"),
  });
  return (
    <div>
      <BannerHome />
      <HorizontalScroll data={trendingData} heading={"Trending Data"} tag={'true'} />
      <HorizontalScroll data={nowPlaying} heading={"Now Playing"} tag={'new release'} Loading={npLoading} />
      <HorizontalScroll data={TopRatedMovie} heading={"Top Rated"} tag={'top rated'} Loading={TPMLoading} />
      <HorizontalScroll data={TvPopular} heading={"TV Popular"} tag={'tv popular'} Loading={TPLoading} w500={true} />
      <HorizontalScroll data={onAir} heading={"Most Watched"} tag={'on air'} Loading={OALoading} w500={true} />
    </div>
  );
};

export default Home;
