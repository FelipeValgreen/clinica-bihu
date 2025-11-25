// Colores de la marca Clínica Bihu basados en el logo
export const bihuColors = {
  // Colores principales del logo
  magenta: '#e91e63',
  purple: '#9c27b0', 
  blue: '#2196f3',
  green: '#4caf50',
  
  // Colores existentes
  blueDark: '#023b6a',
  blueLight: '#0a83fd',
  greenOriginal: '#95c122',
  pinkOriginal: '#de027b',
  purpleOriginal: '#8e06df',
  
  // Gradientes del logo
  gradient: {
    magenta: 'from-pink-500 to-purple-600',
    purple: 'from-purple-500 to-blue-600',
    blue: 'from-blue-500 to-cyan-600',
    green: 'from-green-400 to-emerald-600',
  }
} as const

// Clases de utilidad para los colores de Bihu
export const bihuColorClasses = {
  bg: {
    magenta: 'bg-[#e91e63]',
    purple: 'bg-[#9c27b0]',
    blue: 'bg-[#2196f3]',
    green: 'bg-[#4caf50]',
  },
  text: {
    magenta: 'text-[#e91e63]',
    purple: 'text-[#9c27b0]',
    blue: 'text-[#2196f3]',
    green: 'text-[#4caf50]',
  },
  border: {
    magenta: 'border-[#e91e63]',
    purple: 'border-[#9c27b0]',
    blue: 'border-[#2196f3]',
    green: 'border-[#4caf50]',
  }
} as const
