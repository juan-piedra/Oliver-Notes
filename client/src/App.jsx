// import './App.css';
// import { Outlet } from 'react-router-dom';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
// import Navbar from './components/Navbar';
// import { setContext } from "@apollo/client/link/context";

// const httpLink = createHttpLink({
//     uri: '/graphql'
// })

// const authLink = setContext((parent, { headers }) => {
//     const token = localStorage.getItem('id_token');
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : ''
//         }
//     }
// })

// const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
// })

// function App() {
//     return (
//         <ApolloProvider client={client}>
//             <Navbar />
//             <Outlet />
//         </ApolloProvider>
//     );
// }

// export default App;

import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import Navbar from './components/Navbar';
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: '/graphql'
})

const authLink = setContext((parent, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="app-container">
                <header className="centered-title">
                    <img src="oliver-stone-caricature.jpg" alt="Oliver Stone Caricature" className="header-image left" />
                    <div>
                        <h1>Oliver Notes</h1>
                        <h2>Trading Post For All Your University Notes</h2>
                    </div>
                    <img src="conan-the-librarian.jpg" alt="Conan the Librarian" className="header-image right" />
                </header>
                <Navbar />
                <div className="dropdown-container">
                    <select name="school" id="school-dropdown">
                        <option value="">School Name</option>
                        {/* Add school options here */}
                    </select>
                    <select name="course" id="course-dropdown">
                        <option value="">Course Name</option>
                        {/* Add course options here */}
                    </select>
                </div>
                <Outlet />
            </div>
        </ApolloProvider>
    );
}

export default App;
