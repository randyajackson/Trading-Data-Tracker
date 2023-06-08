# Trading-Data-Tracker
This project will aggregate stock/crypto related data from different sources.
Dashboards will be presented with real-time data updates along with a constant text to speech announcement.
The problem that this project is designed to solve is creating an enjoyable audio stream highlighting market events.
The information will not be opinionated and are aimed to only state factual events that occur.
I enjoy idle listening such as scanner radios for background noise and would like to have an alternative to listening to news or streamers.

The foundational stack being used is:
PostgreSQL
Express
React
Node.js

Data sources to be included currently:
http://openinsider.com/ - Large purchases and sales of shares from employees.
https://www.capitoltrades.com/trades - Sales and purchases of politicians and their spouses.
Unusual options activity using TD Ameritrade to gather.
Notable alerts from technical indicators likely to be focused on weekly/monthly/yearly.
News events.