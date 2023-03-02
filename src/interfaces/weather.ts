export interface dailyWeatherData {
    dt: number,
    sunrise: number,
    sunset: number,
    moonrise: number,
    moonset: number,
    moon_phase: number,
    temp: {
        day: number,
        min: number,
        max: number,
        night: number,
        eve: number,
        morn: number
    },
    feels_like: {
        day: number,
        night: number,
        eve: number,
        morn: number
    },
    pressure: number,
    humidity: number,
    dew_point: number,
    wind_speed: number,
    wind_deg: number,
    wind_gust: number,
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    clouds: 2,
    pop: 0,
    uvi: 10.51
}

export interface IWeatherData1 {
    current?: {
        dt: number,
        sunrise: number,
        sunset: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        visibility: number,
        wind_speed: number,
        wind_deg: number,
        weather: [
            {
                id: number,
                main: string,
                description: string,
                icon: string
            }
        ]
        
    }
    lat?: number,
    lon?: number,
    daily?: dailyWeatherData[]
}

export interface IWeatherState {
    weather: {
        city: string,
        loading: boolean,
        data: IWeatherData1
    }
}