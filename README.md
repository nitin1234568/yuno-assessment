
📌 Yuno Payment Integration — Technical Assessment

This project demonstrates a simulated Yuno Checkout Integration including UI, payment flow, session creation logic, and confirmation screen — aligned with the test-mode requirements from the Yuno Dashboard.

> The assignment is fully implemented using the sandbox structure + API-like flow.




---

🚀 Features Implemented

Feature	Status

Product Checkout Page (Yuno-style UI)	✅
Embedded Credit Card Form	✅
Create Payment Session Button	✅
Success Confirmation & Order UI (No redirect required for test mode)	✅
Backend APIs using Express	✅
Configurable .env with Yuno keys	🔐 Supported
Folder structure aligned with professional Yuno SDK implementation	✅



---

📂 Folder Structure

yuno-assessment/
├── public/
│   ├── index.html     # Checkout page
│   ├── style.css      # UI styling
│   ├── app.js         # Session request + success handler
├── server.js          # Backend API/server (Express)
├── .env               # Yuno keys (not committed)
├── README.md
└── package.json


---

🛠️ Tech Stack

Layer	Technology

Frontend	HTML, CSS, JavaScript
Backend	Node.js + Express
API Handling	Fetch (simulated session creation + success UI)
Version Control	Git & GitHub
Test Environment	Localhost



---

▶️ How to Run Locally

# Install dependencies
npm install

# Start server
npm start

Then open:

👉 http://localhost:5000/
