import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

export async function getSermons() {
  // Return static fallback data when Sanity is not configured
  return [];
}

export async function getEvents() {
  return [];
}

export async function getMinistries() {
  return [];
}

export async function getGalleryItems() {
  return [];
}
