import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { ReservationProvider } from '../../providers/reservation/reservation';

/**
 * Generated class for the ReservationsManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservations-management',
  templateUrl: 'reservations-management.html',
})
export class ReservationsManagementPage {
  student;
  reservations;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public toastCtrl: ToastController, public reservationsService: ReservationProvider) {
    this.student = navParams.get('data');
  }

  ionViewWillEnter(){
    this.reservationsService.getReservations(this.student).then((data) => {
      this.reservations = data;
      console.log(this.reservations);
    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Oooops!',
        message: 'C\'è stato un errore, non è stato possibile caricare le informazioni degli studenti',
        buttons: ['Ok']
      });
      alert.present();
    });
  }

  removeReservation(reservation){
    let confirm = this.alertCtrl.create({
      title: "Sei sicuro di voler procedere?",
      message: "L'operazione di eliminazione della prenotazione è irreversibile.",
      buttons: [
        {
          text: "Indietro"
        },

        {
          text: "Conferma",
          handler: () => {this.reservationsService.deleteStudentReservation(reservation).then((result) => {
          let toast = this.toastCtrl.create({
              message: 'Eliminazione prenotazione',
              duration: 1000,
              position: 'middle'
          });

          let index = this.reservations.indexOf(reservation);
          if (index > -1) {
            this.reservations.splice(index, 1);
          }

    }, (err) => {
       let alert = this.alertCtrl.create({
        title: 'Oooops!',
        message: 'C\'è stato un errore, eliminazione non effettuata',
        buttons: ['Ok']
      });
         console.log(err);
         alert.present();
     });}
    }
  ]
  });
   confirm.present();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationsManagementPage');
  }

}
