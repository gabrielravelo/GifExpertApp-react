import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {

  test('Debe de regresar el estado inicial', () => { 
    
    const { result } = renderHook( () => useFetchGifs('One Piece') );
    const { images, isLoading } = result.current;
    

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  })

  test('Debe de retornar un array de imagenes y isLoading en false', async() => { 
    
    const { result } = renderHook( () => useFetchGifs('Dragon Ball'));

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0),
      { timeout: 5000 }
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  })
})