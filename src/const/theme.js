import theme from 'styled-theming';

//Guarda los colores para los diferentes temas

export const char = theme('mode', {
    light: '#3F3524',
    dark: '#afb2b7',
  });

export const button = theme('mode', {
  light: '#dabeb0',
  dark: '#0F1013',
});

export const buttext = theme('mode', {
  light: '#3F3524',
  dark: '#df4e15',
});

export const menu = theme('mode', {
  light: '#423116',
  dark: '#df4e15',
});

export const shadow = theme('mode', {
  light: '#3F3524',
  dark: '#b03c15',
});

export const form = theme('mode', {
  light: '#F8F5F0',
  dark: '#15161a',
});

export const card = theme('mode', {
  light: 'rgba(146, 128, 118, 0.2)',
  dark: 'rgba(17, 25, 40, 0.2)',
});