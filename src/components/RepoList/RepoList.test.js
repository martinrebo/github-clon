import React from 'react'
import RepoList from './RepoList'
import { mount } from 'enzyme'
import { StateProvider } from '../../store/store'


describe('<RepoList /> Component', () => {
    it('should render correctly', () => {
        mount(<StateProvider> <RepoList /> </StateProvider>)
    })
})