import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material"
import React, { useMemo } from "react"
// import "./style.scss"

interface Props extends React.ComponentProps<any> {}

export default function Theme({ children }: Props) {
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)")
  function color(light: string, dark: string) {
    return darkMode ? dark : light
  }
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: color("#00734e", "#1b1d28"),
          },
          color: {
            cardBg: color("#1E88E5", "#1b1d28"),
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                background: color("#1976d2", "#1b1d28")
              }
            }
          }
        }
      }),
    [darkMode]
  )

  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
