import { UserDto } from ".";

export default interface PhotoDto {
  user: UserDto;
  id: string;
  urls: Urls;
  likes: number;
  alt_description: string;
}

interface Urls {
  small: string;
}
