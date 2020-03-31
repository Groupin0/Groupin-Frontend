import client from "../../api";
import {gql} from "apollo-boost";

export const getCategories = () => async dispatch => {
    const query = gql`{
        Categories {
            id,
            name
        }
      }`;
    let response;

    try {
      response = await client.query({query});

      console.log(response);
    } catch (e) {
        console.error(e)
    }
};