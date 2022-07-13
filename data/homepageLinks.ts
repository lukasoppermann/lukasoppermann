import { HomepageLink } from '@components/Home/HomepageLink';

export const homepageLinks: HomepageLink[] = [
  {
    url: 'https://dribbble.com/lukasoppermann',
    target: '_blank',
    rel: 'noopener noreferrer nofollow',
    title: 'Find more work on dribbble',
    subtitle: 'dribbble',
    picture: {
      url: '/assets/lukasoppermann-dribbble_2x.jpg',
      alt: 'Example dribbble shot: plant app',
      width: 1600,
      height: 1200
    }
  },
  {
    url: 'https://www.behance.net/lukasoppermann',
    target: '_blank',
    rel: 'noopener noreferrer nofollow',
    title: 'After hours & side projects',
    subtitle: 'Behance',
    picture: {
      url: '/assets/lukasoppermann-behance_2x.jpg',
      alt: 'Poster side project: run your day',
      width: 1600,
      height: 1000
    }
  },
  {
    url: 'mailto:mail@lukasoppermann.com?subject=What%20job%20or%20project%20is%20this%20about?&body=Hello 👋,%20please%20give%20me%20some%20details%20concerning%20the%20job/project%20so%20that%20I%20can%20send%20you%20the%20right%20portfolio.',
    target: '_blank',
    rel: 'noopener noreferrer nofollow',
    title: 'Request a CV & portfolio',
    subtitle: 'Portfolio pdf',
    picture: {
      url: '/assets/lukasoppermann-request-cover_2x.jpg',
      alt: 'Reach out to get a CV & portfolio',
      width: 1600,
      height: 900
    }
  }
]