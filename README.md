# 🛍️ Yunique Fashion Store — Yuno Payment Integration Demo

This project simulates the integration of **Yuno’s SDK FULL** for an embedded checkout experience inside Yunique Fashion Store’s India website.

It demonstrates:
✔ Credit Card payment flow  
✔ Embedded, **no redirect** checkout experience  
✔ Secure order creation handled via backend  
✔ Flexible architecture to add more payment methods later  

> Purpose: Assignment for **Technical Support Analyst Challenge — Yuno**
> Includes Dashboard configuration + SDK Full checkout flow demo. :contentReference[oaicite:1]{index=1}

---

## 🏗️ Architecture Overview

| Layer | Responsibility |
|------|----------------|
| Frontend | Beautiful product page + embedded credit card form, looks like official Yuno Checkout UI |
| Backend (Node.js + Express) | Handles session creation logic |
| Dummy Transaction Handler | Shows **Payment Successful** screen instantly (Test mode) |

---

## 📌 Dashboard Setup Done

| Dashboard Feature | Status |
|------------------|-------|
| ✓ Test Mode Enabled | ✔ |
| ✓ Yuno Account ID / User ID configured | ✔ |
| ✓ Test Payment Gateway for **Credit Cards** | ✔ |
| ✓ Routing rules for India (INR) | ✔ |
| ✓ Checkout Builder: SDK Full enabled | ✔ |

> Fully aligned with requirements: Test transaction + Routing + Checkout Builder setup :contentReference[oaicite:2]{index=2}

---

## 🚀 Tech Stack

| Tech | Usage |
|------|------|
| HTML + CSS | Checkout UI |
| Vanilla JavaScript | Payment form logic |
| Node + Express | Backend server simulation |

---

## ▶️ How to Run

```bash
npm install
npm start
