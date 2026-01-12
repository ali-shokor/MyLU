/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '500px', //480
      md: '768px',
      lg: '1000px', //1220
      xl: '1440px',
      xxl: '1920px',
    },
    extend: {
      colors: {
        lightBackground: '#F5F7FA',    // Light gray background for a clean, modern look
        primaryText: '#333333',        // Dark gray for main text, easy to read
        secondaryText: '#6B7280',      // Muted gray for secondary text (like subheadings)
        lightText: '#FFFFFF',          // White for highlighting text, especially for buttons or callouts

        // Accent Colors (used for buttons, highlights, etc.)
        softBlue: '#A5C8FF',           // Soft blue for buttons, links, and hover effects
        calmYellow: '#FBBF24',         // A calm yellow for emphasis, active elements
        vibrantGreen: '#34D399',       // Fresh green to represent growth and success

        // Shadows and Borders
        lightShadow: 'rgba(0, 0, 0, 0.1)', // Light shadow for depth without heavy contrast
        borderGray: '#D1D5DB', 

        darkBackground: '#121212',     // Deep dark background, perfect for low-light environments
        primaryTextDark: '#E5E7EB',    // Soft white for main text, ensures readability in dark mode
        secondaryTextDark: '#9CA3AF',  // Muted gray for secondary text (like subheadings)
        lightTextDark: '#F3F4F6',      // Lighter white for emphasized text (important or active items)

        // Accent Colors (used for buttons, highlights, etc.)
        electricBlue: '#3B82F6',       // Bright blue for interactive elements (buttons, links)
        coralRed: '#F87171',           // Soft red for errors or alerts, adding a sense of urgency
        mintGreen: '#34D399',          // Light green to indicate success or active states

        // Shadows and Borders
        darkShadow: 'rgba(0, 0, 0, 0.5)', // Deeper shadows for added contrast and depth in dark mode
        borderDark: '#4B5563', 

        softGradient: 'linear-gradient(135deg, #6EE7B7, #3B82F6)', // Calm gradient from mint green to electric blue
        motivationalGradient: 'linear-gradient(135deg, #FF6F61, #FBBF24)', // Gradients of soft red and yellow for a motivating vibe
        productivityGradient: 'linear-gradient(135deg, #9C94E1, #A5B4FC)', // Cool gradient from light purple to blue for calm productivity
    
        successGreen: '#10B981',      // Bright green to symbolize growth and achievement
        alertYellow: '#F59E0B',        // Bright yellow for warnings or highlighting key elements
        calmBlue: '#60A5FA',

        buttonPrimary: '#3B82F6',      // Bright blue for the primary call-to-action buttons
        buttonSecondary: '#FBBF24',    // Yellow for secondary actions (subtle emphasis)
        linkHover: '#2563EB', 

        backgroundGradient1: 'linear-gradient(180deg, #ffffff, #e0e7ff)',   // Light gradient, calm and subtle
        backgroundGradient2: 'linear-gradient(180deg, #1f2937, #111827)',   // Dark gradient for dark mode, deep and sleek

        bluePurpleGradient: 'linear-gradient(135deg, #5B9FED, #A05BEF)',          // hsl(231, 69%, 60%)
        softRed: '#F55858',           // hsl(0, 94%, 66%)
        grayishBlue: '#A5A9B3',       // hsl(229, 8%, 60%)
        veryDarkBlue: '#1E293B',      // hsl(229, 31%, 21%)
        darkBlue: '#1B1F2F',          // hsl(217, 28%, 15%)
        darkBlue1: '#171924',         // hsl(218, 28%, 13%)
        darkBlue2: '#101319',         // hsl(215, 67.10%, 15.50%)
        darkBlue3: '#2B3747',         // hsl(219, 30%, 18%)
        accentCyan: '#2DD3DA',        // hsl(176, 68%, 64%)
        accentBlue: '#3399FF',        // hsl(198, 60%, 50%)
        lightRed: '#FF3F3F',
      },
      boxShadow: {
        softBlue: '0 4px 10px rgba(39, 123, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        custon: ['Inter', 'sans-serif'], // Fixed typo 'custon' -> 'custom'
      },
      backgroundImage: {
        dots: "url('../images/bg-dots.svg')", // Corrected placement inside `extend`
      },
      keyframes: {
        slideInUp: {
          '0%': { transform: 'translateY(50px)' }, // Start lower
          '100%': { transform: 'translateY(0)' }, // End at original position
        },
        scaleSlideInUp: {
          '0%': { transform: 'translateY(50px) scale(0.9)' }, // Add slight scale
          '50%': { transform: 'translateY(25px) scale(1.02)' }, // Midpoint bounce effect
          '100%': { transform: 'translateY(0) scale(1)' }, // Settle at final position
        },
      },
      animation: {
        slideInUp: 'slideInUp 0.6s ease-out', // Slightly slower and smoother
        scaleSlideInUp: 'scaleSlideInUp 0.7s ease-in-out', // Enhanced version
      },
    },
  },
  plugins: [],
};
