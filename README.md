# 🛍️ Arts E-commerce Assignment

A modern e-commerce web application built with Next.js 16, showcasing advanced frontend architecture, clean code practices, and a love for over-engineering simple things (because why not? 🚀).

---

## 📋 Assignment Requirements

This assignment evaluates expertise in frontend architecture, encompassing markup, styling, backend data integration, attention to detail, and overall user experience.

### Phase 1: Offline Assignment

**Objective:** Build a simple e-commerce web application using Next.js and the DummyJSON API as a source of data.

### Task Details

#### Required Pages:

1. **Home Page (Product List)**
   - Fetch and display a list of products from [https://dummyjson.com/products](https://dummyjson.com/products)
   - Each product card displays:
     - Product Image
     - Title
     - Price
     - Rating
   - Clicking on a product navigates to its Product Detail Page

2. **Product Details Page**
   - Dynamic route: `/products/[id]`
   - Fetch product details from [https://dummyjson.com/products/[id]](https://dummyjson.com/products/[id])
   - Display:
     - Title
     - Main image
     - Description
     - Price
     - Discount percentage
     - Rating

3. **Cart Page**
   - Users can:
     - Add products to cart
     - Remove products from cart
   - Cart page displays:
     - List of added products
     - Total item count
     - Total price
   - **Persistence:** Cart state persists within the session (using React Context, Zustand, or localStorage)

4. **Navigation**
   - Clear navigation between:
     - Home
     - Product Detail
     - Cart page
   - Header shows site name and cart icon with item count

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ (recommended)
- **pnpm** 9+ (package manager)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd arts-assignment

# Install dependencies
pnpm install

# Approve Sharp builds for image optimization (required for Next.js Image component)
pnpm approve-builds sharp
```

### Running Locally

```bash
# Development server (with hot reload)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Format code with Prettier
pnpm format

# Check code formatting
pnpm format:check

# Lint code
pnpm lint
```

The application will be available at [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Architecture & Tech Stack

### Core Technologies

- **Next.js 16** - React framework with App Router (latest!)
- **React 19** - Latest version with new features like `use()` hook
- **TypeScript 5** - Type safety throughout
- **Tailwind CSS v4** - Utility-first styling with new `@import` syntax
- **Zustand** - Lightweight state management
- **Lucide React** - Beautiful, consistent icons

### Project Structure

```
src/
├── app/              # Next.js App Router (pages & layouts)
├── components/       # React components organized by feature
│   ├── ui/          # Generic reusable UI components
│   ├── layout/      # Header, Footer
│   ├── providers/   # Context providers (Cart hydration)
│   ├── products/    # Product listing components
│   ├── product-detail/  # Product detail components
│   └── cart/        # Cart feature components
├── services/        # API service layer
├── stores/          # Zustand state management
├── types/           # TypeScript type definitions
├── constants/       # App constants (routes, etc.)
└── utils/           # Helper functions
```

### Key Design Patterns

- **Feature-based Organization** - Components grouped by feature (products, cart), not file type
- **Barrel Exports** - Each folder has `index.ts` for clean imports
- **Service Layer** - API logic separated from UI components
- **Component Extraction** - Small, focused components with single responsibility
- **Zustand Selectors** - Computed state without prop drilling
- **Server Components First** - SSR by default, client components only when needed
- **Type Safety** - Domain-specific types (product.types, cart.types, etc.)
- **Path Aliases** - Clean imports: `@/components/*`, `@/services/*`, `@/types`, etc.

---

## 💭 Thought Process & Trade-offs

### Why Next.js App Router?
- **Server-Side Rendering** - Better SEO and initial load performance
- **File-based Routing** - Intuitive route structure
- **Server Components** - Reduce client-side JavaScript bundle
- **Built-in Optimizations** - Image optimization, font loading, etc.

### Why Zustand over Redux/MobX/Context?
While I have extensive experience with Redux, MobX, and React Context, I chose Zustand for this project to:
- **Learn something new** - Always expanding my toolkit
- **Simplicity** - Less boilerplate than Redux
- **TypeScript-first** - Better DX than Context API
- **Performance** - Optimized re-renders out of the box
- **Middleware support** - Easy persistence with `persist` middleware

The API is incredibly intuitive - I was productive within minutes!

### Code Organization
Chose feature-based structure over traditional MVC because:
- **Scalability** - Easy to add new features without touching existing code
- **Modularity** - Each feature is self-contained
- **Developer Experience** - Related code lives together
- **Future-proof** - Architecture scales from small to large apps

### Styling Approach
Using Tailwind CSS because:
- **Utility-first** - Fast development without context switching
- **Consistency** - Design system tokens built-in
- **Performance** - Only ships used CSS
- **Developer Experience** - IntelliSense support with VS Code

---

## ✨ Implemented Features

### Core Functionality
1. ✅ **Product Listing** - Grid display with 12 products per page
2. ✅ **Pagination** - Navigate through all products with page controls
3. ✅ **Product Sorting** - Sort by price, rating, title (ascending/descending)
4. ✅ **Product Details** - Full product information with image carousel
5. ✅ **Product Reviews** - Display user reviews with ratings and timestamps
6. ✅ **Shopping Cart** - Add/remove items, update quantities with stock validation
7. ✅ **Cart Persistence** - Cart state saved to localStorage with SSR hydration
8. ✅ **Responsive Design** - Mobile-first design that works on all screen sizes
9. ✅ **Error Handling** - Custom error boundaries and API error handling
10. ✅ **SSR Optimization** - Server-side rendering for better performance and SEO

---

## ⚠️ Known Limitations

### Current Limitations

1. **No Search** - Product search not yet implemented
2. **No Category Filtering** - Category navigation not implemented
3. **No User Authentication** - Cart is anonymous (localStorage only)
4. **Basic Loading States** - Could benefit from skeleton screens
5. **No Animations** - Static UI without transitions

### Future Enhancements

- [ ] Implement search functionality with debouncing
- [ ] Add category filtering and navigation
- [ ] Add user authentication and account management
- [ ] Improve loading states with skeleton screens
- [ ] Add product comparison feature
- [ ] Implement wishlist functionality
- [ ] Add smooth animations and page transitions
- [ ] Optimize images with blur placeholders
- [ ] Add unit tests and E2E tests
- [ ] Implement full checkout flow with payment integration
- [ ] Add order history and tracking

---

## 🎨 A Note on Design

**Full disclosure:** I'm a developer who codes for logic, not aesthetics. If you're expecting award-winning UI design, you might want to lower those expectations just a tad. 😅

That said, I've aimed for:
- ✅ **Clean and professional** - No visual chaos here
- ✅ **Good UX patterns** - Navigation makes sense, things work as expected
- ✅ **Responsive design** - Works on all screen sizes
- ✅ **Accessible** - Semantic HTML, proper contrast ratios
- ✅ **Modern look** - Inspired by Stripe, Linear, and other clean designs

Think of it as "engineer chic" - minimal, functional, and maybe even pleasant to look at! The real magic is in the architecture under the hood. 🏗️

---

## 🧠 About My Approach

### State Management Evolution
My journey through state management:
- **Redux** - Solid foundation, great for large apps (but verbose)
- **MobX** - Reactive, magical (sometimes too magical)
- **React Context** - Built-in, works well for simple cases (prop drilling solution)
- **Zustand** - *New love* - Simple, powerful, TypeScript-friendly

This project gave me the perfect excuse to try Zustand, and I'm impressed! The API is clean, the middleware ecosystem is great, and the TypeScript support is excellent. No regrets!

### Why Over-Engineer a Simple App?
You might be thinking: "This is just a product list with a cart... why so much architecture?"

**Here's why:**
1. **Scalability** - Real apps start simple but grow complex
2. **Maintainability** - Future me (or teammates) will thank present me
3. **Learning** - Best way to learn is to practice good patterns from day one
4. **Professional Standards** - Treating every project like production code builds good habits
5. **Portfolio** - Demonstrates ability to architect, not just code features

I believe in **writing code like it'll be here for years**, even if it's a days project. Good architecture is a habit, not a luxury.

---

## 📚 Technologies & Learning

### New to Me in This Project
- ✅ **Next.js 16** (first time!) - App Router, Server Components, SSR patterns
- ✅ **Zustand** - Lightweight state management with selector pattern
- ✅ **Tailwind CSS v4** - Latest version with new `@import` syntax
- ✅ **Next.js Image Optimization** - Advanced image handling with Sharp

### Familiar Territory
- ✅ **TypeScript 5** - Advanced types, strict mode, path aliases
- ✅ **React 19** - Latest features including new hooks
- ✅ **State Management Patterns** - Redux, MobX, Context API experience
- ✅ **Modern Tooling** - pnpm, Prettier, ESLint, Git workflows

### Key Learnings
- **Zustand Selectors** - Efficient derived state without prop drilling
- **Next.js Hydration** - Handling SSR with client-side state (skipHydration + manual rehydration)
- **Component Extraction** - Modular architecture with proper separation of concerns
- **API Service Layer** - Clean separation between data fetching and UI logic
- **TypeScript Organization** - State/Actions split pattern for complex types

---

**Built with ❤️ and probably too much coffee ☕**
