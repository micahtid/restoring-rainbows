# Restoring Rainbows

## Tech Stack
- Next.js 14 (React 18) with TypeScript
- Tailwind CSS
- Firebase Firestore + Storage
- Zustand (state management)

## Project Structure
```
app/                          # Next.js app router
├── admin/                    # Admin dashboard pages
│   ├── components/           # Admin-specific components
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
├── about/events/partners/    # About organization
├── branches/team/            # Organization branches
├── opportunities/            # Volunteer opportunities
├── globals.css               # Global styles
├── layout.tsx                # Root layout with providers
└── page.tsx                  # Homepage
components/
├── landing-page/             # Homepage sections
│   ├── Hero.tsx            
│   ├── SocialMedia.tsx    
│   └── ...
├── modals/                   # Admin CRUD modals
│   ├── EventsModal.tsx       
│   ├── ExecutiveMemberModal.tsx
│   └── ...
├── NavBar.tsx                # Main navigation
├── Modal.tsx                 # Base modal component
└── ...
hooks/                        # Zustand stores for modal states
├── useEventsModal.tsx
├── useExecutiveMemberModal.tsx
└── ...
providers/                    # React context providers
├── ModalProvider.tsx         # Renders all modals globally
├── ToastProvider.tsx         # Notification system
└── useData.tsx               # Firebase real-time data provider
utils/
├── database.ts               # Firebase CRUD operations
└── utils.ts                  # Helper functions
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

### Modal System
**Architecture**: Global modal rendering with individual Zustand stores

**ModalProvider** (`providers/ModalProvider.tsx`):
- Renders ALL modal components at root level
- Each modal conditionally shows based on Zustand state

**Individual Modal Hooks** (`hooks/use*Modal.tsx`):
- Each modal type has its own Zustand store
- Manages open/close state and current data

**Usage Pattern**:
```typescript
// In any component...
const { onOpen, setCurrentEvent } = useEventsModal();

// Open modal:
const handleEdit = (event) => {
  setCurrentEvent(event);
  onOpen();
};
```

**Modal Components** (`components/modals/`):
- `BranchModal.tsx` - Add/edit organization branches worldwide
- `EventsModal.tsx` - Create/edit events with multi-image upload
- `ExecutiveBoardModal.tsx` - Manage board member profiles
- `ExecutiveMemberModal.tsx` - Display individual board member bios
- `OpportunityModal.tsx` - Add/edit volunteer opportunities
- `PartnerModal.tsx` - Manage partner organization details
- `StatisticsModal.tsx` - Update impact metrics and statistics
- `StoryModal.tsx` - Create/edit blog posts and articles
- `VolunteerModal.tsx` - Manage volunteer profiles and information

## CRITICAL ISSUES
Throughout the codebase, you'll find comments labeled `{/* ISSUE: ... */}` that mark areas needing optimization, fixes, or improvements. These highlight performance bottlenecks, code quality concerns, and technical debt that should be addressed.

## Contact
- **Developer**: Micah Tid ([micahtid.vercel.app](https://micahtid.vercel.app))
- **Organization**: restoringrainbows.official@gmail.com