import { Component, OnInit } from '@angular/core';
import { SheetsService } from 'app/sheets-service';

@Component({
  selector: 'app-building-bounties',
  templateUrl: './building-bounties.component.html',
  styleUrls: ['./building-bounties.component.css']
})
export class BuildingBountiesComponent implements OnInit {
  towers: any[];

  constructor(private sheets: SheetsService) { }

  ngOnInit(): void {
    this.sheets.getSheets().subscribe((data) => {
      let sheet: SpreadSheet = data as SpreadSheet;
      let valueRanges = sheet.valueRanges;

      this.towers = valueRanges[0]["values"];

      console.log("Towers", this.towers)
    });
  }

}

export interface SpreadSheet {
  spreadsheetId: string;
  valueRanges: any[];
}

