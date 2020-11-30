# SDC-Description

## Description
The goal of this project is to build a scalable RESTful API service built for an existing e-commerce platform and optimize it to handle web-scale traffic. This is done by increasing the dataset from 100 unique records to 10 million unique records. The 10 million records were generated into a PostgreSQL database, chosen between that or MongoDB by comparing query latency through B-tree indexing. Then horizontally scaled out from 1 service at 600/RPS to 4 services at 2000/RPS while maintaining 20ms average latency and <1% error rate through load balancing by least connections in Nginx. Then implemented reverse proxy caching to produce average latency of 11ms at 10,000/rps with one service. All services deployed in an AWS EC2 T2.micro instance (1 CPU, 1GB mem). More details below.

## Tech Stack
<ul>
  <li>NodeJS</li>
  <li>Express</li>
  <li>PostgreSQL</li>
  <li>Nginx</li>
</ul>

## CRUD API using REST

| CRUD   | REST   | PATH     | DATA TO PASS                                                                                                                                                                                                                                                                                                                                                                                                          |
|--------|--------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CREATE | POST   | /one     | States (STRING)<br />Farms (STRING)<br />Camps (STRING)<br />minimumNights (STRING)<br />acceptsBookings (STRING)<br />checkIn (STRING)<br />checkOut (STRING)<br />onArrival (STRING)<br />costs (NUMBER)<br />description (STRING)<br />responses (STRING)<br />recommended (STRING)<br />Parks(STRING)<br />Lodging (STRING)<br />Essentials (STRING)<br />Amentities (STRING)<br />Owners (STRING)<br />photosofResponsers (STRING)<br />cancellation (STRING)<br />checkmark (BOOLEAN |
| READ   | GET    | /one/:id |                                                                                                                                                                                                                                                                                                                                                                                                                       |
| UPDATE | PUT    | /one/:id | ```<name of data column you want to change>: <new data>```                                                                                                                                                                                                                                                                                                                                                                  |
| DELETE | DELETE | /one/:id |                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Stress Testing on Local Machine

| Requests Per Second | Optimization                                                     | Average Response Time in ms |
|---------------------|------------------------------------------------------------------|-----------------------------|
| 500                 | Indexing                                                         | 32ms                        |
| 1000                | Indexing                                                         | 270ms                       |
| 1000                | Indexing, Max Connections                                        | 185ms                       |
| 1000                | Indexing, Max Connections, Static                                | 170ms                       |
| 1000                | Indexing, Max Connections, Static, Async                         | 57ms                        |
| 1000                | Indexing, Max Connections, Static,  Async Close system processes | 38ms                        |

<details>
<summary>500 client requests per second</summary>
<br>

![Loader.io graph](/benchmarks/local/defaultConfig/500rpsavgmedian.png)
</details>

<details>
<summary>1000 client requests per second</summary>
<br>

![Loader.io graph](/benchmarks/local/defaultConfig/1000rpsavgmedian.png)

</details>

<details>
<summary>1000/RPS Modify DB Max Connections from 100 -> 1000 </summary>
<br>

![Loader.io graph](/benchmarks/local/1000-2000maxconnection.png)
</details>

<details>
<summary>1000/RPS Move Express Serve Index.html below api routes </summary>
<br>

![Loader.io graph](/benchmarks/local/1000static.png)
</details>

<details>
<summary>1000/RPS Convert database request functions to asynchronous </summary>
<br>

![Loader.io graph](/benchmarks/local/1000async.png)
</details>

<details>
<summary>1000/RPS Close unnecessary running processes in machine (Slack, Zoom, etc.) </summary>
<br>

![Loader.io graph](/benchmarks/local/1000rps38ms.png)
</details>

## Load Testing on AWS EC2 T2 Micro Instances

### Requests on random IDs

<details>
<summary>400 client requests per second</summary>
<br>

![Loader.io graph](/benchmarks/service/service-only/400Loader.png)
</details>

<details>
<summary>600 client requests per second</summary>
<br>

![Loader.io graph](/benchmarks/service/service-only/600Loader.png)
</details>

<details>
<summary>1000 client requests per second</summary>
<br>

![Loader.io graph](/benchmarks/service/no-cache/random/1000rps.png)
</details>

### Requests on One ID

<details>
<summary>1000/RPS | 2 services</summary>
<br>

![Loader.io graph](/benchmarks/service/no-cache/one-id/1000rps.png)
</details>

<details>
<summary>2000/RPS | 2 services</summary>
<br>

![Loader.io graph](/benchmarks/service/no-cache/one-id/2000rps-2services.png)
</details>

<details>
<summary>2000/RPS | 3 services</summary>
<br>

![Loader.io graph](/benchmarks/service/no-cache/one-id/2000rps-3services.png)
</details>

<details>
<summary>2000/RPS | 4 services</summary>
<br>

![Loader.io graph](/benchmarks/service/no-cache/one-id/2000rps-4services.png)
</details>

<details>
<summary>2000/RPS | 5 services</summary>
<br>

![Loader.io graph](/benchmarks/service/no-cache/one-id/2500rps-5services.png)
</details>

### Reverse Proxy Caching | Least Connections

<details>
<summary>2000/RPS | 2 services</summary>
<br>

![Loader.io graph](/benchmarks/service/cached/one-id/2000rps-cached.png)
</details>

<details>
<summary>5000/RPS | 2 services</summary>
<br>

![Loader.io graph](/benchmarks/service/cached/one-id/5000rps-cached.png)
</details>

<details>
<summary>10000/RPS | 1 service</summary>
<br>

![Loader.io graph](/benchmarks/service/cached/one-id/10000rps-cached-1service.png)
</details>

## Instructions
1. To create database, copy paste the schema.js file into your mysql.
2. To seed the database, input command "npm run seed"
3. Run npm run start on terminal to start server
4. Add your password to config.example.js and then rename the file to config.js
5. Go to package.json. Change "nodemon server/index.js" to "node server/index.js" and "webpack -d --watch" to "webpack"