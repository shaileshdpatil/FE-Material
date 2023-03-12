import React from 'react';
import Routes from "routes";
import CustomRouter from "components/CustomBrowserRouter";
import history from "components/history";
import ThemeProvider from "./theme";
import Toast from "components/Toast";
import store from "./store/store";
import {Provider} from "react-redux";

// axios.defaults.baseURL = "https://apis.evodream.fr/v1/api";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <React.Suspense fallback="">
                    <CustomRouter history={history}>
                        <Routes/>
                    </CustomRouter>
                </React.Suspense>
                <Toast/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
