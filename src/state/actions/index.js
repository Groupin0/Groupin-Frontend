import ApiService, {baseUrl, client} from "../../api";
import {gql} from "apollo-boost";
import history from '../../history';
import {categoriesActions, loadingAction, modalActions, sessionActions, userActions} from "./enums";

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
    console.log(response.data);

    dispatch({type: sessionActions.FETCH_SESSIONS, payload: response.data.FrontSessions})
};

export const getUserSessions = id => async dispatch => {
  let response = '';
  const query = gql`{
              SessionsByUser(user_id:${id}, start:0, count:20){
                            id
                            title
                            description
                            start_date
                            category
                            capacity
                            img_source
              }
  }`;
  
  try {
      response = await client.query({query});

      dispatch({type: sessionActions.FETCH_SESSIONS, payload: response.data.SessionsByUser})
  } catch (e) {
      
  }
};

export const getUser = () => async dispatch => {
    const query = gql`{
        UserDetailed {
            id
            display_name
            img_source
        }
    }`;
    let response = '';

    try {
        response = await client.query({query});

        dispatch({type: userActions.FETCH_USER, payload: response.data.UserDetailed});
    } catch (e) {
        console.error(e);
    }
};

export const openModal = (modal) => dispatch => {
    dispatch({type: modalActions.OPEN_MODAL, payload: modal})
};

export const closeModal = (modal) => dispatch => {
    dispatch({type: modalActions.CLOSE_MODAL, payload: modal})
};

export const logout = () => {
    try {
        window.open(`${baseUrl}/users/logout`, '_self')

    } catch (e) {
        console.error(e)
    }
};

export const isLoading = (isLoading) => dispatch => {
    dispatch({type: loadingAction, payload: isLoading});
};

export const createSession = data => async dispatch => {
        dispatch(isLoading(true));
        let response = '';
        const CREATE_SESSION = gql`
                   mutation SubmitCreateSession($title: String!, $category: ID!) {
                     createSession(title: $title, category: $category) {
                        id
                        title
                        description
                        start_date
                        category
                        capacity
                        img_source
                      }
                    }`;
        try {
            response = await client.mutate(({mutation: CREATE_SESSION, variables: data}));

            dispatch({type: sessionActions.CREATE_SESSION, payload: response.data.createSession});
                history.push('/my-sessions');
                dispatch(closeModal('addSessionModal'));
                dispatch(isLoading(false));
        } catch (e) {
            dispatch(isLoading(false));
            console.dir(response);
        }
    };