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

## Firebase Data Provider
The application uses a centralized React Context provider to manage all Firebase data with real-time updates.

### Implementation
```typescript
// providers/useData.tsx
const DataProvider = ({ children }) => {
  const [branches, setBranches] = useState(null);
  const [events, setEvents] = useState(null);
  const [executiveBoard, setExecutiveBoard] = useState(null);
  // ... other collections

  useEffect(() => {
    // Set up real-time listeners for all collections
    const unsubscribeBranches = onSnapshot(collection(db, 'branches'), (snapshot) => {
      setBranches(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    // ... other listeners
  }, []);

  return (
    <DataContext.Provider value={{ branches, events, executiveBoard, ... }}>
      {children}
    </DataContext.Provider>
  );
};
```

### Usage in Components
```typescript
const { branches, events } = useData();
```

### Key Features
- Fetches all collections on app load
- Real-time listeners for live updates
- Centralized data access via `useData()` hook

## Modal Management System
The application uses a hybrid approach combining Zustand for state management and React Context for rendering modals globally.

### Modal Provider Setup
All modals are rendered at the root level through the ModalProvider:

```typescript
// providers/ModalProvider.tsx
const ModalProvider = () => (
  <>
    <BranchModal />
    <EventsModal />
    <ExecutiveBoardModal />
    <ExecutiveMemberModal />
    <OpportunityModal />
    <PartnerModal />
    <StatisticsModal />
    <StoryModal />
    <VolunteerModal />
  </>
);
```

### Modal State Management (Zustand)
Each modal has its own Zustand store for state management:

```typescript
// hooks/useEventsModal.tsx
interface EventsModalStore {
  isOpen: boolean;
  currentEvent: any;
  newEvent: boolean;
  onOpen: () => void;
  onClose: () => void;
  setCurrentEvent: (event: any) => void;
}

const useEventsModal = create<EventsModalStore>((set) => ({
  isOpen: false,
  currentEvent: null,
  newEvent: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, currentEvent: null }),
  setCurrentEvent: (event) => set({ currentEvent: event, newEvent: false }),
}));
```

### Usage Pattern
```typescript
// In any component
const { onOpen, setCurrentEvent } = useEventsModal();

const handleEdit = (event) => {
  setCurrentEvent(event); // Set data
  onOpen();               // Open modal
};
```

### Available Modals
- `BranchModal.tsx` - Create/edit branches
- `EventsModal.tsx` - Create/edit events
- `ExecutiveBoardModal.tsx` - Create/edit board members
- `ExecutiveMemberModal.tsx` - View board member details
- `OpportunityModal.tsx` - Create/edit opportunities
- `PartnerModal.tsx` - Create/edit partners
- `StatisticsModal.tsx` - Create/edit statistics
- `StoryModal.tsx` - Create/edit stories
- `VolunteerModal.tsx` - Create/edit volunteers

## CRITICAL ISSUES
Throughout the codebase, you'll find comments labeled `{/* ISSUE: ... */}` that mark areas needing optimization, fixes, or improvements. These highlight performance bottlenecks, code quality concerns, and technical debt that should be addressed.

## Contact
- **Developer**: Micah Tid ([micahtid.vercel.app](https://micahtid.vercel.app))
- **Organization**: restoringrainbows.official@gmail.com
