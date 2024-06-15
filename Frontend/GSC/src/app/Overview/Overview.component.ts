import { Component, OnInit } from '@angular/core';
import { Commande } from '../shared/Commande';
import * as XLSX from 'xlsx';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-Overview',
  templateUrl: './Overview.component.html',
  styleUrls: ['./Overview.component.css']
})

export class OverviewComponent implements OnInit {

  constructor(private messageService: MessageService) { }


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

  statuses = [
    { label: 'Finished', value: 'Finished' },
    { label: 'Not Finished', value: 'Not Finished' },
    { label: 'In Progress', value: 'In Progress' }
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
      },
      {
        commandId: 6,
        clientName: 'Emily Davis',
        dateStart: new Date('2024-06-08'),
        dateEnd: new Date('2024-06-13'),
        paid: 'Paid',
        statusFinished: 'Finished',
        problemDescription: 'Security audit and vulnerability assessment.'
    },
    {
        commandId: 7,
        clientName: 'Mark Wilson',
        dateStart: new Date('2024-06-18'),
        dateEnd: new Date('2024-06-22'),
        paid: 'Not Paid',
        statusFinished: 'Not Finished',
        problemDescription: 'Memory leak investigation and optimization.'
    },
    {
        commandId: 8,
        clientName: 'Sarah Taylor',
        dateStart: new Date('2024-06-02'),
        dateEnd: new Date('2024-06-07'),
        paid: 'Paid',
        statusFinished: 'Finished',
        problemDescription: 'Front-end framework migration and compatibility check.'
    },
    {
      commandId: 9,
      clientName: 'Emily Davis',
      dateStart: new Date('2024-06-08'),
      dateEnd: new Date('2024-06-13'),
      paid: 'Paid',
      statusFinished: 'Finished',
      problemDescription: 'Security audit and vulnerability assessment.'
  },
  {
      commandId: 10,
      clientName: 'Mark Wilson',
      dateStart: new Date('2024-06-18'),
      dateEnd: new Date('2024-06-22'),
      paid: 'Not Paid',
      statusFinished: 'Not Finished',
      problemDescription: 'Memory leak investigation and optimization.'
  },
  {
      commandId: 11,
      clientName: 'Sarah Taylor',
      dateStart: new Date('2024-06-02'),
      dateEnd: new Date('2024-06-07'),
      paid: 'Paid',
      statusFinished: 'Finished',
      problemDescription: 'Front-end framework migration and compatibility check.'
  },
  {
      commandId: 12,
      clientName: 'Alex Rodriguez',
      dateStart: new Date('2024-06-14'),
      dateEnd: new Date('2024-06-19'),
      paid: 'Not Paid',
      statusFinished: 'Not Finished',
      problemDescription: 'Backend API performance tuning.'
  },
  {
      commandId: 13,
      clientName: 'Olivia Martinez',
      dateStart: new Date('2024-06-20'),
      dateEnd: new Date('2024-06-25'),
      paid: 'Paid',
      statusFinished: 'Finished',
      problemDescription: 'Mobile app responsiveness enhancement.'
  },
  {
      commandId: 14,
      clientName: 'William Clark',
      dateStart: new Date('2024-06-03'),
      dateEnd: new Date('2024-06-08'),
      paid: 'Not Paid',
      statusFinished: 'Not Finished',
      problemDescription: 'Database schema redesign and optimization.'
  },
  {
      commandId: 15,
      clientName: 'Sophia Moore',
      dateStart: new Date('2024-06-12'),
      dateEnd: new Date('2024-06-17'),
      paid: 'Paid',
      statusFinished: 'Finished',
      problemDescription: 'Implementing automated testing suite.'
  },
  {
      commandId: 16,
      clientName: 'Daniel Hall',
      dateStart: new Date('2024-06-05'),
      dateEnd: new Date('2024-06-10'),
      paid: 'Not Paid',
      statusFinished: 'Not Finished',
      problemDescription: 'Cloud infrastructure cost optimization.'
  },
  {
      commandId: 17,
      clientName: 'Ava Garcia',
      dateStart: new Date('2024-06-15'),
      dateEnd: new Date('2024-06-20'),
      paid: 'Paid',
      statusFinished: 'Finished',
      problemDescription: 'Implementing OAuth2 authentication.'
  },
  {
      commandId: 18,
      clientName: 'James Allen',
      dateStart: new Date('2024-06-25'),
      dateEnd: new Date('2024-06-30'),
      paid: 'Not Paid',
      statusFinished: 'Not Finished',
      problemDescription: 'Backend data migration to new server.'
  }
    ];
  }


  NewRow() {
    const newRow: Commande = new Commande();
  
    const lastCommande = this.commands[this.commands.length - 1];
    newRow.commandId = lastCommande.commandId + 1;
  
    this.commands.push(newRow);
  
    this.messageService.add({ severity: 'success', summary: 'Ajouter', detail: 'Nouveau client a été ajouté' });
  }
  
  

  selectedCommands? : Commande[]  = [];

  Remove() {
    if (this.selectedCommands && this.selectedCommands.length > 0) {
      for (const item of this.selectedCommands) {
        this.commands = this.commands.filter(i => i !== item);
        const clientName = item.clientName; 
        this.messageService.add({severity:'success', summary:'Supprimer', detail: `Client "${clientName}" a été supprimé`});
      }
      this.selectedCommands = [];
    }
  }
  
  

  Export() {
    // Define the worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.commands);

    // Define the workbook and add the worksheet to it
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Save the Excel file
    XLSX.writeFile(wb, 'exported_data.xlsx');
    this.messageService.add({severity:'success', summary:'Ajouter', detail: " Tableau a ete exporter"});
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
      const importedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }).slice(1);

      // Determine the starting commandId
      const startCommandId = this.commands.length > 0 ? this.commands[this.commands.length - 1].commandId + 1 : 1;

      // Create Commande objects with correct commandId
      const importedList: Commande[] = importedData.map((row: any, index: number) => {
        const commande = new Commande();
        commande.commandId = startCommandId + index;
        commande.clientName = row[1];
        // Assuming row indices for other properties align with Commande class
        commande.dateStart = new Date(row[2]); // Adjust as per your date format
        commande.dateEnd = new Date(row[3]); // Adjust as per your date format
        commande.paid = row[4];
        commande.statusFinished = row[5];
        commande.problemDescription = row[6];

        return commande;
      });

      // Push importedList into this.commands array
      this.commands.push(...importedList);

      // Notify success message or perform any additional operations
      this.messageService.add({ severity: 'success', summary: 'Import', detail: 'Liste importée avec succès' });
    };

    reader.readAsArrayBuffer(file);
  };

  input.click();
}





  PrintTable()
  {
    window.print();
  }




  ExportPDF()
  {
    
  }


  Save()
  {
    this.messageService.add({severity:'success', summary:'Ajouter', detail: " Tableau a ete sauvegarder"});

  }



}
