# React and Web components

A PoC to investigate the usability of web component built with React

## Builds

Rollup is used to build two output
- a standalone version embedding React
- a dependent version which requires React (and ReactDOM) to be preloaded

## Notes

- CSS style have to be inlined when the shadow DOM is used (and it should be 
  used)
- The process is quite straight-forward
- There is question about if it should be one single web-component, and a *big* 
  React component behind, or if it should be a lot of web-components, each with 
  its own *small* React component.
  Maybe the virtual DOM would be more efficient with a single *big* react app,
  where having multiple web-components offers a better re-usability.
