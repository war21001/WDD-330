import { getJson } from './utilities.js';

// Quake Model
export default class Quake {
    constructor() {
        this.baseUrl =
            'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-11-01&endtime=2021-11-31';
        // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
        this._quakes = [];
    }

    async getEarthQuakesByRadius(position, radius = 100) {
        // use the getJson function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
        let url = `${this.baseUrl}&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;

        this._quakes = await getJson(url);

        return this._quakes;
    }

    getQuakeById(id) {
        // filter this._quakes for the record identified by id and return it
        return this._quakes.features.filter(item => item.id === id)[0];
    }
}