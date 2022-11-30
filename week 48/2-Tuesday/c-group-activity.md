# Group Activities

## Activity 1

Challenge 3 of 3:  Passing JSX in a children prop [Link 1](#links)

## Activity 2
In the src directory
- extract` router.zip`
- run `npm install` and `npm start`
- Discuss the code in group. You can refer to [Link 2](#links)



## Activity 3

- React Router: What is the purpose of using <Outlet /> [Link 3](#links)
- What is the difference between HashRouter and BrowserRouter in React?

ANSWER:
BrowserRouter

It uses history API, i.e. it's unavailable for legacy browsers (IE 9 and lower and contemporaries). Client-side React application is able to maintain clean routes like example.com/react/route but needs to be backed by web server. Usually this means that web server should be configured for single-page application, i.e. same index.html is served for /react/route path or any other route on server side. On client side, window.location.pathname is parsed by React router. React router renders a component that it was configured to render for /react/route.

Additionally, the setup may involve server-side rendering, index.html may contain rendered components or data that are specific to current route.

HashRouter

It uses URL hash, it puts no limitations on supported browsers or web server. Server-side routing is independent from client-side routing.

Backward-compatible single-page application can use it as example.com/#/react/route. The setup cannot be backed up by server-side rendering because it's / path that is served on server side, #/react/route URL hash cannot be read from server side. On client side, window.location.hash is parsed by React router. React router renders a component that it was configured to render for /react/route, similarly to BrowserRouter.

Most importantly, HashRouter use cases aren't limited to SPA. A website may have legacy or search engine-friendly server-side routing, while React application may be a widget that maintains its state in URL like example.com/server/side/route#/react/route. Some page that contains React application is served on server side for /server/side/route, then on client side React router renders a component that it was configured to render for /react/route, similarly to previous scenario.


## Links
- [Link 1](https://beta.reactjs.org/learn/passing-props-to-a-component#challenges)
- [Link 2](https://www.w3schools.com/react/react_router.asp)
- [Link 3](https://medium.com/nerd-for-tech/react-router-dom-v6-part-i-49a63a92d858)

## Extra Material
- [Passing JSX as children](https://beta.reactjs.org/learn/passing-props-to-a-component#passing-jsx-as-children)
- [React children – why, when, how ](https://dev.to/franca/react-children-2k4e)
- [A guide to using React Router v6](https://blog.logrocket.com/react-router-v6/)



