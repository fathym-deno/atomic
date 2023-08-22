# Fathym Atomic Design Kit

The Fathym Atomic Design Kit is a base atomic library that is designed to be
composed into domain-specific component libraries. This approach allows for a
high degree of modularity and reusability in your UI development.

To effectively use this library, we recommend following Brad Frost's Atomic
Design Principles. These principles provide a methodology for creating design
systems that are easy to understand, scalable, and powerful. They involve
breaking down your UI into its most basic components (or 'atoms'), and combining
these atoms to form more complex 'molecules' and 'organisms'.

You can learn more about Atomic Design Principles here:
[Atomic Design Principals](https://atomicdesign.bradfrost.com/chapter-2/)

By adhering to these principles, you can ensure that your UI is consistent,
maintainable, and adaptable to a wide range of use cases.

## Atomic Components

### src/atoms

The `src/atoms` directory contains the most basic building blocks of your UI.
Each file in this directory corresponds to a single atomic component.

### src/molecules

The `src/molecules` directory contains more complex components that are composed
of multiple atoms. Each file in this directory corresponds to a single molecule
component.

### src/organisms

The `src/organisms` directory contains even more complex components that are
composed of multiple molecules and/or atoms. Each file in this directory
corresponds to a single organism component.

### src/templates

The `src/templates` directory contains templates that can be used to quickly
create consistent layouts. Each file in this directory corresponds to a single
template.

### src/utils

The `src/utils` directory contains utility functions that can be used throughout
your application. Each file in this directory corresponds to a single utility
function.

Please refer to the individual files in each directory for more detailed
documentation on how to use each component or utility function, including code
examples.
