---
slug: "/blog/Theming-App-with-Styled-Components"
date: "2020-12-08"
title: "Theming App with Styled Components"
preview: "short note"
---

You must have seen “Dark Theme” in many apps nowadays some app even support the totally customizable theme, but how theming works and how it changes on the go? Well, it’s pretty simple with styled-components, most of the steps will be same for any library.

## Maintain theme at single place

Never refer colours, font-weight and font-size in your app directly always use a central place to keep theme-related info, it can be redux too.

It will look something like

```js
const theme = {
  colors: {
    primary: '#0043E8',
    secondary: '#F45D01',
    alert: '#F73F52',
    success: '#1BAA53'
  }
  fontSize: {
    body: 14
    ..
  }
}
```

Half the work is done

## Theme Provider

With [styled-components](https://www.styled-components.com/), we have an API [**ThemeProvider**](https://www.styled-components.com/docs/api#themeprovider)

> A helper component for theming. Injects the theme into all styled components anywhere beneath it in the component tree, via the context API. Check the section on Theming.

This is how it is used

```jsx
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider
```

Here `theme` is just an object which will be available in each styled-component in `props` can be accessed using `props.theme`

for example

```jsx
const Alert = styled.p`
  color: ${({ props }) => props.theme.colors.alert};
`;
```

## Theming

Just as we created `theme` variable above we have to create a `darkTheme`, it should be same as `theme` structure-wise or if you are using **TypeScript** then there interface should be same, some values can be optional them we have to merge both before using.

```js
const defaultTheme = {
  colors: {
    primary: '#0043E8',
    secondary: '#F45D01',
    alert: '#F73F52',
    success: '#1BAA53'
  }
  fontSize: {
    body: 14
    ..
  }
}const darkTheme = {
  colors: {
    primary: 'black',
    secondary: 'white',
    alert: '#F73F52',
    success: '#1BAA53'
  }
  fontSize: defaultTheme.fontSize
}
```

While passing theme to ThemeProvider

```jsx
<ThemeProvider
  theme={this.props.theme.value === "dark" ? darkTheme : defaultTheme}
>
  <App />
</ThemeProvider>
```

In the above example, the component is connected to redux so we can get theme from redux and on change by the user, it will be reflected instantly.
