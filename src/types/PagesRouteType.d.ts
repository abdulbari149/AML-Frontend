type dropDown = {
  title: string;
  href: string;
};
interface PagesRouteType {
  id: number;
  title?: string;
  icon?: any;
  path: string;
  type: string;
  dropDown?: dropDown[];
}
