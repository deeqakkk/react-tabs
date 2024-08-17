
import { IHeadingType, IHeaderDescription } from '../defs/index'

export const headerDescription: IHeaderDescription = {
  whyReact: [
    'Reusable Components: React allows you to build encapsulated components that manage their own state, then compose them to make complex UIs.',
    'Virtual DOM: React uses a virtual DOM to efficiently update and render just the right components when your data changes.',
    'Strong Community Support: React has a vast ecosystem and community, with many libraries and tools built around it.'
  ],
  coreFeatures: [
    'JSX: JSX is a syntax extension that allows mixing HTML with JavaScript, making the code more readable and easier to write.',
    'Component-Based Architecture: React promotes building applications using small, reusable components that can be combined to create complex user interfaces.',
    'Unidirectional Data Flow: React’s one-way data binding keeps everything modular and fast, making the code more predictable and easier to debug.'
  ],
  relatedResources: [
    'React Documentation: The official documentation is a great place to start learning React and understand its concepts.',
    'React Router: A standard library for routing in React applications, enabling navigation among different components.',
    'Redux: A popular state management library often used with React to manage application state in a predictable way.'
  ],
  reactVsJs: [
    'React vs Vanilla JS: React simplifies the development of complex UIs by breaking them into components, while vanilla JS requires more boilerplate code.',
    'Performance: React’s virtual DOM and efficient diffing algorithm outperform vanilla JS when dealing with large and dynamic UIs.',
    'Learning Curve: While React has a steeper learning curve compared to vanilla JS, it offers more scalability and reusability in larger projects.'
  ]
}

export const tabHeading: IHeadingType[] = [
  {
    value: 'Why React',
    label: 'whyReact'
  },
  {
    value: 'Core Features',
    label: 'coreFeatures'
  },
  {
    value: 'Related Resources',
    label: 'relatedResources'
  },
  {
    value: 'React vs Js',
    label: 'reactVsJs'
  }
]

