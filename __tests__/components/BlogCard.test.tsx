import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlogCard from '@/components/BlogCard/BlogCard';

describe('BlogCard', () => {
  const props = {
    title: 'Test Title',
    author: 'Test Author',
    authorPic: 'https://test.com/test.png',
    coverPhoto: 'https://test.com/test.jpg',
    datePublished: 'Date Test',
    slug: 'test-slug',
    category: 'Test Category',
    excerpt: 'Test Excerpt',
  };

  it('renders the title, author, date, excerpt and Read More link', () => {
    render(<BlogCard {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.author)).toBeInTheDocument();
    expect(screen.getByText(props.datePublished)).toBeInTheDocument();
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(screen.getByText('Read More')).toBeInTheDocument();
  });

  it("renders the author's image", () => {
    render(<BlogCard {...props} />);
    expect(screen.getByAltText(props.author)).toBeInTheDocument();
    expect(screen.getByAltText(props.author)).toHaveAttribute(
      'src',
      props.authorPic
    );
  });

  it('renders the cover photo', () => {
    render(<BlogCard {...props} />);
    expect(screen.getByAltText(props.slug)).toBeInTheDocument();
    expect(screen.getByAltText(props.slug)).toHaveAttribute(
      'src',
      props.coverPhoto
    );
  });
});
