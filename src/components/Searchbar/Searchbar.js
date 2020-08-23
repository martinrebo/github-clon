import React, { useContext, useState, useCallback } from 'react'
import { store } from '../../store/store'


function Searchbar() {

    const globalState = useContext(store);
    const { dispatch } = globalState;
    const stableDispatch = useCallback(dispatch, [])

    const [state, setState] = useState({ value: "" })
    const handleChange = (e) => {
        setState({ value: e.target.value })
        filterResults(e.target.value)
    }
    const filterResults = (term) => {

        let newList = globalState.state.data.repositories.nodes.filter(repo => {
            return repo.name.includes(term)
        })
        stableDispatch({ type: "FILTER_SEARCH", payload:  newList  })
    }


    return (
        <>
            <input
                type="text"
                value={state.value}
                onChange={handleChange}
            >

            </input>

        </>
    )
}

export default Searchbar;
