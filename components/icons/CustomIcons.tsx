"use client"
// Custom themed icons for InOrbyt pitch deck

export function CreatorIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path
        d="M18 44 C18 36 24 32 32 32 C40 32 46 36 46 44"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M26 50 L32 46 L38 50"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
    </svg>
  );
}

export function FanIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 16 L36 28 L48 28 L38 36 L42 48 L32 40 L22 48 L26 36 L16 28 L28 28 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </svg>
  );
}

export function FreelancerIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 24 L32 16 L48 24 L48 40 L32 48 L16 40 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32 16 L32 32 M16 24 L32 32 M48 24 L32 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WalletIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="20" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 28 L52 28" stroke="currentColor" strokeWidth="2.5" />
      <rect x="44" y="34" width="8" height="8" rx="2" fill="currentColor" />
      <path d="M18 16 L46 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function TokenIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <path d="M16 32 L48 32 M32 16 L32 48" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function RewardIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="28" r="12" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M20 28 L20 48 L26 44 L32 48 L38 44 L44 48 L44 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="32" cy="28" r="5" fill="currentColor" />
    </svg>
  );
}

export function SDKIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 26 L30 32 L24 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 38 L44 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function TransactionIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="44" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path d="M28 32 L36 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 28 L36 32 L32 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PartnershipIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 40 L24 32 C24 28 26 26 30 26 L34 26 C38 26 40 28 40 32 L40 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M28 40 L36 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function OrbitLogo({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="30" stroke="#F26B2D" strokeWidth="2.5" fill="none" />
      <circle cx="60" cy="60" r="20" stroke="#F9F5EE" strokeWidth="2" fill="none" />
      <circle cx="60" cy="60" r="10" fill="#F26B2D" />
      <circle cx="90" cy="60" r="5" fill="#F9F5EE" />
      <circle cx="30" cy="60" r="5" fill="#F9F5EE" />
      <circle cx="60" cy="30" r="5" fill="#F9F5EE" />
    </svg>
  );
}
