import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonFooter, IonButton, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import './Team.css';


function getPlayer(){
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
               <p>Tonga ve?</p>
            </IonContent>
        </IonPage>
    );
};

export default getPlayer;