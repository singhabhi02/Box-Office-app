import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {  searchForShows ,searchForPeople} from './../api/tvmaze';
import SearchForm from '../Components/SearchForm';
import ShowGrid from '../Components/shows/ShowGrid';
import ActorsGrid from '../Components/actors/ActorsGrid';

const Home = () => {
  const [filter, setFilter] = useState(null)

  const { data: apiData, error: apiDataError } = useQuery({
      queryKey: ['todos', filter],
      queryFn: () => filter.searchOption === 'shows' ? 
      searchForShows(filter.q) : searchForPeople(filter.q) ,
      
      enabled: !!filter
  })


  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({q, searchOption}) => {

setFilter({ q , searchOption})

  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if(apiData?.length === 0){
      return <div>No results</div>
    }
    if (apiData) {
      return apiData[0].show 
      ? <ShowGrid shows={apiData}/>: <ActorsGrid actors ={apiData}/>
    };

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
