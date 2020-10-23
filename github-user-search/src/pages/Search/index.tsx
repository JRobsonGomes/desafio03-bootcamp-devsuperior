import Button from 'core/components/Button';
import React from 'react';
import './styles.scss';

const Search = () => (
    <div className="search-container">
        <div className="search-content card-base border-radius-16">
            <h1 className="search-text-title">Encontre um perfil Github</h1>
            <input
                //value={formData.name}
                name="name"
                type="text"
                className="search-input"
                //onChange={handleOnChange}
                placeholder="Usuário Github"
            />
            <Button text="Encontrar"/>
        </div>
    </div>
);

export default Search;