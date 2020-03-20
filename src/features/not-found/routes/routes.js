import {
  NotFound
} from "../components";

// function NotFoundRoutes() {
//   const { path } = useRouteMatch();
//   console.log('NotFoundRoutes')
//   return (
//     <Switch>
//       <Route path={`/404`} component={NotFound}/>
//     </Switch>
//   )
// }

const NotFoundRoutes = [
  {
    path: '/404',
    component: NotFound
  }
]

export {
  NotFound,
  NotFoundRoutes
}