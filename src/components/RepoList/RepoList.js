import React, { useContext, useEffect, useCallback } from 'react'
import { store } from '../../store/store'
import { QUERY_GITHUB } from '../../graphql/queryGithub'

import './RepoList.css'
function RepoList() {

    const globalState = useContext(store);
    const { dispatch } = globalState;
    const stableDispatch = useCallback(dispatch, [])


    useEffect(() => {

        fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                Authorization: `bearer a0273b4a5e163db415b3f976ee7b01fefe97d52e`
            },
            body: JSON.stringify({ query: QUERY_GITHUB })
        })
            .then(res => res.json())
            .then(data => {
                console.log("Data", data)

                stableDispatch({ type: "GET_GITHUB_DATA", payload: data.data.user })
            })
            .catch(error => console.log(error))
    }, [stableDispatch])


    return (
        <>
            {globalState.state.filtered.length > 0 ?
                globalState.state.filtered.map((data, index) => {
                    return (
                        <div key={index} className="repos" >
                            <div className="link">
                                <a href={data.url} target="_blank" rel="noopener noreferrer">
                                <div className="name">
                                    {data.name}
                                </div>
                                <div className="description"
                                >
                                    {data.description}
                                </div>
                            </a>
                            </div>


                        </ div >
                    )
                })
                : <div className="noMatch"> "No repositories match" </div>}
        </>
    )
}

export default RepoList;