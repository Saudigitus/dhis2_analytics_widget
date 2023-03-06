import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl, requestHeaders } from "../api/request";
import { dateFormater } from "../utils/dateFormater";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoadig] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            await axios.get(baseUrl(), requestHeaders())
                .then(response => {
                    setLoadig(false);
                    const requiredData = [
                        {
                            "name": "Time since last update",
                            "value": response.data.intervalSinceLastAnalyticsTableSuccess,
                        },
                        {
                            "name": "Last update date and time",
                            "value": dateFormater(new Date(response.data.lastAnalyticsTableSuccess)),
                        },
                        {
                            "name": "Current date and time (Server)",
                            "value":dateFormater(new Date(response.data.serverDate))
                        }
                    ];
                    setData(requiredData)
                })
                .catch(err => {
                    setLoadig(false);
                    setError(err)
                })
        }
        fetch()
    }, [])

    return { data, loading, error }
}

export { useFetch }
