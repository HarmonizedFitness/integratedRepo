# Harmonized Fitness - Integrated Repository Setup Guide

This guide will help you set up the integrated repository for your Lovable.dev project. The repository includes all the necessary components for the 14-day "Master the Little Things" Prelude program with the updated color scheme (charcoal background, burnt orange and white text) and chakra colors for the B.R.E.A.T.H.E. code.

## Repository Structure

The repository follows a standard Next.js project structure:

```
integrated_repo/
├── src/
│   ├── components/
│   │   ├── challenge/
│   │   │   ├── BreatheDisplay.tsx
│   │   │   ├── BreatheFramework.tsx
│   │   │   ├── ChallengeContent.tsx
│   │   │   ├── DayNavigation.tsx
│   │   │   └── day-content/
│   │   │       ├── Day1Content.tsx
│   │   │       ├── Day2Content.tsx
│   │   │       └── Day3Content.tsx
│   │   └── ui/
│   │       └── ChakraLetter.tsx
│   ├── pages/
│   │   ├── challenge.tsx
│   │   └── index.tsx
│   └── index.css
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Integration with Lovable.dev

### Option 1: Create a New Lovable.dev Project

1. Go to [Lovable.dev](https://lovable.dev)
2. Click "Create New Project"
3. Select "Import from GitHub"
4. Connect your GitHub account if not already connected
5. Create a new repository on GitHub and upload the files from this integrated repository
6. Select the repository in Lovable.dev
7. Follow the prompts to complete the setup

### Option 2: Update Your Existing Lovable.dev Project

1. Back up your existing project by downloading it or creating a branch in your GitHub repository
2. Replace the files in your existing repository with the files from this integrated repository
3. Commit and push the changes to your GitHub repository
4. Your Lovable.dev project will automatically update with the new changes

## Key Features

### Updated Color Scheme
- Charcoal background (`#1A1A1A`)
- Burnt orange accents (`#D35400`)
- White text (`#FFFFFF`)

### B.R.E.A.T.H.E. Code with Chakra Colors
Each letter of the B.R.E.A.T.H.E. code is colored according to the corresponding chakra:
- B (Red - Root Chakra)
- R (Orange - Sacral Chakra)
- E (Yellow - Solar Plexus Chakra)
- A (Green - Heart Chakra)
- T (Blue - Throat Chakra)
- H (Indigo - Third Eye Chakra)
- E (Violet - Crown Chakra)

### 14-Day Prelude Program
- Comprehensive landing page with all program details
- Interactive day navigation
- Detailed content for Days 1-3 (remaining days can be added following the same pattern)
- Two versions of the B.R.E.A.T.H.E. code (Holistic Alignment and Emotional Regulation)

## Customization

### Adding More Days
To add content for Days 4-14, create new files in the `src/components/challenge/day-content/` directory following the pattern of the existing day content files, then update the `renderDayContent` function in `ChallengeContent.tsx`.

### Modifying the Color Scheme
The color scheme is defined in `tailwind.config.ts` and `src/index.css`. You can modify these files to adjust the colors as needed.

### Adding PDF Downloads
The PDF files created can be added to the `public` directory and linked from the day content components.

## Need Help?

If you need any assistance with setting up or customizing this repository, please don't hesitate to reach out. I'm here to help you make the most of your Harmonized Fitness platform.
