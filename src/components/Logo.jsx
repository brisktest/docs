import Image from 'next/image'
import { ThemeSelector } from './ThemeSelector'
export function Logomark(props) {
  return (
      <Image height="36" width="36" src="/images/icon-standard-color-rgb.svg" alt="Logo" />
  )
}

export function Logo(props) {

      return ( <span> <span className="display:inline dark:hidden"><Image  height="1" width="135" src="/images/logo-standard-color-rgb.svg" alt="Logo" /> </span>
      <span className="hidden dark:inline"> <Image  height="1" width="135" src="/images/logo-reversed-color-rgb.svg" alt="Logo" /> </span></span> )
    }

