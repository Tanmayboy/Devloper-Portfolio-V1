# **App Name**: Aetherfolio

## Core Features:

- Home/Hero Section: Display the developer's name, role (Full Stack Developer), and a brief tagline. Include an animated background (3D grid or particles) and a call-to-action button to 'View Projects'.
- About Section: Show a brief bio with a profile picture in a floating card, and a skills grid with icons (React, Node.js, etc.).
- Projects Section: Dynamically list projects from Firestore, with each card displaying a project image, title, tech stack, short description, and 'View Live' and 'GitHub' buttons. Implement a smooth hover scale animation on the cards.
- Contact Section: Include a simple form for users to submit their name, email, and message. On submission, send the data to Firebase Functions. Show a success toast notification upon successful submission.
- Footer: Display social links (GitHub, LinkedIn, X/Twitter, Email)

## Style Guidelines:

- Primary color: Light, slightly desaturated blue (#94A3B4) for a professional and futuristic feel.
- Background color: Dark grey (#1E293B) to ensure the application has a dark mode by default and to make the neon gradients stand out.
- Accent color: Soft purple (#A855F7) to provide soft neon gradients and highlight interactive elements, complementing the primary blue tone.
- Body font: 'Inter', a grotesque-style sans-serif for a modern, objective, and neutral look, ensuring readability and a clean aesthetic.
- Headline font: 'Space Grotesk', a proportional sans-serif, suitable for headlines and short amounts of body text to give a computerized, techy, scientific feel. Use 'Inter' for longer body text.
- Use minimalist icons for skills, project categories, and social media links, maintaining a clean and modern aesthetic.
- Implement a responsive, mobile-first design with clear sections and smooth scrolling to ensure a seamless user experience across all devices.
- Utilize subtle 3D floating effects and scroll-triggered animations using Framer Motion for smooth page transitions and interactive elements.