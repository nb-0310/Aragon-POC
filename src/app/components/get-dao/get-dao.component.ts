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
  // members: Array<any> = []
  
  constructor (public getDaoService: GetDaoService) { }

  async getDetails() {
    try {
      const dao = await this.getDaoService.getDao(this.daoName);
  
      if (!dao) {
        console.error('Error fetching DAO details.');
        return;
      }
  
      this.dao = dao;
      
      // const members = await this.getDaoService.getMembers(this.daoName);
      
      // if (members) {
      //   this.members = members;
      // }
    } catch (error) {
      console.error('Error fetching DAO details or members:', error);
    }
  }

  onInputChange(): void {
    console.log('Input value changed:', this.daoName);
    // You can perform additional actions here with this.inputValue
  }
}
