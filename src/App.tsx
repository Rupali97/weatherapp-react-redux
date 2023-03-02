import { Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

import { FaSun, FaMoon } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import CardSkeleton from './components/CardSkeleton';
import CardWeather from './components/CardWeather';
import FormSearch from './components/FormSearch';
import SocialMedia from './components/SocialMedia';
import store from './state';
import { updateCity } from './state/weather/actions';
import { useGeCity, useGetLoading, useGeWeatherData } from './state/weather/hooks';
import { fetchCoords, fetchCurrentAndForecast } from './utils/apiCaller';

const isProduction = true

function App() {

  const loadingState = useGetLoading()
  const dataState = useGeWeatherData()
  const cityState = useGeCity()
  const { colorMode, toggleColorMode } = useColorMode();
  store.subscribe(() => {
    localStorage.setItem('city', cityState);
  });



  const getUi = () => {
    const checkCity = Object.keys(dataState).length > 0

    if(loadingState) return <CardSkeleton />
    else if(checkCity) return <CardWeather forecast={dataState} />
    else return null
  }
  

  return (
    <VStack p={4} minH='100vh' pb={28}>
       <IconButton 
        aria-label='Change theme'
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound={true} 
        size='md'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading
        p='5'
        fontWeight='extrabold'
        size='xl'
        bgGradient='linear(to-l, teal.300, blue.500)'
        bgClip='text'
      >
        Weather forecast
      </Heading>
      <FormSearch />
      { getUi() }
      <SocialMedia />
    </VStack>
  );
}

export default App;

if (isProduction) console.log = function () { };
