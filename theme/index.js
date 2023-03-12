import {useMemo} from "react";
import palette from "./palette";
import ComponentsOverrides from "./overrides";
import {CssBaseline} from "@mui/material";
import {
    ThemeProvider as MUIThemeProvider,
    createTheme,
    StyledEngineProvider
} from '@mui/material/styles';
import typography from "./typography";

export default function ThemeProvider({ children }) {
    const themeOptions = useMemo(() => ({
        palette,
        typography
    }),[]);
    const theme = createTheme(themeOptions);
    theme.components = ComponentsOverrides(theme);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
