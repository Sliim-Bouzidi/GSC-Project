import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/Client';
@Component({
  selector: 'app-Overview',
  templateUrl: './Overview.component.html',
  styleUrls: ['./Overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }


  commands: Commande[] = [];


  
  ngOnInit() {
    // Dummy data for demonstration
    this.commands = [
      {
        commandId: 1,
        clientName: 'John Doe',
        dateStart: new Date('2024-06-01'),
        dateEnd: new Date('2024-06-05'),
        paid: 'Paid',
        statusFinished: 'Finished',
        problemDescription: 'Component X not responding.'
      },
      {
        commandId: 2,
        clientName: 'Jane Smith',
        dateStart: new Date('2024-06-10'),
        dateEnd: new Date('2024-06-15'),
        paid: 'Not Paid',
        statusFinished: 'Not Finished',
        problemDescription: 'Server connectivity issue.'
      },
      {
        commandId: 3,
        clientName: 'Michael Brown',
        dateStart: new Date('2024-06-03'),
        dateEnd: new Date('2024-06-08'),
        paid: 'Paid',
        statusFinished: 'Finished',
        problemDescription: 'Database query optimization needed.'
      },
      {
        commandId: 4,
        clientName: 'Emma Johnson',
        dateStart: new Date('2024-06-12'),
        dateEnd: new Date('2024-06-17'),
        paid: 'Not Paid',
        statusFinished: 'Not Finished',
        problemDescription: 'UI responsiveness improvements.'
      },
      {
        commandId: 5,
        clientName: 'Chris Lee',
        dateStart: new Date('2024-06-05'),
        dateEnd: new Date('2024-06-10'),
        paid: 'Paid',
        statusFinished: 'Finished',
        problemDescription: 'Integration with third-party API.'
      }
      // Add more commands as needed
    ];
  }



  Search()
  {

  }

  Export()
  {

  }

  NewRow()
  {

  }

  RemoveRow(){

  }


  PrintTable()
  {

  }


  Save()
  {
    
  }




}
