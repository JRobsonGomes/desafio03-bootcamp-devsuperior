import React from "react"
import './styles.scss';
import Button from "core/components/Button";
import { User } from "core/types/User";


type Props = {
    user: User;
}

const formatDate = (date: string) => {
    const dateFormated = new Date(date);
    return (new Intl.DateTimeFormat('pt-BR').format(dateFormated));
}

const UserCard = ({ user }: Props) => (
    <div className="result-container">
        <div className="result-row">
            <img src={user?.avatar_url} alt={user?.name} className="image" />
            <div className="result-col-2">
                <div className="statistics-container">
                    <div className="statistics">
                        <p className="text-statistics" >Repositórios públicos: {user?.public_repos} </p>
                    </div>
                    <div className="statistics">
                        <p className="text-statistics" >Seguidores: {user?.followers} </p>
                    </div>
                    <div className="statistics">
                        <p className="text-statistics" >Seguindo: {user?.following} </p>
                    </div>
                </div>
                <div className="info-container" >
                    <h2 className="info-title" >Informações</h2>
                    <div className="info-input">
                        <p className="label-text" >Empresa:</p>
                        <span className="text-input">
                            {user?.company}
                        </span>
                    </div>
                    <div className="info-input">
                        <p className="label-text" >Website/Blog:</p>
                        <span className="text-input">
                            {user?.blog}
                        </span>
                    </div>
                    <div className="info-input">
                        <p className="label-text" >Localidade:</p>
                        <span className="text-input">
                            {user?.location}
                        </span>
                    </div>
                    <div className="info-input">
                        <p className="label-text" >Membro desde:</p>
                        <span className="text-input">
                            {formatDate(user?.created_at)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="result-btn">
            <a href={user.html_url} target="_new">
                <Button text="Ver perfil" />
            </a>
        </div>
    </div>
);

export default UserCard;