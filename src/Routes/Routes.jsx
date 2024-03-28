import { createBrowserRouter } from "react-router-dom";
import Root from '../components/Root.jsx';
import Home from '../components/Home.jsx';
import ErrorPage from '../components/ErrorPage.jsx';
import ListedBooks from '../components/ListedBooks.jsx';
import PagesToRead from '../components/PagesToRead.jsx';
import BookDetails from '../components/BookDetails.jsx';
import ReadBooks from "../components/ReadBooks.jsx";
import WishLists from "../components/WishLists.jsx";
import Contact from "../components/Contact.jsx";
import BengaliBooks from "../components/BengaliBooks.jsx";
import SignIn from "../components/SignIn.jsx";
import SignUp from "../components/SignUp.jsx";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/listed-books',
          element: <ListedBooks></ListedBooks>,
          loader: () => fetch('https://nahidraz23.github.io/bookData/data.json'),
          children: [
            {
                index: true,
                element: <ReadBooks></ReadBooks>
            },
            {
                path: 'wishlist',
                element: <WishLists></WishLists>
            }
          ]
        },
        {
          path: '/pages-to-read',
          element: <PagesToRead></PagesToRead>,
          loader: () => fetch('https://nahidraz23.github.io/bookData/data.json')
        },
        {
          path: '/book/:id',
          element: <BookDetails></BookDetails>,
          loader: () => fetch('https://nahidraz23.github.io/bookData/data.json')
        },
        {
          path: '/bengali-book/:id',
          element: <BookDetails></BookDetails>,
          loader: () => fetch('https://nahidraz23.github.io/bookData/bengaliBook.json')
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/bengali-book',
          element: <BengaliBooks></BengaliBooks>,
          loader: () => fetch('https://nahidraz23.github.io/bookData/bengaliBook.json')
        },
        {
          path: '/sign-in',
          element: <SignIn></SignIn>
        },
        {
          path: '/sign-up',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);