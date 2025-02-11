import { forwardRef, SVGAttributes } from 'react'

export const EditIcon = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  (props, ref) => (
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
        d="M9.37333 6L10 6.62667L3.94667 12.6667H3.33333V12.0533L9.37333 6ZM11.7733 2C11.6067 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333C14.0667 4.43333 14.0667 4 13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2ZM9.37333 4.12667L2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667Z"
        fill="#B4B5B8"
      />
    </svg>
  ),
)

EditIcon.displayName = 'EditIcon'
