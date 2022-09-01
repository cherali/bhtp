import type { FC, ReactNode } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { IPallete, pallete } from './pallete'

declare module '@emotion/react' {
  export interface Theme extends ITheme { }
}

interface ThemeProviderProps {
  children: ReactNode;
}

interface ITheme {
  pallete: IPallete;
}

const theme: ITheme = {
  pallete
}


const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme} >
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider