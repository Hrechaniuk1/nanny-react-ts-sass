// gen imports
import {FC, ComponentType} from 'react'
import { useSelector } from 'react-redux'

// custom imports
import { isLoggedInSelector } from '../../redux/selector'

// types
type PrivateRouteProps = {
    Component: ComponentType
}

// component

const PrivateRoute: FC<PrivateRouteProps> = ({Component}) => {

    const isLoggedIn = useSelector(isLoggedInSelector)

    return(
        <>{isLoggedIn ? <Component></Component> : <div><p>Please, log in</p></div>}</>
    )

}

export default PrivateRoute