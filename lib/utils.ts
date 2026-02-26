import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Parses a human-readable event date string like "March 8-14, 2026" into display components. */
export function parseEventDate(dateString: string): { day: string; month: string; year: string } {
  const parts = dateString.split(' ');
  const month = parts[0] ?? '';
  const dayPart = (parts[1] ?? '').replace(',', '').split('-')[0];
  const year = parts[parts.length - 1] ?? '';
  return { day: dayPart, month, year };
}
