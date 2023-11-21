import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonFooter, IonButton, IonToolbar, IonNavLink } from '@ionic/react';
import './Team.css';
import Home from './Home';

function getTeam(){
    return(
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                    <IonTitle>NBA</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonNavLink routerDirection="forward" component={() => <Home />}>
                        <IonButton fill="outline">Player</IonButton>
                    </IonNavLink>
                </IonContent>
            </IonPage>
        </>
    );
};
export default getTeam;
   