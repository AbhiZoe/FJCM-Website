export interface Sermon {
  _id: string;
  title: string;
  description: string;
  youtubeLink: string;
  date: string;
  thumbnail?: string;
  speaker: string;
  slug: string;
}

export interface ChurchEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  bannerImage?: string;
  category: string;
  slug: string;
}

export interface Ministry {
  _id: string;
  name: string;
  description: string;
  image?: string;
  contactPerson: string;
}

export interface GalleryItem {
  _id: string;
  image: string;
  caption: string;
  category: string;
  displayOrder: number;
}

export interface PastorMessage {
  _id: string;
  content: string;
  date: string;
  featuredImage?: string;
}
