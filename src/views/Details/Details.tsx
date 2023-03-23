import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AnimeCard } from '@components/AnimeCard';
import './Details.scss';
import axios from '@utils/axios';
import { IAnimeByGenreResult } from '@interfaces/redux/animes.interface';

const Details: React.FC = () => {
  const { genre } = useParams();
  const [hasMore, setHasMore] = useState(true);
  const [allResults, setAllResults] = useState<IAnimeByGenreResult[]>(Array);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    void fetchData(genre as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  const fetchData = async (genre: string): Promise<void> => {
    try {
      const response = await axios.get(`genre/${genre}`, {
        params: {
          page: currentPage
        }
      });
      setAllResults([...allResults, ...response.data.results]);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      setHasMore(false);
    }
  };

  console.log('🚀 ~ file: Details.tsx:14 ~ allResults:', allResults);
  return (
    <div className="b-details">
      <h3 className="b-details-header">
        Results by <span className="b-header--span">{genre}</span>
      </h3>

      <InfiniteScroll
        className="b-details-container"
        dataLength={allResults.length}
        next={async () => await fetchData(genre as string)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {allResults instanceof Array &&
          allResults.map((item: IAnimeByGenreResult) => (
            <AnimeCard
              key={item.id}
              title={item.title}
              image={item.image}
              released={item.released}
              id={item.id}
            />
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default Details;
