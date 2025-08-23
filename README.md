# Sneakers E-commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS v4. This project showcases a clean product page design with an interactive image gallery, shopping cart functionality, and mobile-first responsive design.

## 🚀 Features

- **Interactive Product Gallery** - High-quality image viewer with thumbnail navigation and lightbox modal
- **Shopping Cart** - Add/remove items with real-time quantity updates and price calculations
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI Components** - Built with Radix UI primitives and custom styling
- **TypeScript Support** - Full type safety throughout the application
- **Performance Optimized** - Fast loading with Vite bundler and optimized assets

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **State Management:** React hooks (useState, useCallback)
- **Image Handling:** SVG assets with Vite optimization

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd sneakers-ecommerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── Header.tsx      # Navigation header with cart
│   ├── ProductGallery.tsx  # Image gallery component
│   ├── ProductDetails.tsx  # Product info and purchase controls
│   ├── CartDropdown.tsx    # Shopping cart dropdown
│   └── MobileMenu.tsx      # Mobile navigation menu
├── hooks/              # Custom React hooks
│   └── useCart.ts      # Shopping cart state management
├── types/              # TypeScript type definitions
│   └── index.ts        # Product and cart interfaces
├── data/               # Mock data and constants
│   └── productData.ts  # Product information
├── assets/             # Static assets (images, icons)
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## 🎨 Design Features

### Product Gallery

- **Thumbnail Navigation** - Click thumbnails to switch main image
- **Lightbox Modal** - Full-screen image viewing with keyboard navigation
- **Hover Effects** - Smooth transitions and visual feedback
- **Responsive Layout** - Adapts to different screen sizes

### Shopping Cart

- **Real-time Updates** - Instant quantity and price calculations
- **Persistent State** - Cart contents maintained during session
- **Visual Feedback** - Item counter badge and smooth animations
- **Empty State** - Clean messaging when cart is empty

### Mobile Experience

- **Touch-friendly** - Optimized for mobile interactions
- **Slide-out Menu** - Clean navigation for smaller screens
- **Responsive Images** - Properly scaled for mobile viewing
- **Performance** - Fast loading on mobile networks

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Key Components

### useCart Hook

Custom hook managing shopping cart state with the following features:

- Add/remove items
- Quantity management
- Price calculations
- Cart visibility toggle

### Product Gallery

Interactive image gallery supporting:

- Multiple product images
- Thumbnail navigation
- Lightbox modal view
- Keyboard navigation

### Responsive Header

Navigation component featuring:

- Mobile hamburger menu
- Shopping cart with item counter
- User avatar
- Smooth hover animations

## 🚀 Performance Optimizations

- **Vite Build Tool** - Fast development and optimized production builds
- **JPG Assets** - Scalable vector graphics for crisp images
- **Code Splitting** - Automatic chunking for faster loading
- **CSS Optimization** - Tailwind CSS purging for minimal bundle size
- **Image Optimization** - Proper sizing and lazy loading

## 🎨 Customization

### Colors

The design uses a carefully selected color palette:

- **Primary:** Orange (#f97316) for CTAs and highlights
- **Neutral:** Gray scale for text and backgrounds
- **Accent:** Black for premium feel

### Typography

- **Font Family:** Inter for clean, modern readability
- **Font Weights:** 400 (regular), 600 (semibold), 700 (bold)
- **Responsive Sizing:** Scales appropriately across devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is not licensed yet.

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- Icons provided by [Lucide React](https://lucide.dev/)
- UI components built with [Radix UI](https://www.radix-ui.com/)
- Styling powered by [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
