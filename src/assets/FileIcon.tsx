import { forwardRef, SVGAttributes } from 'react'

export const FileIcon = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
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
        d="M9.33329 1.33334H3.99996C3.64634 1.33334 3.3072 1.47382 3.05715 1.72387C2.8071 1.97392 2.66663 2.31305 2.66663 2.66668V13.3333C2.66663 13.687 2.8071 14.0261 3.05715 14.2762C3.3072 14.5262 3.64634 14.6667 3.99996 14.6667H12C12.3536 14.6667 12.6927 14.5262 12.9428 14.2762C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V5.33334L9.33329 1.33334ZM12 13.3333H3.99996V2.66668H8.66663V6.00001H12V13.3333Z"
        fill="#B4B5B8"
      />
    </svg>
  ),
)

FileIcon.displayName = 'FileIcon'
