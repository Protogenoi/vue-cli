import User from './components/user/User'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import Home from './components/Home'

export const routes = [
    { path: '', component:  Home, name: 'home' },
    { path: '/user', component:  User, children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' },
        ] },
];