# Overview

1. I opted to have the root of the repo "be" the entire NextJS project in terms of time constraints, however practically speaking it is better to separate concerns by using packages or workspaces and having a monorepo tool such as Lerna to manage the inter-dependencies. This is the approach I usually have taken in past projects. Here the minimum separation is __tests__ for tests, lib for library code, as well as "src" for the NextJS app.

2. I thought the requirement to sort on the client side only was strange; normally sorting is something that happens on the server-side, especially for large result lists.

3. I opted for TDD when creating the sorting function. If we are in MVP mode, I thought it most critical to ensure that the basic functionality is working before working on the styling. This took some extra time to setup but I felt the trade-off was worth it, since testing the sorting via the UI would have taken much longer. And in general testing library functionality via UI is to be avoided.

4. In order to separate component presentation from data, I opted for a separate hook to manage the data and make the API calls. It would have been natural to move the sorting into this hook also, or make it part of the API call to achieve even better separation.

5. I opted to compute the totals on the server side to save computation logic on the frontend as well as to simplify the sorting logic. Ideally the totals should be integrated with the data itself but I opted not to touch the reference data. This also necessitated using two separate types for managing a medal entry with the total and one without, in order to properly type transformations.

6. I always spend extra time when setting up linting and prettier since I do not do it so often...

7. Technically wise, I usually opt to use pnpm to manage dependencies.

# Bugs/Improvements

1. Flag component does not handle unsupported/unknown flag
2. sorting should have been done for ASC as well as DESC (so clicking the same field multiple times would change the direction of the sort)
3. table is not responsive so displays incorrectly on mobile devices
4. caching not implemented for the API call via nextjs static parameters definition
5. no pointer icon for hovering over sortable columns
6. no component testing
7. Table not properly designed in terms of spacing/in accordance with specification
8. Flag component does not use tailwind, opts instead for ineffcient css-in-jsx solution.
9. Not sufficient memoization of data returned from hook, as there is a new reference created on every render.
10. The medal counts and sorting could have been generalized much further. Ideally gold/silver/bronze can be generalized to a vector with traits such as "sortable" etc, then in the frontend these traits could be applied as transformations to the returned medal count vectors and it would be result in way less code being written, both in sorting function as well as in frontend.
