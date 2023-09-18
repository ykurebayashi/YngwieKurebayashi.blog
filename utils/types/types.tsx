export type Author = {
  name: string;
  avatar: {
    id: string;
    url: string;
  };
};

export type CoverPhoto = {
  url: string;
};

export type Content = {
  html: string;
};

export type Post = {
  author: Author;
  category: string;
  content: Content;
  coverPhoto: CoverPhoto;
  datePublished: string;
  excerpt: string;
  id: string;
  slug: string;
  title: string;
};

export type AllPosts = {
  posts: Post[];
};

export type SinglePost = {
  title: string;
  slug: string;
  coverPhoto: {
    url: string;
  };
  content: {
    html: string;
  };
  datePublished: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: {
      id: string;
      url: string;
    };
  };
  id: string;
};

export type GetStaticPropsArgs = {
  params: {
    slug: string;
  };
};

export type GraphCMSResponse = {
  post: Post;
};

export type SlugListResponse = {
  posts: {
    slug: string;
  }[];
};
