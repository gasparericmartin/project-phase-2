import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Workouts from './pages/Workouts'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/workouts',
                element: <Workouts />
            }
        ]
    }
]

export default routes