import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Piece' ]);
    
    const onAddCategory = ( newCategory ) => {
        if( categories.find( category => category.toLowerCase() == newCategory.toLowerCase() ) ) return;
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    const resetButton = () => {
        setCategories([]);
    }
    

    return (
        <>

            <h1>GifExpertApp</h1>

            <button onClick={resetButton}>Reset</button>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }

            <p className='credits'>Made by <a href="https://github.com/gabrielravelo" target="_blank">Gabriel Ravelo</a></p>
        </>
    )
}
