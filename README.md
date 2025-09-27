# Restoring Rainbows - Official Website

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 14 (React 18) with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: AOS (Animate On Scroll), Framer Motion, React Spring
- **Carousel/Sliders**: Swiper.js
- **Maps**: React Google Maps API, React Leaflet
- **Icons**: React Icons
- **State Management**: Zustand for global state
- **Notifications**: React Hot Toast

### Backend & Database
- **Database**: Firebase Firestore (NoSQL)
- **Storage**: Firebase Storage for file uploads
- **Authentication**: Firebase Auth (for admin access)
- **Real-time Updates**: Firestore real-time listeners

### Development & Build Tools
- **Language**: TypeScript
- **Build Tool**: Next.js built-in bundler
- **Linting**: ESLint with Next.js config
- **Package Manager**: npm
- **Deployment**: Optimized for Vercel

---

## 📁 Project Structure

```
restoring-rainbows/
├── app/                          # Next.js App Router
│   ├── admin/                    # Admin dashboard pages
│   │   ├── components/           # Admin-specific components
│   │   │   ├── BranchDashboard.tsx
│   │   │   ├── EventsDashboard.tsx
│   │   │   ├── ExecutiveDashboard.tsx
│   │   │   ├── OpportunityDashboard.tsx
│   │   │   ├── PartnersDashboard.tsx
│   │   │   ├── StatisticsDashboard.tsx
│   │   │   ├── StoriesDashboard.tsx
│   │   │   ├── VolunteersDashboard.tsx
│   │   │   ├── DataLine.tsx       # Reusable data display component
│   │   │   └── EntryField.tsx     # Form input component
│   │   └── page.tsx              # Main admin dashboard
│   ├── about/                    # About page
│   │   ├── components/
│   │   │   ├── MissionStatement.tsx
│   │   │   └── WhyWeMatter.tsx
│   │   └── page.tsx
│   ├── branches/                 # Branch-related pages
│   │   ├── branch/              # Individual branch page
│   │   │   └── page.tsx         # Dynamic branch details
│   │   ├── components/
│   │   │   ├── BranchList.tsx
│   │   │   ├── DropDown.tsx
│   │   │   └── WhatAreBranches.tsx
│   │   └── page.tsx             # Branches listing
│   ├── events/                  # Events section
│   │   ├── item/               # Individual event page
│   │   │   └── page.tsx        # Dynamic event details with Swiper gallery
│   │   ├── components/
│   │   │   ├── EventDisplay.tsx
│   │   │   └── SearchBar.tsx
│   │   └── page.tsx            # Events listing
│   ├── opportunities/          # Volunteer opportunities
│   │   ├── opportunity/        # Individual opportunity page
│   │   │   └── page.tsx
│   │   ├── volunteer-worksheet/ # Specific worksheet submission page
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── OpportunityHeader.tsx
│   │   │   └── OpportunityList.tsx
│   │   └── page.tsx
│   ├── partners/               # Partners section
│   │   ├── partner/           # Individual partner page
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   └── PartnersList.tsx
│   │   └── page.tsx
│   ├── team/                  # Team section
│   │   ├── components/
│   │   │   ├── ExecutiveBoard.tsx
│   │   │   └── Volunteers.tsx
│   │   └── page.tsx
│   ├── coming-soon/           # Coming soon placeholder
│   │   └── page.tsx
│   ├── prism/                 # Blog/stories section
│   │   └── page.tsx
│   ├── globals.css            # Global styles and CSS variables
│   ├── layout.tsx             # Root layout with providers
│   ├── page.tsx               # Homepage
│   └── icon.ico              # Favicon
├── components/                # Reusable UI components
│   ├── landing-page/         # Homepage-specific components
│   │   ├── AboutUs.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx          # Main hero section with AOS animations
│   │   ├── Mission.tsx
│   │   ├── Partners.tsx
│   │   ├── Prism.tsx
│   │   ├── RecentEvents.tsx
│   │   ├── SocialMedia.tsx   # Instagram integration
│   │   ├── Statistics.tsx
│   │   ├── TakeAction.tsx
│   │   ├── WhatWeDo.tsx
│   │   └── hero.css          # Hero-specific styles
│   ├── modals/               # Modal components for admin
│   │   ├── BranchModal.tsx
│   │   ├── EventsModal.tsx   # Multi-image upload support
│   │   ├── ExecutiveBoardModal.tsx
│   │   ├── ExecutiveMemberModal.tsx
│   │   ├── OpportunityModal.tsx
│   │   ├── PartnerModal.tsx
│   │   ├── StatisticsModal.tsx
│   │   ├── StoryModal.tsx
│   │   └── VolunteerModal.tsx
│   ├── ArrowButton.tsx       # Custom arrow button with CSS
│   ├── Highlight.tsx         # Text highlight component
│   ├── InputField.tsx        # Form input component
│   ├── Loader.tsx           # Loading spinner
│   ├── Map.tsx              # Google Maps integration
│   ├── Modal.tsx            # Base modal component
│   ├── NavBar.tsx           # Main navigation with mobile menu
│   ├── OutlineButton.tsx    # Outlined button component
│   ├── TakeActionItem.tsx   # Action item component
│   ├── arrow-button.css     # Button-specific styles
│   └── loader.css           # Loader animations
├── data/                    # Static data and constants
│   └── index.tsx           # All static content and configuration
├── hooks/                  # Custom React hooks (Zustand stores)
│   ├── useBranchModal.tsx
│   ├── useEventsModal.tsx
│   ├── useExecutiveBoardModal.tsx
│   ├── useExecutiveMemberModal.tsx
│   ├── useNavModal.tsx
│   ├── useOpportunityModal.tsx
│   ├── usePartnerDisplayModal.tsx
│   ├── usePartnerModal.tsx
│   ├── useStatisticsModal.tsx
│   ├── useStoriesModal.tsx
│   └── useVolunteerModal.tsx
├── providers/              # React context providers
│   ├── ModalProvider.tsx   # Global modal state management
│   ├── ToastProvider.tsx   # Toast notification provider
│   └── useData.tsx         # Firebase data provider with real-time updates
├── utils/                  # Utility functions
│   ├── database.ts         # Firebase operations and data management
│   └── utils.ts           # Helper functions and data transformations
├── public/                # Static assets (images, icons, etc.)
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- Firebase project with Firestore and Storage enabled
- Google Maps API key
- Instagram API access token

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# API Keys
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token
```

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd restoring-rainbows
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in all required API keys and configuration

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## 🏗️ Architecture & Design Patterns

### Data Flow
1. **Firebase Provider** (`providers/useData.tsx`) manages all data fetching and real-time updates
2. **Zustand Hooks** (`hooks/`) handle modal states and UI interactions
3. **Components** consume data through the Firebase provider and interact via Zustand stores
4. **Admin Dashboard** provides CRUD operations through `utils/database.ts`

### State Management
- **Global Data**: Firebase provider with React Context
- **Modal States**: Individual Zustand stores for each modal type
- **UI State**: Local React state for component-specific interactions

### Styling Architecture
- **Design System**: Custom Tailwind configuration with brand colors and typography
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Styles**: Tailwind classes with minimal custom CSS files
- **Animations**: AOS for scroll animations, Framer Motion for complex animations

---

## 🔄 Data Management

### Firebase Collections Structure

```typescript
// Firestore Collections
branches/           # Organization branches worldwide
├── country: string
├── state: string
├── city: string
├── community: string
├── email: string
├── instagram: string
├── photoOne: string (Firebase Storage URL)
├── firstNameOne: string
├── lastNameOne: string
├── bioOne: string
├── photoTwo?: string
├── firstNameTwo?: string
├── lastNameTwo?: string
└── bioTwo?: string

events/             # Organization events
├── title: string
├── content: string
├── branch: string
├── location: string
├── createdAt: Timestamp
└── images: string[] (Firebase Storage URLs)

executiveBoard/     # Board members
├── firstName: string
├── lastName: string
├── role: string
├── position: string
├── bio: string
└── picture: string (Firebase Storage URL)

opportunities/      # Volunteer opportunities
├── title: string
├── description: string
├── link?: string
└── createdAt: Timestamp

partners/           # Organization partners
├── name: string
├── description: string
├── logo: string (Firebase Storage URL)
├── website: string
├── instagram: string
└── highlyValued: boolean

statistics/         # Impact statistics
├── number: string
├── description: string
└── createdAt: Timestamp

stories/           # Blog posts/articles
├── title: string
├── content: string
├── author: string
├── coverImage: string (Firebase Storage URL)
└── createdAt: Timestamp

volunteers/        # Volunteer profiles
├── firstName: string
├── lastName: string
├── role: string
├── bio: string
├── picture: string (Firebase Storage URL)
└── linkedIn?: string
```

### Database Operations
All database operations are centralized in `utils/database.ts`:
- CRUD operations for all collections
- File upload handling to Firebase Storage
- Error handling and user feedback via toast notifications
- Optimistic updates for better UX

---

## 🎨 Design System

### Colors (Tailwind Config)
```typescript
colors: {
  offwhite: "#fafafa",    // Background color
  primary: "#73a0e1",     // Main brand blue
  secondary: "#e3f0ff",   // Light blue background
  complement: "#f3e2ca",  // Warm accent color
  header: "#23313f",      // Dark text color
  body: "#4A4A4A"         // Body text color
}
```

### Typography
```typescript
fontFamily: {
  title: ['Plus Jakarta Sans', 'sans-serif'],    // Headers and titles
  accent: ['Roboto Mono', 'monospace'],          // Special accents
  accent2: ['Open Sans', 'sans-serif']           // Alternative font
}
```

### Custom Utility Classes
- `dynamic-*` classes for responsive typography
- `max-w-max` for consistent content width (1200px)
- `px-x` for consistent horizontal padding (20px)

---

## ⚠️ Known Issues & Code Quality Concerns

### ISSUE Comments Throughout Codebase
**What they are**: You'll find `{/* ISSUE: Change to <Image /> */}` comments above HTML `<img>` tags throughout the codebase.

**Why they exist**: For better performance and Next.js optimization, all HTML `<img>` tags should be replaced with Next.js `<Image />` components. These comments mark all locations that need this optimization.

**Files affected**:
- All landing page components
- Modal components
- Admin dashboard components
- Event and partner display components

### Other Code Quality Issues

1. **Arbitrary Values in CSS**
   - Many Tailwind classes use arbitrary values like `w-[500px]` or `mt-[150px]`
   - These should be converted to design system tokens for consistency
   - Look for comments mentioning "arbitrary values"

2. **Responsive Design Inconsistencies**
   - Some components have complex responsive logic that could be simplified
   - Mobile breakpoints are not always consistent

3. **Firebase Security Rules**
   - Currently set to allow all read/write operations (noted in `database.ts`)
   - Should implement proper authentication and authorization rules

4. **Error Handling**
   - Some API calls lack comprehensive error handling
   - Instagram API errors are logged but not always user-facing

5. **Performance Optimizations Needed**
   - Large images not optimized (another reason for Image component migration)
   - Some components could benefit from React.memo
   - Bundle size could be reduced by code splitting

---

## 🔌 API Integrations

### Instagram API
- **Purpose**: Display latest posts on homepage
- **Implementation**: `components/landing-page/SocialMedia.tsx`
- **Configuration**: Requires Instagram Business account and access token
- **Refresh**: Access token needs periodic renewal

### Google Maps API
- **Purpose**: Display branch locations on interactive map
- **Implementation**: `components/Map.tsx`
- **Features**: Custom markers, info windows, responsive design
- **Configuration**: Requires Google Cloud project with Maps API enabled

### Firebase APIs
- **Firestore**: Real-time database for all dynamic content
- **Storage**: File uploads for images and documents
- **Auth**: Admin authentication (minimal implementation)

---

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Connect repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on git push

### Manual Deployment
```bash
npm run build
# Upload .next folder and package.json to hosting provider
npm start
```

### Build Optimization
- Next.js automatically optimizes for production
- Image optimization configured for Firebase Storage domains
- Static assets cached with proper headers

---

## 🛠️ Development Workflow

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Development Best Practices
1. **Component Structure**: Keep components small and focused
2. **State Management**: Use Zustand for complex UI state, React state for simple cases
3. **Styling**: Follow Tailwind conventions, avoid custom CSS when possible
4. **Data Fetching**: Always use the Firebase provider, don't create direct Firebase calls
5. **Error Handling**: Always provide user feedback for async operations

### Adding New Features

#### Adding a New Page
1. Create page in `app/[page-name]/page.tsx`
2. Add navigation link to `data/index.tsx` (extendedNavItems)
3. Create page-specific components in `app/[page-name]/components/`

#### Adding a New Admin Section
1. Create dashboard component in `app/admin/components/[Feature]Dashboard.tsx`
2. Create modal in `components/modals/[Feature]Modal.tsx`
3. Add Zustand hook in `hooks/use[Feature]Modal.tsx`
4. Add database operations in `utils/database.ts`
5. Update Firebase provider if new collection needed

#### Adding a New Data Type
1. Define collection structure in `utils/database.ts`
2. Add CRUD operations
3. Update Firebase provider (`providers/useData.tsx`)
4. Create admin interface components
5. Update TypeScript types throughout

---

## 🔐 Security Considerations

### Current Security State
- **Firebase Rules**: Currently permissive (development setup)
- **Admin Access**: Basic authentication, needs enhancement
- **API Keys**: Client-side exposed (standard for these APIs)
- **File Uploads**: Limited validation

### Security Improvements Needed
1. Implement proper Firebase security rules
2. Add file type validation for uploads
3. Implement proper admin role management
4. Add CSRF protection for admin operations
5. Sanitize user inputs in admin forms

---

## 📊 Performance Considerations

### Current Performance State
- **Images**: Not optimized (using HTML img tags)
- **Bundle Size**: Could be optimized with code splitting
- **Database**: Real-time listeners for all data (could be optimized)
- **API Calls**: Instagram API called on every page load

### Performance Improvements Needed
1. **Priority 1**: Replace all `<img>` tags with Next.js `<Image />` components
2. **Priority 2**: Implement lazy loading for non-critical components
3. **Priority 3**: Add React.memo to prevent unnecessary re-renders
4. **Priority 4**: Implement proper caching strategy for Instagram API
5. **Priority 5**: Code splitting for admin components

---

## 🐛 Common Issues & Troubleshooting

### Instagram API Issues
- **Problem**: Posts not loading
- **Solution**: Check access token validity, renew if needed
- **Prevention**: Implement token refresh logic

### Firebase Connection Issues
- **Problem**: Data not loading or updating
- **Solution**: Check environment variables and Firebase project settings
- **Prevention**: Add better error handling and retry logic

### Build Issues
- **Problem**: Build fails with TypeScript errors
- **Solution**: Check for missing types, update @types packages
- **Prevention**: Use strict TypeScript configuration

### Styling Issues
- **Problem**: Responsive design breaks on certain devices
- **Solution**: Review arbitrary values and replace with consistent breakpoints
- **Prevention**: Use design system tokens instead of arbitrary values

---

## 📚 Learning Resources

### Key Technologies to Understand
1. **Next.js 14**: App Router, Server Components, Image Optimization
2. **Firebase**: Firestore queries, real-time listeners, file uploads
3. **Tailwind CSS**: Utility-first CSS, responsive design, custom configuration
4. **TypeScript**: Type safety, interfaces, generic types
5. **Zustand**: Lightweight state management

### Helpful Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)

---

## 🤝 Contributing Guidelines

### Code Style
- Use TypeScript for all new files
- Follow existing naming conventions
- Use Tailwind CSS for styling
- Add comments for complex logic
- Update this README when adding major features

### Pull Request Process
1. Create feature branch from main
2. Implement changes with proper testing
3. Update documentation if needed
4. Submit pull request with detailed description

### Testing
- Currently no automated testing setup
- Manual testing required for all changes
- Test admin functionality thoroughly
- Verify responsive design on multiple devices

---

## 📞 Support & Contact

### Original Developer
- **Developer**: Micah Tid
- **Portfolio**: [micahtid.vercel.app](https://micahtid.vercel.app)

### Organization Contact
- **Organization**: Restoring Rainbows
- **Email**: restoringrainbows.official@gmail.com
- **Website**: [Current deployment URL]

### Emergency Contacts
- Firebase project owner credentials
- Domain registrar access
- Hosting provider access
- API key management access

---

## 📋 Migration Checklist for New Developer

### Immediate Tasks
- [ ] Set up development environment
- [ ] Configure all API keys and environment variables
- [ ] Run project locally and verify all features work
- [ ] Review Firebase project structure and permissions
- [ ] Understand admin dashboard functionality

### Priority Improvements
- [ ] Replace all `<img>` tags with Next.js `<Image />` components
- [ ] Review and fix arbitrary Tailwind values
- [ ] Implement proper Firebase security rules
- [ ] Add comprehensive error handling
- [ ] Optimize performance bottlenecks

### Long-term Enhancements
- [ ] Add automated testing
- [ ] Implement better caching strategies
- [ ] Add admin user management
- [ ] Enhance mobile experience
- [ ] Implement analytics and monitoring

---

**Built with ❤️ by Micah Tid for Restoring Rainbows**

*This README serves as a comprehensive guide for any developer taking over this project. It contains everything needed to understand, maintain, and enhance the Restoring Rainbows website.*