import React, { createContext, useReducer } from 'react';

const initialState = {
    data:
       {
            name: "",
            bio: "",
            avatarUrl: "",
            company: "",
            email: "",
            repositories: {
                nodes: []
            }

    },
    filtered: [],
    loading: true
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'GET_GITHUB_DATA':
                return {
                    ...state,
                    data: action.payload,
                    filtered: action.payload.repositories.nodes,
                    loading: false
                };
            case 'FILTER_SEARCH':
                return {
                    ...state,
                    filtered: action.payload,
                    loading: false
                };

            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }