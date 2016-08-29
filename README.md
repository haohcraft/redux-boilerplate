##Uptime
#####by Hao Huang

![snapshot](/snapshot.png)

### Demo
```
git clone -b uptime git@github.com:haohcraft/redux-boilerplate.git uptime
cd uptime
npm install
npm start
```
Then open http://localhost:4000/ to launch the app

### Features
 - A control to change the threshold of the alerting
 - A control to change the time to re-fetch the data
 - A crossfilter graph to display the data
    - hovering highlight
    - a slider to select the time range to filter the data list
    - Warning/Recover indicator shows up when hovering on alert items

### Improvement

#### Front End

#### Backend
1. Scale up, to handle multiple users' monitoring
    - [ ] add the logic to store/specify individule user's settings
    
2. More control for the client side
    - [ ] add an API point for the client to adjust the period of monitoring, instead of just for the last ten minutes.
    - [ ] add an API poin to the client to stop the monitoring behavior