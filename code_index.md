# ExpenSphere Code Index

## Core Files
- `index.html` - Main application file
- `config.js` - Configuration and credentials

## JavaScript Components

### Initialization
1. `loadGoogleAPIs()` - Dynamically loads Google API scripts
2. `loadConfiguration()` - Loads app configuration
3. `initializeApp()` - Main app initialization
4. `bootstrapApplication()` - Bootstraps the application
5. `initializeGoogleApi()` - Initializes Google API client

### Core Objects
1. `OfflineStorage` - Manages local storage operations
   - `savePendingTransaction()`
   - `getPendingTransactions()`
   - `removePendingTransaction()`
   - `clearPendingTransactions()`

2. `ModalManager` - Handles modal operations
   - `showEditModal()`
   - `closeModal()`
   - `getCurrentField()`

3. `EventHandlers` - Manages event handling
   - `handleSaveEdit()`
   - `handleSubmit()`
   - `handleSave()`

### Core Functions
1. Text Processing
   - `processInput()` - Processes user input
   - `analyzeTextContext()` - Analyzes text for categorization
   - `extractAmount()` - Extracts amount from text
   - `determinePaidTo()` - Determines recipient
   - `getConfidenceLevel()` - Calculates confidence score

2. UI Management
   - `displayEditableFields()` - Shows editable transaction fields
   - `updateTransactionCounter()` - Updates transaction navigation
   - `updatePendingBadge()` - Updates pending transactions badge
   - `clearForm()` - Resets form state

3. Transaction Management
   - `submitTransaction()` - Submits transaction to Google Sheets
   - `saveForLater()` - Saves transaction for later
   - `showPendingTransactions()` - Shows pending transactions
   - `submitPendingTransaction()` - Submits a pending transaction
   - `removePendingTransaction()` - Removes a pending transaction

4. Notification System
   - `showError()` - Shows error notification
   - `showSuccess()` - Shows success notification
   - `showInfo()` - Shows info notification
   - `showWarning()` - Shows warning notification
   - `closeError()` - Closes error notification

5. Loading State
   - `showLoading()` - Shows loading overlay
   - `hideLoading()` - Hides loading overlay

### Event Listeners
1. DOM Ready
   - Checks for required elements
   - Initializes application
   - Sets up event listeners

2. Input Events
   - Textarea input handling
   - Character counting
   - Debounced processing

3. Mobile Events
   - Touch navigation
   - Keyboard visibility
   - Viewport adjustments

## CSS Components

### Layout
1. Core Layout
   - Container structure
   - Responsive grid
   - Mobile optimizations

2. Components
   - Input section
   - Results section
   - Transaction cards
   - Modal system
   - Notifications

### Theme
1. Variables
   - Colors
   - Spacing
   - Typography

2. Dark Theme
   - Background colors
   - Text colors
   - Component styling

### Responsive Design
1. Mobile Optimizations
   - Touch targets
   - Safe areas
   - Keyboard handling
   - Viewport adjustments

## Version History
Current Version: v0.0.29
- Real-time input processing
- Offline mode support
- Google Sheets integration
- Mobile responsiveness
- Dark theme UI 