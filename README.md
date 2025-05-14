# NewsNow - Responsive News Website

A simple, responsive news website built with Next.js and Tailwind CSS. This project demonstrates a modern web development approach with server-side rendering and responsive design.

## Features

- Responsive design that works on both desktop and mobile devices
- News articles organized by categories
- Featured news section
- Individual article pages
- Category pages with filtered articles
- Mock data for demonstration purposes

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## Project Structure

- `src/app` - Next.js app directory with page components
- `src/components` - Reusable React components
- `src/data` - Mock data for the news articles
- `public` - Static assets like images

## Customization

### Adding More Articles

To add more articles, edit the `src/data/mockData.ts` file and add new entries to the `newsArticles` array.

### Adding Images

Replace the placeholder images in the `public/images` directory with your own images. Make sure to update the image paths in the `mockData.ts` file to match your image filenames.

### Styling

This project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the components directly with Tailwind classes
2. Editing the Tailwind configuration in `tailwind.config.js`
3. Adding custom CSS in `src/app/globals.css`

## License

This project is available as open source under the terms of the MIT License.

## Acknowledgements

- This is a demo project created for educational purposes
- All news articles are fictional and generated for demonstration purposes only
