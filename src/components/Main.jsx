import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Main = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(12);

  useEffect(() => {
    const Url = 'https://api.jikan.moe/v4/seasons/now';
    const fetchData = async () => {
      try {
        const response = await axios.get(Url);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    if (count >= data.length) {
      setCount(12);
    } else {
      setCount((prevCount) => prevCount + 12);
    }
  };

  return (
    <div className='w-full h-screen mt-5'>
      <h1 className='text-white text-3xl font-thin'>Latest Releases</h1>
      {/* Content Wrapper */}
      <div className='py-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          {/* Contents */}
          {data.slice(0, count).map((anime) => (
            <div key={anime.mal_id} 
              className='w-full md:max-w-[400px] max-h-[200px] overflow-hidden relative group'>
              <div 
                className='w-full h-full absolute bg-gradient-to-t from-black/50 
                to-white/0 pointer-events-none z-1'></div>
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className='w-full object-cover cursor-pointer duration-500 group-hover:scale-105' 
              />
              <p 
                className='absolute bottom-2 z-2 left-2 text-sm
                text-white font-bold underline-offset-3
                decoration-2 hover:underline'>
                {anime.title.length > 30 ? anime.title.slice(0, 30) + "..." : anime.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-center pb-5'>
        {data.length > 12 && (
          <button 
            onClick={handleClick}
            className='bg-red-700 hover:bg-red-800 py-1 px-3 text-white font-medium cursor-pointer'>
            {count >= data.length ? "Show Less" : "See More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Main;
