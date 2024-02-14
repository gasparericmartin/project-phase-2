import App from './App'
import Home from './pages/Home'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]

export default routes