import {
  Users
} from "../components";

// function UsersRoutes() {
//   const { path } = useRouteMatch();
//   console.log('users')
//   return (
//     <Switch>
//       <Route exact path={`/users`}>
//         <Users />
//       </Route>
//     </Switch>
//   )
// }

const UsersRoutes = [
  {
    path: '/users',
    component: Users,
    auth: true
  }
]

export {
  UsersRoutes
}