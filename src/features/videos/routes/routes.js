import {
  Videos
} from "../components";

// function VideosRoutes() {
//   const { path } = useRouteMatch();
//   console.log('videos')
//   return (
//     <Switch>
//       <Route exact path={`/videos`}>
//         <Videos />
//       </Route>
//     </Switch>
//   )
// }

const VideosRoutes = [
  {
    path: '/videos',
    component: Videos,
    auth: true
  }
]

export {
  VideosRoutes
}