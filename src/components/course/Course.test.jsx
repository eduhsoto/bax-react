import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Course from './Course';

describe('testing component course', () => {
  test('should have text', () => {
    render(<Course title='Administración' />);
    expect(screen.getByText('Administración')).toBeDefined();
  });
});
