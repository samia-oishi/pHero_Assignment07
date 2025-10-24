1. What is JSX, and why is it used?

Ans: JSX stands for JavaScript XML, and it’s a special syntax that lets us write HTML-like code directly inside JavaScript. It’s used in React to make creating user interfaces easier and more readable.

2. What is the difference between State and Props?

Ans: In React, state and props are two ways to manage and pass data, but they work differently.

State is data that belongs to a specific component. It can change over time, and when it does, React automatically re-renders the component to show the updated values. For example, if we have a counter that increases when we click a button, that counter value is stored in the component’s state.

Props, on the other hand, are like function arguments. They are used to pass data from a parent component to a child component. Unlike state, props are read-only, which means the child component cannot modify them.

Simply put:
State = data the component manages itself.
Props = data passed down from a parent component.

3. What is the useState hook, and how does it work?

Ans: The useState hook is one of the most common hooks in React. It allows us to add and manage state in functional components. When we use it, React gives us two things — a variable to store the current value, and a function to update it.

4. How can you share state between components in React?

Ans: Sometimes, two or more components need to use the same data. The easiest way to do that is by lifting the state up to a common parent component. The parent holds the shared state and passes it to the children through props.

For example, if two components need access to the same counter value, we can move that counter’s state to the parent and then pass it down to both child components. That way, they both stay in sync.

5. How is event handling done in React?

Ans: Event handling in React works a lot like in regular JavaScript, but with a few small differences. React uses camelCase for event names (like onClick instead of onclick), and instead of writing code as a string, we pass a function that should run when the event happens.
