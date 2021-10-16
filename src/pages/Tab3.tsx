import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">De app Ionic com o framework React</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="De app Ionic com o framework React" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
