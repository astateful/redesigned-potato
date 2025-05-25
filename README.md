# Overview

1. I opted to have the root of the repo "be" the entire NextJS project due to time constraints, however practically speaking it is better to separate concerns by using separate packages or workspaces and having a monorepo tool such as Lerna or even pnpm workspaces to manage the inter-dependencies. This is the approach I usually have taken in past projects. Here the minimum separation is __tests__ for tests, lib for library code, as well as "src" for the NextJS app.

2. I thought the requirement to sort on the client side only was strange; normally sorting is something that happens on the server-side, especially for large result lists. However, having the sorting occur within the hook reduces the complexity of the presentation components.

3. I opted for TDD when creating the sorting function. If we are in MVP mode, I thought it most critical to ensure that the basic functionality is working before working on the styling of the table. This took some extra time to setup but I felt the trade-off was worth it, since testing the sorting via the UI would have taken much longer. And in general testing library functionality via UI interaction is to be avoided.

4. In order to separate component presentation from data, I opted for a separate hook to manage the data and make the API calls. Moving the sorting into this hook felt natural, however doing it on the server would have been most optimal.

5. I opted to compute the totals on the server side to save computation logic on the frontend as well as to simplify the sorting logic. Ideally the totals should be integrated with the data itself but I opted not to touch the reference data. This also necessitated using two separate types for managing a medal entry with the total and one without, in order to properly type transformations, but it is cumbersome.

6. I always spend extra time when setting up linting and prettier since I do not do it so often.

7. Technically wise, I usually opt to use pnpm to manage dependencies and speed up package installation.

8. There is some basic styling via Tailwind to try to center the medal table on the screen.

# Bugs/Improvements

1. Flag component does not handle unsupported/unknown flag
2. sorting should have been done for ASC as well as DESC (so clicking the same field multiple times would change the direction of the sort)
3. Table is not responsive so displays incorrectly on mobile devices.
4. Caching not implemented for the API response via nextjs static parameters definition
5. No pointer icon for hovering over sortable columns, indicating to user that the column is sortable.
6. No component testing via Jest.
7. Table not properly designed in terms of spacing/in accordance with specification
8. Flag component does not use tailwind, opts instead for ineffcient css-in-jsx solution.
9. Not sufficient memoization of data returned from hook, as there is a new reference created on every render.
10. The medal counts and sorting could have been generalized much further. Ideally gold/silver/bronze can be generalized to a vector with traits such as "sortable" etc, then in the frontend these traits could be applied as transformations to the returned medal count vectors and it would be result in way less code being written, both in sorting function as well as in frontend. I usually take this approach when working with statistical data.
11. The index is 0-based rather than 1-based in the medal count table.
