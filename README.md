# E-Commerce Nextjs Design Jam 2024 Template - Hackathon Project

This project is a fully functional e-commerce web application built during a hackathon hosted by **GIAIC Faculty**. It demonstrates my ability to transform a Figma design into a live, responsive e-commerce platform with advanced features and seamless user experience, all within 24 hours.

---
 
## Overview

The project includes the following core pages and features:

- **Homepage**: A visually engaging landing page with featured products and categories.
- **All Products Page**: Displays a list of all available products with filtering options.
- **Single Product Detail Page**: Provides detailed information about a selected product.
- **Cart Page**: Allows users to manage selected items for purchase.
- **Blog Page**: Includes articles related to e-commerce trends and insights.
- **Contact Page**: Lets users submit inquiries through a functional contact form.
- **Account Page**: Enables users to view and update their personal account details.
- **Checkout Page**: Streamlined and secure checkout experience for placing orders.

---

## Recent Enhancements

### Stripe Payment Integration
- Integrated **Stripe Payment Gateway** to enable secure online transactions.
- Implemented **Stripe Webhooks** for storing order details in **Sanity** CMS.

### Shipment and Tracking
- Integrated **ShipEngine API** for generating shipping labels and tracking shipments.
- Implemented a **shipping rate calculator** and live tracking functionality.

### Production Environment Improvements
- Optimized performance for production using advanced caching techniques and database queries.
- Enhanced user experience with rigorous testing and bug fixes.

---

## Features

- **Responsive Design**: Seamlessly adapts across all screen sizes using Tailwind CSS.
- **Dynamic Product Pages**: Displays detailed product information dynamically.
- **Advanced Cart Management**: Add, remove, and manage products in the cart.
- **Secure Payment Gateway**: Powered by Stripe for a smooth checkout process.
- **Order Management in Sanity**: Utilized Stripe Webhooks for storing orders.
- **Shipment Tracking**: Integrated ShipEngine API for tracking orders in real time.
- **Blog Section**: E-commerce-related articles for user engagement.
- **Contact Form**: Functional form for user inquiries with backend support.

---

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database & CMS**: [Sanity.io](https://www.sanity.io/)
- **Payment Integration**: [Stripe API](https://stripe.com/)
- **Shipping API**: [ShipEngine API](https://www.shipengine.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Font Optimization**: [Next Font](https://nextjs.org/docs/basic-features/font-optimization)

---

## Documentation

Comprehensive documentation of the application, including setup instructions, API details, and feature descriptions, can be found in the **documentation** folder of the project directory. Refer to the documentation for detailed guidance on extending and deploying this app.

---

## Getting Started

### Development Environment

To run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
