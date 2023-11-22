import { IonPage, IonHeader, IonTitle, IonContent, IonFooter, IonButton, IonToolbar, IonButtons, IonBackButton, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
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
                    <IonButton fill="outline" onClick={team}>Team</IonButton>
                </IonContent>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="home" href="/home"> Home </IonTabButton>
                        <IonTabButton tab="team" href="/team"> Team </IonTabButton>
                    </IonTabBar>
            </IonPage>
        </>
    );
};

export default getTeam;