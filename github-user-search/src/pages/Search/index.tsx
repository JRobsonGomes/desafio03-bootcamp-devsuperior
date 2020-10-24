import React, { useState } from 'react';
import Button from 'core/components/Button';
import axios from 'axios';
import './styles.scss';

const BASE_URL = 'https://api.github.com/users'

type User = {
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
    const [userData, setUserData] = useState<User>();

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
            <div className="result-container">
                <div className="result-row">
                    <img src={userData?.avatar_url} alt={userData?.name} className="image" />
                    <div className="result-col-2">
                        <div className="statistics-container">
                            <div className="statistics">
                                <p className="text-statistics" >Repositórios públicos: {userData?.public_repos} </p>
                            </div>
                            <div className="statistics">
                                <p className="text-statistics" >Seguidores: {userData?.followers} </p>
                            </div>
                            <div className="statistics">
                                <p className="text-statistics" >Seguindo: {userData?.following} </p>
                            </div>
                        </div>
                        <div className="info-container" >
                            <h2 className= "info-title" >Informações</h2>
                            <input
                                readOnly={true}
                                value={`Empresa: ${userData?.company}`}
                                className="info-input text-input"
                            />
                            <input
                                readOnly={true}
                                value={`Website/Blog: ${userData?.blog}`}
                                className="info-input text-input"
                            />
                            <input
                                readOnly={true}
                                value={`Localidade: ${userData?.location}`}
                                className="info-input text-input"
                            />
                            <input
                                readOnly={true}
                                value={`Membro desde: ${userData?.created_at}`}
                                className="info-input text-input"
                            />
                        </div>
                    </div>
                </div>
                <div className="result-btn">
                    <Button text="Ver perfil" />
                </div>
            </div>
        </div >
    );
};

export default Search;