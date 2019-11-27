export interface IWeather {
    title: string;
    icon: string;
    water: number;
    temperature: number;
}

export interface ISocial {
    title: string;
    img: string;
    followers: number;
    following: number;
}

export interface IPlace {
    img: string;
    address: string;
    phone: number;
    weather: IWeather;
    social_info: ISocial;
    type: string;
}