# Giphy Search Demo

### Demo
```
git clone -b searchgiphy git@github.com:haohcraft/redux-boilerplate.git searchgiphy
cd searchgiphy
npm install
npm start
```

Then open http://localhost:4000/ to launch the app

### Questions
- How much time did you spend?

    ~10 hrs: 3 hrs (setup) + 4 hrs (API layer) + 3 hrs (UI)


- What was the most difficult thing for you?
    1. the API middleware layer to handle the request calls
    2. the pinterest-like layout
    


- What technical debt would you pay if you had one more iteration?
    1. Unit tests for the middleware, reducer and components
    2. UI part, add features like sharing/copying gif url on each giphy component
    3. The current API layer does not handle the pagination correctly
    4. Need a cache layer to store the recent searched query on the browser side
