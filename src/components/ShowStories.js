import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';

const ShowStories = ({ type }) => {
    const { isLoading, stories } = useDataFetcher(type ? type : 'top');

  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ShowStories;