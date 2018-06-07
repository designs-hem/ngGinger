export interface LocationResponse {
    locations: LocationFields[];
}

export interface LocationFields {
    'locationId': number;
    'name': string;
    'latitude' ?: number;
    'longitude' ?: number;
    'restuarentName' ?: string;
}
