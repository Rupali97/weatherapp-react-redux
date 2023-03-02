import { useState } from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateCity, updateLoading, updateWeather } from "../state/weather/actions";
import { fetchCoords, fetchCurrentAndForecast } from "../utils/apiCaller";
import { IWeatherData1, IWeatherState } from "../interfaces/weather";

export default function FormSearch() {

    const toast = useToast();
    const dispatch = useDispatch();
    
    const [cityName, setCityName] = useState<string>(localStorage.getItem('city') || '');
    const [inputStatus, setInputStatus] = useState<boolean>(true);

    const searchCity = () => {
        const city = cityName.trim().toLowerCase()

        if (!city) {
            toast({
                title: 'Enter a city!!',
                position: 'top',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            setInputStatus(false);
            
            return setCityName('');
        }
        localStorage.setItem('city', city)
        dispatch(updateLoading({loading: true}))

        fetchCoords(city)
            .then((res) => {
                let lat = res.data[0].lat
                let lon = res.data[0].lon

                fetchCurrentAndForecast(lat, lon)
                    .then((res) => {
                        dispatch(updateWeather({data: res.data}));
                    })
                    .catch((err) => {
                        let errMsg = "City not found!"

                        toast({
                            title: errMsg,
                            position: 'top',
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        });
                        dispatch(updateWeather({data: {}}));
                    })
                    .finally(() => dispatch(updateLoading({loading: false})))
            })
            .catch((err) => console.log("fetchCoords", err))

        dispatch(updateCity({city}));
        setCityName('');

    }

    const handleSubmit = () => {
        searchCity();
    }

    if (cityName && !inputStatus) setInputStatus(true);
    

    return (
        <HStack mt='4' mb='4'>
            <Input
                h='46'
                borderColor={!inputStatus ? 'red.300' : 'transparent'}
                variant='filled'
                placeholder='Enter city name...'
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
            />
            <Button
                colorScheme='blue'
                px='8'
                pl='10'
                pr='10'
                h='46' 
                type='submit' onClick={handleSubmit} >Search
            </Button>
        </HStack>
    )
}