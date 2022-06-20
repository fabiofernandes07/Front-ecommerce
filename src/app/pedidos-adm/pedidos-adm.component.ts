import { UsuarioService } from './../usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pedidos-adm',
  templateUrl: './pedidos-adm.component.html',
  styleUrls: ['./pedidos-adm.component.scss']
})
export class PedidosAdmComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'description', 'value','status', 'rastreio'];
  dataSource!: MatTableDataSource<any>;
  SalesList:any

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor( private userService: UsuarioService) { }


  ngOnInit(): void {
    this.userService.getAllSales().subscribe((data:any)=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
