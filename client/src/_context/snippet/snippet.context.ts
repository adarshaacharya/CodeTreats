import React from 'react'
import { State} from './snippet.type'
import { initialState } from './snippet.reducer'



const SnippetContext = React.createContext(initialState)

export default SnippetContext