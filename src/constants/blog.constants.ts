import { FacebookIcon, LinkedInIcon, TelegramIcon, TwitterIcon } from '@/components/icons';

export const ARTICLES_LIMIT = 6;

export const SHARE_ICONS = [
  {
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/sharing/share-offsite/?url=',
    title: 'LinkedIn',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/intent/tweet?text=',
    title: 'Twitter',
  },
  {
    icon: TelegramIcon,
    link: 'https://t.me/share/url?url=',
    title: 'Telegram',
  },
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/sharer/sharer.php?u=',
    title: 'Facebook',
  },
];
