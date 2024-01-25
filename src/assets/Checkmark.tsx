import { forwardRef, SVGAttributes } from 'react'

export const Checkmark = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGSVGElement>
>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      d="M18 5.83333L7.99996 15.8333L3.41663 11.25L4.59163 10.075L7.99996 13.475L16.825 4.65833L18 5.83333Z"
      fill="white"
    />
  </svg>
))

Checkmark.displayName = 'Checkmark'
