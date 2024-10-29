// gen imports
import {FC, ComponentType} from 'react'
import { useSelector } from 'react-redux'

// custom imports
import { isLoggedInSelector } from '../../redux/selector'
import PleaseLogIn from '../PleaseLogIn/PleaseLogIn'

// types
type PrivateRouteProps = {
    Component: ComponentType
}

// component

const PrivateRoute: FC<PrivateRouteProps> = ({Component}) => {

    const isLoggedIn = useSelector(isLoggedInSelector)

    return(
        <>{isLoggedIn ? <Component></Component> : <PleaseLogIn></PleaseLogIn>}</>
    )

}

export default PrivateRoute