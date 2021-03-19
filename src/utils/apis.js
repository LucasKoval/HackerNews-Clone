import axios from 'axios';
import { BASE_API_URL } from './constants';

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async (type) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/${type}stories.json`);
    const storyIds = response.data;
    //NOTE: Alternative code with destructuring syntax with the same result.
    /* const { data: storyIds } = await axios.get(`${BASE_API_URL}/${type}stories.json`); */
    const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};