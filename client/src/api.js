import axios from "axios";

export const fetchPlanets = async () => {
    
    try {
        const response = await axios.get("/api/planets");
        return response.data;
    } catch (error) {
        console.log("Error fetching planets", error);
        console.log("Fetched planets from API:", response.data);

        return [];
    }
};