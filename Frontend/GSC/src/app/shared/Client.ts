export class Commande {
    commandId: number = 0;
    clientName: string = '';
    dateStart: Date = new Date();
    dateEnd: Date = new Date();
    paid: string = 'Not Paid';
    statusFinished: string = 'Not Finished';
    problemDescription: string = '';
  }
  