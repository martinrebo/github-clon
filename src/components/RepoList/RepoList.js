import React, { useContext, useEffect, useCallback } from 'react'
import { store } from '../../store/store'
import { QUERY_GITHUB } from '../../graphql/queryGithub'

function RepoList() {

    const globalState = useContext(store);
    const { dispatch } = globalState;
    const stableDispatch = useCallback(dispatch, [])


    useEffect(() => {

        fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                Authorization: `bearer e070044d85a433438677ab9b559cd8feaf78df93`
            },
            body: JSON.stringify({ query: QUERY_GITHUB })
        })
            .then(res => res.json())
            .then(data => {
                console.log( "Data", data)
                
                stableDispatch({ type: "GET_GITHUB_DATA", payload: data.data.user })
            })
            .catch(error => console.log(error))
    }, [stableDispatch])


    return (
        <>
            { globalState.state.filtered.length > 0 ?
              globalState.state.filtered.map((data, index) => {
                    return (
                        <div key={index} >
                            {data.name}
                        </ div >
                    )
                })
                : <div> "No repositories match" </div>}
        </>
    )
}

export default RepoList;