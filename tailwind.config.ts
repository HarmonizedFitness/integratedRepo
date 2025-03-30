import type { Config } from "tailwindcss";

export default {
        darkMode: ["class"],
        content: [
                "./pages/**/*.{ts,tsx}",
                "./components/**/*.{ts,tsx}",
                "./app/**/*.{ts,tsx}",
                "./src/**/*.{ts,tsx}",
        ],
        prefix: "",
        theme: {
                container: {
                        center: true,
                        padding: '2rem',
                        screens: {
                                '2xl': '1400px'
                        }
                },
                extend: {
                        colors: {
                                border: 'hsl(var(--border))',
                                input: 'hsl(var(--input))',
                                ring: 'hsl(var(--ring))',
                                background: 'hsl(var(--background))',
                                foreground: 'hsl(var(--foreground))',
                                primary: {
                                        DEFAULT: 'hsl(var(--primary))',
                                        foreground: 'hsl(var(--primary-foreground))'
                                },
                                secondary: {
                                        DEFAULT: 'hsl(var(--secondary))',
                                        foreground: 'hsl(var(--secondary-foreground))'
                                },
                                destructive: {
                                        DEFAULT: 'hsl(var(--destructive))',
                                        foreground: 'hsl(var(--destructive-foreground))'
                                },
                                muted: {
                                        DEFAULT: 'hsl(var(--muted))',
                                        foreground: 'hsl(var(--muted-foreground))'
                                },
                                accent: {
                                        DEFAULT: 'hsl(var(--accent))',
                                        foreground: 'hsl(var(--accent-foreground))'
                                },
                                popover: {
                                        DEFAULT: 'hsl(var(--popover))',
                                        foreground: 'hsl(var(--popover-foreground))'
                                },
                                card: {
                                        DEFAULT: 'hsl(var(--card))',
                                        foreground: 'hsl(var(--card-foreground))'
                                },
                                sidebar: {
                                        DEFAULT: 'hsl(var(--sidebar-background))',
                                        foreground: 'hsl(var(--sidebar-foreground))',
                                        primary: 'hsl(var(--sidebar-primary))',
                                        'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                                        accent: 'hsl(var(--sidebar-accent))',
                                        'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                                        border: 'hsl(var(--sidebar-border))',
                                        ring: 'hsl(var(--sidebar-ring))'
                                },
                                // Updated Harmonized Fitness colors with charcoal background
                                'hf-black': '#1A1A1A', // Charcoal background
                                'hf-dark': '#222222', // Slightly lighter charcoal
                                'hf-silver': '#D1D1D1',
                                'hf-copper': '#E25822', // Burnt orange
                                'hf-light-copper': '#FF7F41', // Lighter burnt orange
                                'hf-gray': '#333333',
                                'hf-light-gray': '#444444',
                                
                                // Chakra colors
                                'chakra-root': '#FF0000', // Red - Root Chakra (Muladhara)
                                'chakra-sacral': '#FF7F00', // Orange - Sacral Chakra (Svadhisthana)
                                'chakra-solar': '#FFFF00', // Yellow - Solar Plexus Chakra (Manipura)
                                'chakra-heart': '#00FF00', // Green - Heart Chakra (Anahata)
                                'chakra-throat': '#0000FF', // Blue - Throat Chakra (Vishuddha)
                                'chakra-third-eye': '#4B0082', // Indigo - Third Eye Chakra (Ajna)
                                'chakra-crown': '#9400D3', // Violet - Crown Chakra (Sahasrara)
                        },
                        borderRadius: {
                                lg: 'var(--radius)',
                                md: 'calc(var(--radius) - 2px)',
                                sm: 'calc(var(--radius) - 4px)'
                        },
                        keyframes: {
                                'accordion-down': {
                                        from: {
                                                height: '0'
                                        },
                                        to: {
                                                height: 'var(--radix-accordion-content-height)'
                                        }
                                },
                                'accordion-up': {
                                        from: {
                                                height: 'var(--radix-accordion-content-height)'
                                        },
                                        to: {
                                                height: '0'
                                        }
                                },
                                'fade-in': {
                                  '0%': { opacity: '0', transform: 'translateY(10px)' },
                                  '100%': { opacity: '1', transform: 'translateY(0)' }
                                },
                                'pulse-subtle': {
                                  '0%, 100%': { opacity: '1' },
                                  '50%': { opacity: '0.8' }
                                },
                                'slide-up': {
                                  '0%': { transform: 'translateY(20px)', opacity: '0' },
                                  '100%': { transform: 'translateY(0)', opacity: '1' }
                                },
                                'float': {
                                  '0%, 100%': { transform: 'translateY(0)' },
                                  '50%': { transform: 'translateY(-5px)' }
                                }
                        },
                        animation: {
                                'accordion-down': 'accordion-down 0.2s ease-out',
                                'accordion-up': 'accordion-up 0.2s ease-out',
                                'fade-in': 'fade-in 0.5s ease-out forwards',
                                'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
                                'slide-up': 'slide-up 0.7s ease-out forwards',
                                'float': 'float 3s ease-in-out infinite'
                        },
                        fontFamily: {
                                'sans': ['Inter', 'sans-serif'],
                                'display': ['Cormorant Garamond', 'serif'],
                                'body': ['Inter', 'sans-serif'],
                                'title': ['Cormorant Garamond', 'serif'],
                                'quote': ['Cormorant', 'serif'],
                                'button': ['Poppins', 'sans-serif'],
                                'inter': ['Inter', 'sans-serif'],
                                'cormorant': ['Cormorant Garamond', 'serif'],
                                'poppins': ['Poppins', 'sans-serif'],
                        },
                        boxShadow: {
                                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                                'copper': '0 4px 15px rgba(226, 88, 34, 0.15)', // Updated for burnt orange
                                'subtle': '0 4px 25px rgba(0, 0, 0, 0.05)',
                        },
                        backgroundImage: {
                                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                                'hero-pattern': 'linear-gradient(to bottom right, rgba(26, 26, 26, 0.95), rgba(34, 34, 34, 0.98))', // Updated for charcoal
                                'card-gradient': 'linear-gradient(to bottom right, rgba(209, 209, 209, 0.05), rgba(26, 26, 26, 0.05))', // Updated for charcoal
                        }
                }
        },
        plugins: [require("tailwindcss-animate")],
} satisfies Config;
