import ExploreContainer from '../components/ExploreContainer';
import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonToolbar, IonNavLink, IonButtons, IonBackButton, IonList } from '@ionic/react';
import './Team.css';
import Home from './Home';
import getTeam from './Home';
import { useHistory } from 'react-router';

const getPlayer = () =>{

    const history = useHistory();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error(error));
    }, []);

    const listPlayer = (idEquipe: number) => {
        history.push({
            pathname: '/Player',
            state: { myData: idEquipe }
        });
    };

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                    <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>NBA</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h3>Teams</h3>    
                <IonList>
                    {posts.map((user: any) => ( // Assurez-vous d'ajuster le type de 'post' en fonction de la structure de vos données
                        <IonItem key={user.id} onClick={() => listPlayer(user.id)}>
                            <IonLabel>{user.name}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};
export default getPlayer;
   