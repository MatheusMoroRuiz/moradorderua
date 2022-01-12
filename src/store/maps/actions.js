/*
export function someAction (context) {
}
*/

import axios from 'axios'



const GOOGLE_MAPS_API_KEY = "AIzaSyCjeSOhipzBStx2pylPrq4ARyrzTJfuB3A";
const GOOGLE_MAPS_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";


export function getAddress({}, { lat, lng }) {

    const gMapsApi = axios.create();

    // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
    //https://maps.googleapis.com/maps/api/geocode/json?latlng=-22.316844485481305,-49.07821922849204&result_type=street_address&amp&key=AIzaSyCjeSOhipzBStx2pylPrq4ARyrzTJfuB3A
    var url = `${GOOGLE_MAPS_API_URL}?latlng=${lat},${lng}&result_type=street_address&key=${GOOGLE_MAPS_API_KEY}`;


    return gMapsApi.get(url);
}
