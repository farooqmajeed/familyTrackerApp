import {
    StackNavigator,
} from 'react-navigation';
import Login from '../Src/Containers/Auth/LoginContainer';
import SignUp from '../Src/Containers/Auth/SignupContainer';
import Dashboard from '../Src/Components/Dashboard/Dashboard';

export const ApplicationRoutes = StackNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Dashboard: { screen: Dashboard },


});

export default ApplicationRoutes;