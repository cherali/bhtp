interface IColor {
  main: string;
  light?: string;
  dark?: string;
  darkest?: string;
}

export interface IPallete {
  primary: IColor;
  gray: IColor;
  white: string;
  black: IColor;
}

export const pallete: IPallete = {
  primary: {
    main: '#ff6066',
    light: '#fe826a',
    dark: '#ff4164',
    darkest: '#e8778b'
  },
  black: {
    main: '#000000',
    light: '#454346'
  },
  white: '#ffffff',
  gray: {
    main: '#bebabc',
    light: '#fafafa',
    dark: '#c0c6c8',
    darkest: '#bbbbbb'
  }
}