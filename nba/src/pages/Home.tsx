import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import { IonPage, IonHeader, IonTitle, IonContent, IonFooter, IonButton, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import './Team.css';
import getPlayer from './Team';
import { useHistory } from 'react-router-dom';

const getTeam = () => {
    const p = useHistory();

    const team = () => {
        p.push('/team');
    };
    
    return (
        <>
            <IonPage>
                <IonHeader>

                    <IonToolbar>
                        <IonTitle>NBA</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    {/* <IonNavLink routerDirection="forward" component={() => <Home />}> */}
                    <IonButton fill="outline" onClick={team}>Team</IonButton>
                    {/* </IonNavLink> */}
                </IonContent>
            </IonPage>
        </>
    );
};

export default getTeam;