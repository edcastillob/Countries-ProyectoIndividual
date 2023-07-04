import React from 'react';
import { render, screen } from '@testing-library/react';
import Order from './Order';
test('renders Order component with options', () => {
    render(<Order />);
    
    // Verifica que el componente se haya renderizado correctamente
    const orderSelect = screen.getByRole('combobox', { name: /order/i });
    expect(orderSelect).toBeInTheDocument();
    
    // Verifica que las opciones en el select sean las correctas
    const options = orderSelect.querySelectorAll('option');
    expect(options).toHaveLength(3);
    expect(options[0].textContent).toBe('Ordenar');
    expect(options[1].textContent).toBe('Ascendente');
    expect(options[2].textContent).toBe('Descendente');
  });
  