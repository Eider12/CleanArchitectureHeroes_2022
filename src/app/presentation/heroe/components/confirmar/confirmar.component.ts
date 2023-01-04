import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../../../domain/models/Heroes/heroes.model';
// import { Heroe } from 'src/app/core/domain/Heroes/heroes.model';


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

ngOnInit(): void {
}

borrar(){
this.dialogRef.close(true);
}

cerrar(){
this.dialogRef.close();
}

}
