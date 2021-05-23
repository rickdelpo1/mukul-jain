import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="dark">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme') || 'dark';
                } catch (err) { }

                window.__theme = preferredTheme;

                if(!document.body.classList.contains(preferredTheme)){
                  // remove defualt theme
                  document.body.classList.remove('dark')
                  document.body.classList.add(preferredTheme)
                }

                window.__onThemeChange = function() {};
                window.__setTheme = function(newTheme) {
                  document.body.classList.remove(window.__theme);
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.classList.add(window.__theme);
                  window.__onThemeChange(newTheme);
                  window.__setPreferredTheme(newTheme);
                }
                window.__setPreferredTheme = function(newTheme) {
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }

                

              })();
            `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
