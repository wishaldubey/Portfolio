import { HTMLAttributes, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  'rounded-lg shadow-md overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        neobrutalism: 'bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

export { Card, cardVariants }

