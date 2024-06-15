import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/Commande';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-Overview',
  templateUrl: './Overview.component.html',
  styleUrls: ['./Overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }


  commands: Commande[] = [];



  items: any[] = [
    {label: 'Ajouter', icon: 'pi pi-user-plus', command: () => this.NewRow()}, 
    { label: 'Importer', icon: 'pi pi-file-import', command: () => this.Import() }, 
    {
      label: 'Exporter',
      icon: 'pi pi-file-export',
      items: [
        { label: 'Excel', icon: 'pi pi-file-excel', command: () => this.Export() },
        { label: 'PDF', icon: 'pi pi-file-pdf', command: () => this.ExportPDF() },
      ]
    },
    { label: 'Supprimer', icon: 'pi pi-trash' , command: () => this.Remove() },
    { label: 'Imprimer', icon: 'pi pi-print' , command: () => this.PrintTable() } ,
    { label: 'Sauvegarder', icon: 'pi pi-save' , command: () => this.Save() } 
  ];


  
  ngOnInit() {
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
    ];
  }


  NewRow()
  {
    const newRow : Commande = new Commande
    this.commands.push(newRow)
  }


  selectedCommande? : Commande;

  Remove() {
    if (this.selectedCommande) {
        const commandIdToRemove = this.selectedCommande.commandId;
        this.commands = this.commands.filter(item => item.commandId !== commandIdToRemove);
    }
  }



  Search()
  {

  }

  Export() {
    // Define the worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.commands);

    // Define the workbook and add the worksheet to it
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Save the Excel file
    XLSX.writeFile(wb, 'exported_data.xlsx');
}


  ExportPDF()
  {

  }


  RemoveRow(){

  }


  PrintTable()
  {
    window.print();
  }


  Save()
  {
    
  }


  Import() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx';

    input.onchange = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event: any) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assuming the first sheet is the one you want to import
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];

            // Convert the worksheet to an array of objects
            const importedList: Commande[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 }).slice(1).map((row: any) => {
                const commande = new Commande();
                commande.clientName = row[1];
                // Assuming row indices for other properties align with Commande class
                commande.dateStart = new Date(row[2]); // Adjust as per your date format
                commande.dateEnd = new Date(row[3]); // Adjust as per your date format
                commande.paid = row[4];
                commande.statusFinished = row[5];
                commande.problemDescription = row[6];
                return commande;
            });


        };

        reader.readAsArrayBuffer(file);
    };

    input.click();
}



}
