/* eslint-disable */
"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leadingText?: string;
  trailingText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  isPassword?: boolean;
  isFetchingData?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leadingText, trailingText, leadingIcon, trailingIcon, isPassword, isFetchingData, ...props }, forwardedRef) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    const getInputType = () => {
      if (isPassword) {
        return passwordVisible ? 'text' : 'password';
      }
      return type;
    };

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      const input = inputRef.current;
      if (input && type === 'number') {
        const preventWheel = (e: WheelEvent) => {
          e.preventDefault();
          input.blur();
        };
        input.addEventListener('wheel', preventWheel, { passive: false });
        return () => {
          input.removeEventListener('wheel', preventWheel);
        };
      }
    }, [type]);

    return (
      <div className="relative flex items-center">
        {(leadingText || leadingIcon) && (
          <div className="absolute left-0 pl-3 flex items-center pointer-events-none z-10">
            {leadingIcon && <span className="mr-2">{leadingIcon}</span>}
            {leadingText && <span className="text-[14px] font-semibold text-customGray opacity-50">{leadingText}</span>}
          </div>
        )}
        <input
          type={getInputType()}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            (leadingText || leadingIcon) && "pl-10",
            (trailingText || trailingIcon || isPassword) && "pr-10",
            type === 'number' && "scroll-prevent",
            isFetchingData && "opacity-50",
            className
          )}
          ref={(node) => {
            // @ts-ignore
            inputRef.current = node;
            if (typeof forwardedRef === 'function') {
              forwardedRef(node);
            } else if (forwardedRef) {
              forwardedRef.current = node;
            }
          }}
          disabled={isFetchingData}
          {...props}
        />
        {(trailingText || trailingIcon || isPassword) && (
          <div className="absolute right-0 pr-3 flex items-center z-10">
            {trailingIcon && <span className="ml-2">{trailingIcon}</span>}
            {trailingText && <span className="text-[14px] font-semibold text-customGray opacity-40">{trailingText}</span>}
            {isPassword && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="ml-2 focus:outline-none"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
                disabled={isFetchingData}
              >
                {passwordVisible ? (
                  <EyeOff className="h-4 w-4 text-customGray" />
                ) : (
                  <Eye className="h-4 w-4 text-customGray" />
                )}
              </button>
            )}
          </div>
        )}
  
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }