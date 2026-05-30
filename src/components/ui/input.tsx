import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground placeholder:italic selection:bg-primary selection:text-primary-foreground bg-transparent px-3 py-3 text-base transition-none outline-none border-b-2 border-foreground w-full font-[family-name:var(--font-source-serif)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus:border-b-4 focus:outline-none focus-visible:border-b-4 focus-visible:outline-none",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
