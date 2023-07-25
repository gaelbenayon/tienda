import axios from "axios";

const getImages = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization: "Client-ID T_ngKbUmQ5_qdlgkFHFiSRMKjZ6_KAv5FlqrnNexlGU"
        },
        params:{
            query: "music"
        }
    });
    const results = response.data.results;
    return results;
}

export default getImages;