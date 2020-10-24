import React, { useState } from 'react';
import Button from 'core/components/Button';
import axios from 'axios';
import './styles.scss';

const BASE_URL = 'https://api.github.com/users'

type user = {
    avatar_url: string,
    blog: string,
    company: string,
    created_at: string,
    followers: number,
    following: number,
    html_url: string,
    location: string,
    login: string,
    name: string,
    public_repos: number
}

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<user>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.get(`${BASE_URL}/${search}`)
            .then(response => setUserData(response.data));

        console.log(userData);
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <div className="search-content">
                    <h1 className="search-text-title">Encontre um perfil Github</h1>
                    <input
                        value={search}
                        type="text"
                        className="search-input"
                        onChange={handleOnChange}
                        placeholder="Usuário Github"
                    />
                    <Button text="Encontrar" />
                </div>
            </form>
            <div className="result-content">
                <div className="row">
                    <img src={userData?.avatar_url} alt={userData?.name} className="image" />
                    <div>
                        <div className="statistics-container">
                            <p className="statistics" >Repositórios públicos: {userData?.public_repos} </p>
                            <p className="statistics" >Seguidores: {userData?.followers} </p>
                            <p className="statistics" >Seguindo: {userData?.following} </p>
                        </div>
                        <div className="info-container" >
                            <h2>Informações</h2>
                            <input
                                value={`Empresa: ${userData?.company}`}
                            />
                            <input
                                value={`Website/Blog: ${userData?.blog}`}
                            />
                            <input
                                value={`Localidade: ${userData?.location}`}
                            />
                            <input
                                value={`Membro desde: ${userData?.created_at}`}
                            />
                        </div>
                    </div>
                </div>
                <Button text="Ver perfil" />
            </div>
        </div >
    );
};

export default Search;