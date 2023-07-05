import React from 'react';
import { render } from '@testing-library/react';
import { Activity } from './Activity';

describe('Activity component', () => {
  test('renders activity details correctly', () => {
    const activity = {
      id: 1,
      name: 'Hiking',
      countryID: 'USA',
      difficulty: 'Intermediate',
      duration: 2,
      season: 'Summer'
    };

    render(<Activity {...activity} />);

    expect(screen.getByText(/Actividad/i)).toBeInTheDocument();
    expect(screen.getByText(/Hiking/i)).toBeInTheDocument();

    expect(screen.getByText(/Pais/i)).toBeInTheDocument();
    expect(screen.getByText(/USA/i)).toBeInTheDocument();

    expect(screen.getByText(/Dificultad/i)).toBeInTheDocument();
    expect(screen.getByText(/Intermediate/i)).toBeInTheDocument();

    expect(screen.getByText(/Duración/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Horas/i)).toBeInTheDocument();

    expect(screen.getByText(/Temporada/i)).toBeInTheDocument();
    expect(screen.getByText(/Summer/i)).toBeInTheDocument();
  });
});
