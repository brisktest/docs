import Image from 'next/image'

export function Logomark(props) {
  return (
      <Image  height="1" width="135" className="h-9 w-auto" src="/images/icon-standard-color-rgb.svg" alt="Brisk Icon" />
  )
}

export function Logo(props) {

      return ( <span> <span className="display:inline dark:hidden"><Image  height="1" width="135" src="/images/logo-standard-color-rgb.svg" alt="Brisk Logo" /> </span>
      <span className="hidden dark:inline"> <Image  height="1" width="135" src="/images/logo-reversed-color-rgb.svg" alt="Brisk Logo" /> </span></span> )
    }

