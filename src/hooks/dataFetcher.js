import { useState, useEffect } from 'react';
import { getStories } from '../utils/apis';

const useDataFetcher = (type) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
/*   const [currentPage, setCurrentPage] = useState(1);
  const [storyPerPage, setStoryPerPage] = useState(10); */

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

/*   const indexOfLastStory = currentPage * storyPerPage;
  const indexOfFirstStory = indexOfLastStory - storyPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory); */

  return { isLoading, stories };
};

export default useDataFetcher;