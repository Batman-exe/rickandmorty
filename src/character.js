import axios from "axios";
const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character';

const getCharacterById = async (id) => {
    try {
        const characters = await axios.get(URL_CHARACTERS + "/" + id);

        console.log("data->", characters);
        return{
            id,
            name: characters?.data.name,
            gender: characters?.data.gender,
            status: characters?.data.status
        };
    }
    catch (error) {
        console.error(error);
    }
}

export {getCharacterById};
