import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {Provider} from "react-redux";
import {store} from "./redux/configureStore.ts";
const clientId = '982859489612-1o67pno0bhgh0dtvblloucbqbpjptlf5.apps.googleusercontent.com'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <GoogleOAuthProvider clientId={clientId}>
                    <App/>
                </GoogleOAuthProvider>
            </QueryClientProvider>
            </Provider>
        </BrowserRouter>

    </React.StrictMode>
)
