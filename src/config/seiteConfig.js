// Site Configuration File
// Store all important site information here for easy access and maintenance

export const siteConfig = {
  // Company Information
  company: {
    name: "Voxalis",
    tagline: "Your Professional Tagline Here",
    description: "A brief description of your company and what you do",
    founded: "2020",
    location: "Berlin, Germany"
  },

  // Contact Information
  contact: {
    email: {
      primary: "contact@yourcompany.com",
      support: "support@yourcompany.com",
      sales: "sales@yourcompany.com",
      info: "info@yourcompany.com"
    },
    phone: {
      primary: "+49 30 12345678",
      mobile: "+49 175 1234567",
      international: "+49 30 12345678"
    }
   
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    youtube: "https://youtube.com/@yourcompany",
    github: "https://github.com/yourcompany",
    behance: "https://behance.net/yourcompany",
    dribbble: "https://dribbble.com/yourcompany"
  },

  // Website Information
  website: {
    url: "https://www.yourcompany.com",
    domain: "yourcompany.com",
    title: "Your Company - Professional Services",
    description: "We provide professional web development, design, and digital marketing services",
    keywords: ["web development", "design", "digital marketing", "consulting"],
    author: "Your Company Team"
  },

  // Business Details
  business: {
    registrationNumber: "HRB 12345 B",
    vatNumber: "DE123456789",
    taxId: "12/345/67890",
    bankDetails: {
      bankName: "Deutsche Bank",
      iban: "DE12 3456 7890 1234 5678 90",
      bic: "DEUTDEFF"
    }
  },

  // Services Information
  

  // API & External Services
  external: {
    googleAnalytics: "GA-XXXXXXXXX",
    googleMaps: "YOUR_GOOGLE_MAPS_API_KEY",
    newsletter: {
      provider: "mailchimp", // or "sendinblue", "convertkit", etc.
      listId: "your-list-id"
    },
    payment: {
      stripe: {
        publishableKey: "pk_test_...",
        currency: "eur"
      }
    }
  },



  // SEO Configuration
  seo: {
    defaultTitle: "Your Company - Professional Services",
    titleTemplate: "%s | Your Company",
    defaultDescription: "Professional web development, design, and digital marketing services in Berlin",
    defaultImage: "/images/og-image.jpg",
    twitterHandle: "@yourcompany"
  }
}

// Helper functions to access config data
export const getContactEmail = (type = 'primary') => {
  return siteConfig.contact.email[type] || siteConfig.contact.email.primary
}

export const getContactPhone = (type = 'primary') => {
  return siteConfig.contact.phone[type] || siteConfig.contact.phone.primary  
}

export const getFullAddress = () => {
  return siteConfig.contact.address.full
}

export const getSocialLink = (platform) => {
  return siteConfig.social[platform] || null
}

export const getThemeColor = (colorName) => {
  return siteConfig.theme.colors[colorName] || null
}

export const isFeatureEnabled = (feature) => {
  return siteConfig.features[feature] || false
}

// Export individual sections for easier imports
export const { 
  company, 
  contact, 
  social, 
  website, 
  
} = siteConfig

// Default export
export default siteConfig