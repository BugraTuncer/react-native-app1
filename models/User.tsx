export default interface User {
  username: string;
  profile_image: ImageTypes;
  id: string;
  first_name: string;
  last_name: string;
  portfolio_url: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  links: Links;
}

interface ImageTypes {
  large: string;
  medium: string;
  small: string;
}

interface Links {
  likes: string;
}

interface Urls {
  small: string;
}
