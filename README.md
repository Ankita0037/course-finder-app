# Course Finder App

A modern, responsive course discovery platform built with React and Tailwind CSS. This project was created as part of the Marketing Mojito assignment to demonstrate frontend development skills.

![Course Finder Preview](./preview.png)

## 🚀 Live Demo

- **React App**: [Deployed on Vercel/Netlify](#)
- **Webflow Landing**: [View Webflow Project](#)

## ✨ Features

- **Course Search & Filter** - Real-time search functionality with category filtering
- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern UI** - Clean, professional design following the Figma specifications
- **API Integration** - Fetches inspirational quotes from external API
- **Smooth Animations** - CSS transitions and scroll animations for better UX
- **Interactive Components** - Hover effects, loading states, and dynamic content

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Quotable API** - For fetching random inspirational quotes

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Ankita0037/course-finder-app.git

# Navigate to project directory
cd course-finder-react

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
course-finder-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── HeroSection.jsx   # Hero with stats & animations
│   │   ├── SearchBar.jsx     # Search & filter controls
│   │   ├── CourseList.jsx    # Course grid display
│   │   ├── CourseCard.jsx    # Individual course card
│   │   ├── ApiDisplay.jsx    # Quote API integration
│   │   └── StatsSection.jsx  # Statistics display
│   ├── data/
│   │   └── courses.js        # Course data & categories
│   ├── assets/               # Images and icons
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── public/                   # Static assets
└── package.json
```

## 🔌 API Used

**Quotable API** (`https://api.quotable.io/random`)

This free, open-source API provides random inspirational quotes. It's integrated in the `ApiDisplay.jsx` component to show motivational quotes to users, enhancing the learning-focused theme of the course finder.

---

## 📝 Brief Note

### What I Built

I created a Course Finder web application that helps users discover and explore professional courses. The app features a clean, modern UI inspired by the provided Figma design, with a hero section showcasing key statistics, a powerful search and filter system, and a responsive course card grid. The design emphasizes usability with smooth animations, intuitive navigation, and a consistent color scheme using the brand's primary purple color.

### API Integration (React App)

I integrated the **Quotable API** to fetch random inspirational quotes. This adds a dynamic, engaging element to the page - every time a user visits or refreshes, they see a new motivational quote. The API integration includes proper loading states and error handling with fallback content, ensuring a smooth user experience even if the API is temporarily unavailable.

### Webflow Interaction

For the Webflow component, I added hover interactions on cards and buttons - including scale transforms, color transitions, and shadow effects. I also implemented scroll-triggered animations where elements fade in as users scroll down the page, creating a more engaging and professional feel to the landing page.

### Challenges & Future Improvements

The main challenge was ensuring pixel-perfect implementation across different screen sizes while maintaining clean, maintainable code. Responsive typography and spacing required careful attention. With more time, I would add:
- User authentication and saved courses
- More advanced filtering (price range, duration, ratings)
- Dark mode toggle
- Course detail pages with full curriculum
- Integration with a real course database/CMS

---

## 📄 License

This project was created for the Marketing Mojito assignment.

## 👩‍💻 Author

**Ankita** - [GitHub](https://github.com/Ankita0037)
