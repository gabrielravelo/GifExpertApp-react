import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

  test('Debe de hacer match con el snapshot', () => { 
    
    const { container } = render( <GifExpertApp /> );
    
    expect( container ).toMatchSnapshot();
  });

  test('Debe contener un <h1> que contenga GifExpertApp', () => { 
    render( <GifExpertApp /> );

    expect(screen.getByText('GifExpertApp')).toBeTruthy();
  })

  test('Debe contener un button que contenga Reset', () => { 
    render( <GifExpertApp /> );

    expect(screen.getByText('Reset')).toBeTruthy();
  })
})