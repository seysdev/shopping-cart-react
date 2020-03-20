import {
  SignIn,
  SignUp
} from "../components";

// function AuthRoutes() {
//   const { path } = useRouteMatch();
//   console.log('AuthRoutes')
//   return (
//     <Switch>
//       <Route path={`/sign-in`} component={SignIn} />
//       <Route path={`/sign-up`} component={SignUp} />
//     </Switch>
//   )
// }

const AuthRoutes = [
  {
    path: '/sign-in',
    component: SignIn,
  },
  {
    path: '/sign-up',
    component: SignUp
  }
]

export {
  AuthRoutes
}