import {baseUrl, client} from "../../api";
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

export const getSessionBySearch = search_query => async dispatch => {
    dispatch(isLoading(true));

    let response = '';
    const query = gql`{
    SearchSessions(search_query: "${search_query}", start:0, count:20) {
        id
        title
        description
        start_date
        end_date
        category
        capacity
        img_source
        platform_media_id
        platform_media_pwd
        User{id}
    }
}`;

    response = await client.query({query});

    dispatch({type: sessionActions.FETCH_SESSIONS, payload: response.data.SearchSessions});
    dispatch(isLoading(false));
};

export const getSessions = (start = 0, count = 20) => async dispatch => {
    dispatch(isLoading(true));

    let response = '';
    const query = gql`{
    FrontSessions(start:${start}, count:${count}) {
        id
        title
        description
        start_date
        end_date
        category
        capacity
        img_source
        platform_media_id
        platform_media_pwd
        User{id}
    }
}`;

    response = await client.query({query});

    dispatch({type: sessionActions.FETCH_SESSIONS, payload: response.data.FrontSessions})
    dispatch(isLoading(false));
};

export const getSessionById = id => async disatch => {
    let response = '';
    const query = gql`{
    Session(id: ${id}) {
        id
        title
        description
        start_date
        end_date
        category
        capacity
        img_source
        platform_media_id
        platform_media_pwd
        User{id}
    }
}`;

  try {
      response = await client.query({query});

      return response.data.Session;
  } catch (e) {
      console.error(e);
  }
};

export const getMoreSessions = (start, count = 20) => async dispatch => {
    dispatch(isLoading(true));

    let response = '';
    const query = gql`{
    FrontSessions(start:${start}, count:${count}) {
        id
        title
        description
        start_date
        end_date
        category
        capacity
        img_source
        platform_media_id
        platform_media_pwd
        User{id}
    }
}`;
    response = await client.query({query});
    dispatch(isLoading(false));
    if (response.data.FrontSessions.length > 0) {
        await dispatch({type: sessionActions.LOAD_MORE_SESSIONS, payload: response.data.FrontSessions});
        return true;
    } else {
        return false;
    }
};

export const getUserSessions = (id, start = 0) => async dispatch => {
    dispatch(isLoading(true));

    let response = '';
    const query = gql`{
              SessionsByUser(user_id:${id}, start:${start}, count:20){
                            id
                            title
                            description
                            start_date
                            end_date
                            category
                            capacity
                            img_source
                            platform_media_id
                            platform_media_pwd
                            active
                            User{id}
              }
  }`;

    try {
        response = await client.query({query});

        dispatch({type: sessionActions.FETCH_SESSIONS, payload: response.data.SessionsByUser})
        dispatch(isLoading(false));
    } catch (e) {
        console.error(e);
    }
};

export const getMoreSessionsByUserId = (id, start, count = 20) => async dispatch => {
    dispatch(isLoading(true));
    let response = '';
    const query = gql`{
    SessionsByUser(user_id:${id}, start:${start}, count:${count}) {
        id
        title
        description
        start_date
        end_date
        category
        capacity
        img_source
        platform_media_id
        platform_media_pwd
        active
        User{id}
    }
}`;
    response = await client.query({query});
    dispatch(isLoading(false));
    if (response.data.SessionsByUser.length > 0) {
        await dispatch({type: sessionActions.LOAD_MORE_SESSIONS, payload: response.data.SessionsByUser});
        return true;
    } else {
        return false;
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
        dispatch(closeModal('addSessionModal'));
        history.push(`/my-sessions?session_id=${response.data.createSession.id}`);
        dispatch(isLoading(false));
    } catch (e) {
        dispatch(isLoading(false));
        console.error(response);
    }
};

export const editSession = data => async dispatch => {
    dispatch(isLoading(true));
    let response = '';
    const EDIT_SESSION = gql`
                   mutation SubmitEditSession($session_id: ID!, $title: String, $description: String, $category: ID, $time_range: TimeRange, $capacity: Int, $platform_media_id: String, $platform_media_pwd: String, $active: Boolean) {
                     editSession(session_id: $session_id, title: $title, description: $description, category: $category, time_range: $time_range, capacity: $capacity, platform_media_id: $platform_media_id,  platform_media_pwd:  $platform_media_pwd, active: $active)
                                }`;
    try {
        response = await client.mutate(({mutation: EDIT_SESSION, variables: data}));

        if (response.data.editSession) {
            const getEditSession = await dispatch(getSessionById(data.session_id));

            await dispatch({type: sessionActions.EDIT_SESSION, payload: getEditSession});

            dispatch(isLoading(false));
            dispatch(closeModal('editSessionModal'));
        }
    } catch (e) {
        dispatch(isLoading(false));
        console.error(response);
    }
};