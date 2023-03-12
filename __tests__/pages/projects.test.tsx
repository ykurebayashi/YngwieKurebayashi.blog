import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../../pages/projects';
import Navbar from '@/components/Navbar/Navbar';

describe('Projects Page', () => {
  it('Should render navbar', () => {
    render(<Navbar />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const projectsLink = screen.getByRole('link', { name: 'Projects' });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
  });

  it('Should render this is Projects page', () => {
    render(<Projects />);
    const mainTest = screen.getByText('this is projects page');
    expect(mainTest).toBeInTheDocument();
  });
});
