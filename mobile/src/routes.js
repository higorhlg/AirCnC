import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LogIn from './pages/LogIn'
import List from './pages/List'
import Book from './pages/Book'


const Routes = createAppContainer (
    createSwitchNavigator({
        LogIn,
        List,
        Book
    })
)

export default Routes