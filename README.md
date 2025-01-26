# Estate Agent Client-Side Web Application

This repository contains the implementation of a responsive client-side web application for an estate agency, developed as part of the "Advanced Client-Side Web Development" coursework at the University of Westminster.

## Features

### 1. Dynamic Property Search
- Users can filter properties based on:
  - Type (e.g., house, flat, any).
  - Price range (minimum and maximum price).
  - Number of bedrooms (minimum and maximum).
  - Date added (after a specific date or within a range).
  - Postcode area (first part of the postcode, e.g., BR1, NW1).

### 2. Interactive UI Components
- Built using React and React UI widgets.
- Ensures a consistent, reliable, and accessible user experience.

### 3. Enhanced Property Details
- Each property has a dedicated page with:
  - A large image and thumbnail gallery (6-8 pictures per property).
  - Detailed descriptions, including property type, price, and location.
  - Floor plans and Google Maps integration using React Tabs.

### 4. Favorites Functionality
- Users can:
  - Add properties to a favorites list by dragging them or pressing a "favorite" button.
  - Remove properties from the favorites list by dragging them out or pressing a delete button.
  - Clear the entire favorites list.
- Favorites are stored using local browser storage.

### 5. Responsive Design
- Fully responsive layouts using handwritten media queries, flexbox, and grid layouts.
- Supports two layouts: large screen and smaller than iPad landscape width.
- Optimized for usability on mobile and desktop devices.

### 6. Security Features
- Implements basic client-side security measures:
  - Content Security Policy (CSP).
  - HTML encoding within JSX to prevent common vulnerabilities.

### 7. Aesthetics and Usability
- Clear visual hierarchy with grouped and aligned elements.
- Consistent color scheme and font usage.
- Visual elements such as images and headings enhance user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd estate-agent-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```

## Usage
- Use the search form to filter properties based on your criteria.
- Click on a property to view its details, images, and location.
- Add properties to your favorites list and manage them as desired.

## Technical Details
- **Framework:** React
- **Styling:** Custom CSS with flexbox, grid layouts, and media queries.
- **Data Storage:** JSON file for property data; local storage for favorites.
- **Plugins/Libraries Used:** React Tabs, image gallery plugins (if applicable).

## Notes
- This project is designed to run entirely client-side in a browser.
- The JSON file includes 7 properties to demonstrate a range of search results.
- No server-side components are used.

## Contribution
Contributions are welcome. Please fork the repository, create a feature branch, and submit a pull request.

## License
This project is for educational purposes and may not be redistributed or used commercially without permission.

---


