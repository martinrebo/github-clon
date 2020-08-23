import React, {useContext} from 'react'
import { store } from '../../store/store'

function Header() {
 const globalState = useContext(store)


    return (          
<>
            <h1>Github repo search</h1>  

</>
    );
  }

  export default Header;