
export const getColor = (color: string) => {
  switch(color) {
    case 'primary': return COLORS.$primary;
    case 'secondary': return COLORS.$secondary;
    case 'dark': return COLORS.$black;
    case 'danger': return COLORS.$danger;
    default: return COLORS.$white;
  }
}

export const COLORS = {
  $primary: '#0F031C',
  $secondary: '#477FD2',
  $black: '#000000',
  $white: '#FFFFFF',
  $softGray: '#AAAAAA',
  $danger: '#BE2E2E',
}

export const FONT_WEIGHT = {
  $light: 300,
  $regular: 400,
  $bold: 700,
}