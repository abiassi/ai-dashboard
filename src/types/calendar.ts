export type PostStatus = 'approved' | 'pending' | 'needs_changes';
export type SocialPlatform = 'Twitter' | 'Instagram' | 'LinkedIn' | 'Facebook';

export interface Post {
  id: string;
  content: string;
  scheduledDate: Date;
  image?: string;
  platforms?: SocialPlatform[];
  status?: PostStatus;
  generatedBy?: string;
}