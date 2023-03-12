import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../../pages/about';
import Navbar from '@/components/Navbar/Navbar';

describe('About Page', () => {
  it('Should render navbar', () => {
    render(<Navbar />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const projectsLink = screen.getByRole('link', { name: 'Projects' });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
  });

  it('Should render this is about page', () => {
    render(<About />);
    const mainTest = screen.getByText('this is about page');
    expect(mainTest).toBeInTheDocument();
  });
});
