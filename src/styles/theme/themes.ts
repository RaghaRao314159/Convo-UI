const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  chatBubbleSystem: 'rgb(59,130,246)',
  codeBackground: 'rgba(248, 249, 250, 0.95)',
  chatBubbleSystemUser: 'rgb(244, 244, 244)',
  chatBubbleSystemAI: 'rgb(255,255,255)',
  textUser: '#121212',
  textAI: '#121212',

  tableBackground: 'rgba(248, 249, 250, 0.95)',
  tableHeaderBackground: '#f2f2f2',
  tableHeaderBackgroundHover: '#eaeaea',
  tableHeaderText: '#121212',
  tableCellBackgroundHover: '#f0f0f0'
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: '#121212',
  backgroundVariant: '#1F1B24',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
  chatBubbleSystem: 'rgb(41, 41, 41)',
  codeBackground: 'rgb(20, 21, 23);',
  chatBubbleSystemUser: 'rgb(41, 41, 41)',
  chatBubbleSystemAI: '#121212',
  textUser: 'rgb(255,255,255)',
  textAI: 'rgb(255,255,255)',

  tableBackground: '#111',
  tableHeaderBackground: '#222',
  tableHeaderBackgroundHover: '#444',
  tableHeaderText: 'rgb(255,255,255)',
  tableCellBackgroundHover: '#555'
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
