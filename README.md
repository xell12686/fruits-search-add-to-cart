# Type Ahead / Auto suggestion Cart Product Search
## Minimum requirements:

- Fetch the list of fruits from the API url provided below
- Cart items list is initially empty, unless a fruit is added.
- The input should be a typeahead that renders fruit names. When typing into the typeahead, the search results are filtered b
- Upon clicking on an fruit from the search result dropdown, the fruit should be added to the cart automatically
- When add button is clicked an item is added to the cart
- Fruit quantity should increment and decrement on button clicks
- When quantity decrements to 0, fruit in shopping cart should be removed


## Additional requirements:

1. Make intuitive UI considerations, add comments if necessary to explain your decision thought process.
2. Make sure to implement performant code. In a real world scenario, consider how your implementation could be optimized.
3. Accessibility
4. General best practices around component structuring

## For a performant and production-grade implementation:
- TypeScript and SCSS modules to ensure type safety and better organization of styles.
- Well-structured API utility file
- Use the Context API for state management to avoid prop drilling
- best practices for security, including input validation
- Implement Test Driven Development (TDD) using Jest to cover use cases for each component (to follow)

## API Url

https://fruityvice.com/api/fruit/all

## Mockups:

![Project Image](https://github.com/xell12686/fruits-search-add-to-cart/blob/main/preview-cart-empty.png)
![Project Image](https://github.com/xell12686/fruits-search-add-to-cart/blob/main/preview-cart.png)
## live preview:
- app is currently deployed at [https://fruits-search-add-to-cart.vercel.app/](https://fruits-search-add-to-cart.vercel.app/)



