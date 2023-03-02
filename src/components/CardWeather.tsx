import { Center, Heading, Stack, Wrap, Image, Text, Box, Badge, Button, useToast,  } from "@chakra-ui/react";
import { CgDetailsMore } from "react-icons/cg";
import { IWeatherData1 } from "../interfaces/weather";
import FiveDayForecastTable from "./FiveDayForecastTable";

type CardWeather = {
    forecast: IWeatherData1
}

export default function CardWeather(props: CardWeather){
    const { current, lat, lon, daily  } = props.forecast
    const cityName = localStorage.getItem('city')
    const toast = useToast();

    function emBreve() {
        toast({
            title: 'Option available soon..!',
            position: 'top',
            status: 'info',
            duration: 4000,
            isClosable: true,
        });
    }
    
    return(
        <>
         <Stack  spacing={2} direction='row'>
            <Wrap mb={'12'} spacing='10px' justify='center'>
                <Box padding='6' boxShadow='lg' minW='xs'>
                    <Center>
                        <Heading display={'flex'} as='h1' size='4xl' isTruncated>
                            { current?.temp.toPrecision(2) }°C
                        </Heading>
                    </Center>  
                    <Center>
                        <Image 
                            src={`https://openweathermap.org/img/wn/${current?.weather?.[0].icon}@2x.png`} 
                            alt={current?.weather?.[0].description} 
                        />
                    </Center> 
                    <Center>
                        <Text>{current?.weather?.[0].main}</Text>
                    </Center>
                </Box>
                <Box padding='6' boxShadow='lg' minW='xs'>
                    <Box mb='5'>
                        <Heading as='h1'>
                            {cityName?.toUpperCase()} &nbsp;
                        </Heading>
                        {/* <h3>{current?.dt}</h3> */}
                        <p>Latitude: {lat}, Longitude: {lon}</p>
                    </Box>
                    <Box>  
                        <Text display={'flex'}>
                        Feels like {current?.feels_like.toPrecision(2)}°C  
                        </Text>
                        
                        <Button leftIcon={<CgDetailsMore />} w='100%' marginTop='10' colorScheme='blue' variant='outline' onClick={() => emBreve()}>see more details</Button>
                    </Box>
                </Box>
            </Wrap>
         </Stack>
         <FiveDayForecastTable daily={daily} />
        </>
    )
}