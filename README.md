### Set UP
```
git clone -b fetch git@github.com:haohcraft/redux-boilerplate.git fetch
cd fetch
npm install
```

### Dev
```
npm run start
open `localhost:4000`
```


### Build
```
npm run build
```

### Demo

```
npm run build
cd build/
python -m SimpleHTTPServer 8000
open `localhost:8000`
```
### Note
1. Responsive Images
    - [x] Used `flexbox` to layout
    - [x] Handled the case where the image fails to load

2. Data Fetching
    - [x] Debounced key strokes
    - [x] Handled different status of data fetching, loading, loaded and error
