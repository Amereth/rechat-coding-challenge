import { forwardRef, SVGAttributes } from 'react'

export const DeleteIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGSVGElement>
>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      d="M5.99999 2V2.66667H2.66666V4H3.33332V12.6667C3.33332 13.0203 3.4738 13.3594 3.72385 13.6095C3.9739 13.8595 4.31303 14 4.66666 14H11.3333C11.6869 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V4H13.3333V2.66667H9.99999V2H5.99999ZM4.66666 4H11.3333V12.6667H4.66666V4ZM5.99999 5.33333V11.3333H7.33332V5.33333H5.99999ZM8.66666 5.33333V11.3333H9.99999V5.33333H8.66666Z"
      fill="#B4B5B8"
    />
  </svg>
))

DeleteIcon.displayName = 'DeleteIcon'
