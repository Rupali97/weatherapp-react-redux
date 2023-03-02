import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { dailyWeatherData } from "../interfaces/weather";
import { convertTimestampToDate } from "../utils";

type FiveDayForecastTable = {
    daily: dailyWeatherData[] | undefined;
}

export default function FiveDayForecastTable(props: FiveDayForecastTable){
    const {daily} = props

    return(
        <TableContainer>
            <Table width={'lg'} colorScheme={'telegram'}>
                <Thead>
                    <Tr>
                        <Th>Date</Th>
                        <Th isNumeric>Weather (min/max)</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        daily?.map((day) => 
                            <Tr key={day.dt}>
                                <Td>{convertTimestampToDate(day.dt)}</Td>
                                <Td isNumeric>{day.temp.min}°C &nbsp; / &nbsp; {day.temp.max}°C</Td>
                            </Tr>
                        )
                    }
                    
                </Tbody>
            </Table>
        </TableContainer>
    )
}