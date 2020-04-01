import client from "../../api";
import {gql} from "apollo-boost";
import {categoriesActions, loadingAction, sessionActions} from "./enums";

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

        dispatch({type: categoriesActions.FETCH_CATEGORIES, payload: response.data.Categories});
    } catch (e) {
        console.error(e)
    }
};

export const getSessions = (start = 0, count = 20) => async dispatch => {
    const query = gql`{
    FrontSessions(start:${start}, count:${count}) {
        id
        title
        description
        start_date
        category
        capacity
        img_source
    }
}`;

    let response = await client.query({query});

    dispatch({type: sessionActions.FETCH_SESSIONS, payload: response.data.FrontSessions})
};

export const switchLoading = (isLoading) => dispatch => {
    dispatch({type: loadingAction, payload: isLoading});
};