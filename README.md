# Bharat Foundation - New Design

A modern, fully-featured Next.js web application for the Bharat Foundation, including donation management, job applications, blog sections, and payment processing integration.

## Project Overview

This is a [Next.js](https://nextjs.org) 15.1.7 application built with TypeScript and Tailwind CSS. It features:

- **Donation System**: One-time and monthly donation options with Google Pay and PhonePe payment integration
- **Job Portal**: Careers page with application submissions
- **Contact Management**: Contact forms with email notifications
- **Blog & Resources**: Content management sections
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS and Radix UI components
- **Payment Processing**: Secure payment gateway integrations

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 16.x or higher (recommended: 18.x or 20.x)
- **npm**: Version 7.x or higher (comes with Node.js)

You can verify your installations by running:

```bash
node --version
npm --version
```

## Installation

1. **Clone the repository**:

```bash
git clone <repository-url>
cd Bharatfoundation-newdesign-main
```

2. **Install dependencies**:

```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, and other dependencies.

## Running the Project

### Development Server

Start the development server with hot-reload enabled:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

The development server uses **Turbopack** for fast compilation and auto-updates when you modify files.

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Start Production Server

Run the application in production mode (requires building first):

```bash
npm start
```

### Linting

Check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
├── app/                          # Next.js App Router directory
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── api/                     # API routes
│   │   ├── status.js            # Status check endpoint
│   │   ├── apply/               # Job application endpoint
│   │   ├── contact/             # Contact form endpoint
│   │   └── phonepe-payment/     # PhonePe payment processing
│   ├── about/                   # About page
│   ├── blog/                    # Blog listing page
│   ├── careers/                 # Careers/Jobs page
│   ├── contact/                 # Contact page
│   ├── donate/                  # Donation overview
│   ├── one-time-donation/       # One-time donation page
│   ├── monthly-donation/        # Monthly subscription donation
│   ├── our-work/                # Organization activities
│   ├── what-we-do/              # Mission/Vision page
│   ├── resources/               # Resources/Downloads
│   ├── get-involved/            # Volunteer/Involvement page
│   ├── success/                 # Payment success page
│   └── cancel/                  # Payment cancellation page
│
├── components/                  # Reusable React components
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer component
│   ├── contact-form1.tsx       # Contact form component
│   ├── banner.tsx              # Banner sections
│   ├── actionCards.tsx         # Card components
│   ├── volunteer-stats.tsx     # Statistics display
│   ├── googlepay.tsx           # Google Pay integration
│   ├── theme-provider.tsx      # Theme configuration
│   ├── ui/                     # UI component library
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   └── input.tsx
│   └── ...
│
├── lib/                         # Utility functions and helpers
│   ├── utils.ts                # General utilities
│   └── validation.ts           # Form validation logic
│
├── public/                      # Static assets
│   └── images/                 # Image files
│
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── Dockerfile                  # Docker containerization
├── cloudbuild.yaml             # Google Cloud Build configuration
└── README.md                   # This file
```

## Key Pages

- **Home** (`/`): Landing page with organization overview
- **About** (`/about`): Organization information
- **What We Do** (`/what-we-do`): Mission and programs
- **Our Work** (`/our-work`): Project showcases
- **Donate** (`/donate`, `/one-time-donation`, `/monthly-donation`): Donation pages with payment integration
- **Careers** (`/careers`): Job listings and applications
- **Blog** (`/blog`): Articles and news
- **Contact** (`/contact`): Contact form
- **Resources** (`/resources`): Downloads and materials
- **Get Involved** (`/get-involved`): Volunteer opportunities

## Technologies Used

- **Frontend Framework**: Next.js 15.1.7
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **UI Components**: Radix UI, Lucide React icons
- **Forms**: React form handling with validation
- **Payment Integration**: Google Pay, PhonePe
- **HTTP Client**: Axios
- **Email**: Nodemailer
- **PDF Generation**: jsPDF
- **State Management**: React hooks
- **Testing**: Playwright
- **Deployment**: Docker, Google Cloud Build

## Environment Variables

Create a `.env.local` file in the project root for environment-specific configurations. Common variables may include:

```env
# API Endpoints
NEXT_PUBLIC_API_URL=http://localhost:3000

# Payment Gateway Keys
NEXT_PUBLIC_GOOGLE_PAY_CLIENT_ID=your_google_pay_client_id
PHONEPE_API_KEY=your_phonepe_api_key

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

## API Routes

The project includes several API endpoints:

- `GET /api/status` - Health check endpoint
- `POST /api/apply` - Job application submission
- `POST /api/contact` - Contact form submission
- `POST /api/phonepe-payment` - PhonePe payment processing

## Features

### Donation System
- One-time donations with Google Pay
- Monthly subscription donations
- Payment success/cancellation handling
- Email confirmation

### Job Portal
- Apply for positions
- Application form validation
- Email notifications to applicants

### Contact Management
- Contact form with validation
- Email routing to organization

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Optimized for all screen sizes
- Smooth animations and transitions

## Browser Support

This application works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Deployment

### Docker Deployment

A `Dockerfile` is included for containerized deployment:

```bash
docker build -t bharat-foundation .
docker run -p 3000:3000 bharat-foundation
```

### Google Cloud Deployment

The `cloudbuild.yaml` file is configured for automated deployment to Google Cloud. Push to your repository to trigger builds.

### Vercel Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect Next.js and deploy automatically

For detailed deployment documentation, see [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)

## Development Tips

- **Hot Reload**: Changes to files automatically refresh in the browser during development
- **File Organization**: Keep components in `components/` and utilities in `lib/`
- **Styling**: Use Tailwind CSS classes for styling consistency
- **TypeScript**: Leverage TypeScript for type safety across the application
- **API Routes**: Add new endpoints in `app/api/` directory

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill the process using port 3000 (macOS/Linux)
lsof -i :3000
kill -9 <PID>

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Installation Issues
```bash
# Clear npm cache and reinstall
rm -rf node_modules
npm cache clean --force
npm install
```

### Build Errors
```bash
# Clean build cache
rm -rf .next
npm run build
```

## Learn More

For more information about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

## Support

For issues, questions, or contributions, please contact the development team or create an issue in the repository.

## License

This project is part of the Bharat Foundation. Please review the organization's guidelines for usage and distribution.
