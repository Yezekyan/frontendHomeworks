import { createBrowserRouter } from 'react-router-dom';
import { SignIn } from '../pages/main/signin/signin';
import { SignUp } from '../pages/main/signup/signup';
import { AuthLayout } from '../pages/auth/auth-layout';
import { Profile } from '../pages/auth/profile/profile';
import { Settings } from '../pages/auth/settings/settings';
import { Followers } from '../pages/auth/followers/followers';
import { Followings } from '../pages/auth/followings/followings';
import { Messages } from '../pages/auth/messages/messages';
import { Posts } from '../pages/auth/posts/posts';
export const routes = createBrowserRouter([
  {
    path: '',
    element: <SignIn />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'profile',
    element: <AuthLayout />,
    children: [
      { path: '', element: <Profile /> },
      { path: 'settings', element: <Settings /> },
      { path: 'followers', element: <Followers /> },
      { path: 'followings', element: <Followings /> },
      { path: 'messages', element: <Messages /> },
      { path: 'posts', element: <Posts /> },
    ],
  },
]);
