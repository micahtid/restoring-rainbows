# Restoring Rainbows

## Tech Stack
- Next.js 14 (React 18) with TypeScript
- Tailwind CSS
- Firebase Firestore + Storage
- Zustand (State Management)

## Project Structure
```
app/                          # Next.js App Router
├── admin/                    # Admin Dashboard Pages
│   ├── components/           # Admin-Specific Components
│   │   ├── BranchDashboard.tsx
│   │   ├── EventsDashboard.tsx
│   │   ├── ExecutiveDashboard.tsx
│   │   ├── OpportunityDashboard.tsx
│   │   ├── PartnersDashboard.tsx
│   │   ├── StatisticsDashboard.tsx
│   │   ├── StoriesDashboard.tsx
│   │   ├── VolunteersDashboard.tsx
│   │   ├── DataLine.tsx
│   │   └── EntryField.tsx
│   └── page.tsx
├── about/events/partners/    # About Organization
├── branches/team/            # Organization Branches
├── opportunities/            # Volunteer Opportunities
├── globals.css               # Global Styles
├── layout.tsx                # Root Layout with Providers
└── page.tsx                  # Homepage
components/
├── landing-page/             # Homepage Sections
│   ├── Hero.tsx            
│   ├── SocialMedia.tsx    
│   └── ...
├── modals/                   # Admin CRUD Modals
│   ├── EventsModal.tsx       
│   ├── ExecutiveMemberModal.tsx
│   └── ...
├── NavBar.tsx                # Main Navigation
├── Modal.tsx                 # Base Modal Component
└── ...
hooks/                        # Zustand Stores for Modal States
├── useEventsModal.tsx
├── useExecutiveMemberModal.tsx
└── ...
providers/                    # React Context Providers
├── ModalProvider.tsx         # Renders All Modals Globally
├── ToastProvider.tsx         # Notification System
└── useData.tsx               # Firebase Real-Time Data Provider
utils/
├── database.ts               # Firebase CRUD Operations
└── utils.ts                  # Helper Functions
data/
└── index.tsx                 # Static Content
```

## Environment Variables
Create `.env.local`:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# API Keys
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token
```

## Setup
```bash
npm install
npm run dev
```

## Firebase Collections Structure
```typescript
branches/
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

events/
├── title: string
├── content: string
├── branch: string
├── location: string
├── createdAt: Timestamp
└── images: string[] (Firebase Storage URLs)

executiveBoard/
├── firstName: string
├── lastName: string
├── role: string
├── position: string
├── bio: string
└── picture: string (Firebase Storage URL)

partners/
├── name: string
├── description: string
├── logo: string (Firebase Storage URL)
├── website: string
├── instagram: string
└── highlyValued: boolean

opportunities/
├── title: string
├── description: string
├── link?: string
└── createdAt: Timestamp

statistics/
├── number: string
├── description: string
└── createdAt: Timestamp

stories/
├── title: string
├── content: string
├── author: string
├── coverImage: string (Firebase Storage URL)
└── createdAt: Timestamp

volunteers/
├── firstName: string
├── lastName: string
├── role: string
├── bio: string
├── picture: string (Firebase Storage URL)
└── linkedIn?: string
```

## Context & State Management

### Firebase Data Provider
`providers/useData.tsx` uses React Context to provide real-time Firebase data:
- Fetches all collections on app load
- Sets up real-time listeners for live updates
- Provides data to all components via `useData()` hook
- Centralizes all data access

### Modal System
**Architecture**: Global modal rendering with individual Zustand stores

**ModalProvider** (`providers/ModalProvider.tsx`):
- Renders ALL modal components at root level
- Each modal conditionally shows based on Zustand state
- Prevents prop drilling and ensures modals work from anywhere

**Individual Modal Hooks** (`hooks/use*Modal.tsx`):
- Each modal type has its own Zustand store
- Manages open/close state + current data
- Example: `useEventsModal()` for event CRUD operations

**Usage Pattern**:
```typescript
// In any component
const { onOpen, setCurrentEvent } = useEventsModal();

// Open modal with data
const handleEdit = (event) => {
  setCurrentEvent(event);
  onOpen();
};
```

**Modal Components** (`components/modals/`):
- Form-based CRUD interfaces
- Handle file uploads to Firebase Storage
- Use `utils/database.ts` for operations
- Auto-close and refresh data on success

## CRITICAL ISSUES

### Performance
**ISSUE Comments**: All `{/* ISSUE: Change to <Image /> */}` comments mark HTML `<img>` tags that must be replaced with Next.js `<Image />` components for optimization.

### Code Quality
1. **Arbitrary CSS Values**: Many `w-[500px]` type values need design system tokens
2. **Firebase Security**: Currently allows all read/write operations
3. **Responsive Inconsistencies**: Mobile breakpoints vary across components

## Key Files
- `utils/database.ts` - All Firebase CRUD operations
- `providers/useData.tsx` - Real-time data provider
- `data/index.tsx` - Static content and navigation
- `tailwind.config.ts` - Design system colors/fonts

## Priority Fixes
1. Replace all `<img>` with `<Image />`
2. Fix arbitrary Tailwind values
3. Implement Firebase security rules
4. Add comprehensive error handling

## Common Issues
- **Instagram API**: Token expires, check validity and renew
- **Firebase**: Check environment variables if data not loading
- **Build Errors**: Missing types, update @types packages
- **Responsive**: Replace arbitrary values with design tokens

## Contact
- **Developer**: Micah Tid ([micahtid.vercel.app](https://micahtid.vercel.app))
- **Organization**: restoringrainbows.official@gmail.com