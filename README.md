# TownMart — Community-Driven Marketplace

TownMart is a community-driven online marketplace designed to make buying and selling smoother and more interactive.
Users can list products, place bids, negotiate prices, and mark items as sold or pending.
It functions as a lightweight OLX/Craigslist-style platform — with an integrated bidding system.

---

## **Tech Stack**

![Stack Icons](https://skillicons.dev/icons?i=react,html,css,js,nodejs,express,mongodb,firebase,git,github)

### **Technology Table**

| Layer           | Technology                   |    |
| --------------- | ---------------------------- | -- |
| Frontend        | React, HTML, CSS, JavaScript |    |
| Backend         | Node.js, Express             |    |
| Database        | MongoDB                      |    |
| Authentication  | Firebase Auth                |    |
| API             | RESTful Architecture         |    |
| Version Control | Git, GitHub                  |  |


## **Features**

### **User Features**

* Create an account using Firebase Authentication
* Post items for sale with images and descriptions
* Place bids on products
* Track bid status (pending, accepted, rejected — *accept/reject functionality coming soon*)
* Manage personal bids and delete them
* View personal listings and product status

### **Seller / Admin Features**

* Approve or reject bids *(feature planned — not implemented yet, still in development)*
* Edit or delete product listings
* Mark items as *Available*, *Pending*, or *Sold*

### **System Features**

* JWT-secured API
* Axios Secure interceptor
* Protected routes for authenticated users
* RESTful backend architecture

---

## **Architecture Overview**

### **Frontend (React)**

* Component-driven UI
* React Router for navigation
* Axios Secure for API communication
* Firebase for authentication

### **Backend (Node + Express)**

* REST API structure
* JWT validation middleware
* Product, Bid, and User routes
* Error handling and route protection

### **Database (MongoDB)**

* `Users` Collection
* `Products` Collection
* `Bids` Collection

---

## **Folder Structure**

```
TownMart/
│
├── client/       # React Frontend
│   ├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   └── pages/
│
└── server/       # Node + Express Backend
    ├── routes/
    ├── controllers/
    ├── middleware/
    ├── models/
    └── utils/
```

---

## **API Endpoints**

### **Products**

```
GET    /products
GET    /products/:id
POST   /products
PATCH  /products/:id
DELETE /products/:id
```

### **Bids**

```
GET    /bids?email={userEmail}
POST   /bids
PATCH  /bids/:id
DELETE /bids/:id
```

---

## **Installation & Setup**

### 1. Clone Repository

```bash
git clone https://github.com/Riad-Zz/TownMart
cd TownMart
```

### 2. Client Setup

```bash
cd client
npm install
npm run dev
```

#### Client `.env`

```
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
```

---

### 3. Server Setup

```bash
cd server
npm install
nodemon index.js
```

#### Server `.env`

```
MONGO_URI=
JWT_SECRET=
PORT=5000
```

---

## **Security**

* JWT-based authentication
* Axios interceptor attaches tokens automatically
* Auto logout on 401/403 response codes

---

## **Future Enhancements**

* Real-time bidding with WebSockets
* Integrated buyer-seller chat
* Admin dashboard with analytics
* Product recommendation system

---

Repository: [https://github.com/Riad-Zz/TownMart](https://github.com/Riad-Zz/TownMart)
