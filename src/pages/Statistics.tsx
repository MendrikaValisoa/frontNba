import ExploreContainer from '../components/ExploreContainer';
import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonItem, IonLabel, IonToolbar, IonNavLink, IonButtons, IonBackButton, IonList, IonTabBar, IonTabButton, IonGrid, IonCol, IonRow } from '@ionic/react';
import './Team.css';
import { useHistory } from 'react-router';

const getStatistics = () => {

    const history = useHistory();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error(error));
    }, []);

    return (
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
                <h3>Statistics</h3>
                <IonGrid>
                    {posts.map((post: any) => ( // Assurez-vous d'ajuster le type de 'post' en fonction de la structure de vos données
                        <IonRow key={post.id}>
                            <IonCol>{post.body}</IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
            </IonContent>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home"> Home </IonTabButton>
                <IonTabButton tab="team" href="/team"> Team </IonTabButton>
            </IonTabBar>
        </IonPage>
    );
};
export default getStatistics;
