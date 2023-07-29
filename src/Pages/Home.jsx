import { useState } from 'react';
import {  searchForShows ,searchForPeople} from './../api/tvmaze';
import SearchForm from '../Components/SearchForm';

const Home = () => {
  
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({q, searchOption}) => {

    try {
      setApiDataError(null);

    if(searchOption === 'shows'){
      const result = await searchForShows(q);
      setApiData(result);
    }else{
      const result = await searchForPeople(q);
      setApiData(result);
    }
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData[0].show 
      ? apiData.map(data =><div key={data.show.id}>{data.show.name} </div>) 
      :apiData.map(data =>(
      <div key={data.person.id}>{data.person.name} </div>));
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch}/>
      
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
