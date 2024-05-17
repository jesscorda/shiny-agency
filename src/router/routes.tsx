import { createBrowserRouter } from 'react-router-dom';
import { Home, RootView } from '../pages';
import WordList from '../pages/WordDetails/WordDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true
      },
      {
        path: 'words',
        children: [
          {
            path: ':word',
            element: <WordList />
          }
        ]
      }
    ]
  }
]);
