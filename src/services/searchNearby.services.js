import axios from "axios"

class SearchNearby {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://places.googleapis.com/v1'
        })
        this.api.interceptors.request.use((config) => {

            config.headers = {

                "X-Goog-Api-Key": "AIzaSyBDuPHmeT2hJFxWwcM2p7abZU05Gau84Pw",


                "X-Goog-FieldMask":
                    `places.id,places.formattedAddress,places.displayName.text,places.currentOpeningHours.weekdayDescriptions,places.googleMapsUri,places.websiteUri,places.rating,places.types`,

                "Content-Type": 'application/json'
            }
            return config
        })


    }

    getPlaceBycoords(latitude, longitude) {
        const body = {
            "includedTypes": ["tourist_attraction", "art_gallery", "museum", "performing_arts_theater"],
            "maxResultCount": 14,
            "locationRestriction": {
                "circle": {
                    "center": {
                        "latitude": latitude,
                        "longitude": longitude
                    },
                    "radius": 5000.0
                }
            }
        }

        return this.api.post("/places:searchNearby", body)
    }


}



const searchService = new SearchNearby()

export default searchService