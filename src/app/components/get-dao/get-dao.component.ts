import { Component } from '@angular/core';
import { GetDaoService } from '../../services/get-dao.service';

@Component({
  selector: 'app-get-dao',
  templateUrl: './get-dao.component.html',
  styleUrl: './get-dao.component.css',
})
export class GetDaoComponent {
  daoName: any ='poc-dao-0310-3.dao.eth';
  dao: any;
  constructor (public getDaoService: GetDaoService) { }

  async getDetails () {
    const dao = await this.getDaoService.getDao(this.daoName)
    this.dao = dao
    console.log(dao)
  }

  onInputChange(): void {
    console.log('Input value changed:', this.daoName);
    // You can perform additional actions here with this.inputValue
  }
}
