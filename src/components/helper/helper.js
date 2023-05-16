const url = 'https://swapi.py4e.com/api/people/';

const fetchData = async () => {
  try {
    const randomId = Math.floor(Math.random() * 82) + 1; 
    const response = await fetch(`${url}${randomId}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch character data');
  }
};

export default fetchData;
