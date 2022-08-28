export default function ({app, route, redirect}) {

  // if user tries to access profile or bet page via url when he is not actually logged in, redirect him to the login page
  if (route.path === '/profile' || route.path === '/bet') {
    if (!app.$fire.auth.currentUser) {
      return redirect('/Login')
    }
  }

  // redirect user to Profile page if he tries to access login page when he is already logged in

  if ((route.path === '/Login' || route.path === '/SignUp') && app.$fire.auth.currentUser) {
    return redirect('Profile')
  }

}
