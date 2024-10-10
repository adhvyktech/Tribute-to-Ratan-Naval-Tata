# Interactive Life Timeline

This project is an interactive life timeline visualization using React and Vite.

## Local Setup

1. Clone the repository or download the project files.

2. Install Node.js from https://nodejs.org/ if you haven't already.

3. Open a terminal and navigate to the project directory:
   ```
   cd path/to/your/project
   ```

4. Install dependencies:
   ```
   npm install
   ```

5. Start the development server:
   ```
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173` (or the URL provided in the terminal).

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run preview`: Previews the production build
- `npm run lint`: Runs the linter

## Editing Content

To edit the mindmap nodes and timeline events, modify the `dummyEvents` array in `src/App.tsx`.

To add a new event:
```javascript
{ id: 21, year: 2025, title: 'New Event', description: 'Description of the new event' },
```

To delete an event, remove its object from the array.

To edit an event, modify its properties in the array.

## Project Structure

- `src/App.tsx`: Main application logic and data
- `src/components/`: React components
- `src/index.css`: Global styles
- `public/`: Static assets

## Customizing Styles

Edit `src/index.css` to customize the global styles of the application.

Component-specific styles can be found within each component file.