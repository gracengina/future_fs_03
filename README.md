

# Whisk & Whip: Professional Bakery E-Commerce 

**Whisk & Whip** is a full-stack web application developed for a local bakery in Membly, Ruiru. It transforms a traditional physical flyer into a modern, weight-based digital menu, allowing customers to browse signature bakes and order directly via WhatsApp.

##  Features

* **Dynamic Menu:** Real-time menu updates powered by a MySQL database and Node.js API.
* **Smart Categorization:** Automatically groups items into Cakes, Cookies, and Cupcakes using JavaScript logic.
* **Weight-Based Pricing:** Custom layout specifically for cakes sold in 1kg, 1.5kg, and 2kg increments.
* **WhatsApp Integration:** "Order Now" buttons that pre-fill a message for the baker.
* **Modern UI:** Responsive design built with Tailwind CSS, featuring a "staggered" hero image gallery.

---

##  Tech Stack

* **Frontend:** Next.js 15 (App Router), Tailwind CSS.
* **Backend:** Node.js, Express.js.
* **Database:** MySQL.
* **Deployment:** Vercel (Frontend) & Railway (Backend/DB).

---

##  Project Structure

```text
whisknwhip/
├── whisknwhip-frontend/    # Next.js Application
│   ├── src/app/menu        # Dynamic Menu Page
│   └── public/             # Product & Logo Images
├── whisknwhip-backend/     # Express API
│   ├── server.js           # API Entry Point
│   └── .env                # Database Credentials (Hidden)
└── README.md               # Project Documentation

```

---

## ⚙️ Installation & Setup

### 1. Prerequisites

* Node.js (v18+)
* MySQL Server

### 2. Backend Setup

1. Navigate to the backend folder: `cd whisknwhip-backend`
2. Install dependencies: `npm install`
3. Create a `.env` file and add your MySQL credentials:
```text
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=whisknwhip

```


4. Start the server: `npm start` (Runs on `http://localhost:5000`).

### 3. Frontend Setup

1. Navigate to the frontend folder: `cd whisknwhip-frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`.
4. Open `http://localhost:3000` in your browser.

---

##  Image Management
To display product photos, save `.jpg` files in the `public/` folder using the naming convention:

* `product-{id}.jpg` (Where `{id}` matches the product ID in your MySQL table).

---

## 👤 Author

**Grace** *Computer Science Student, Dedan Kimathi University of Technology*.
