import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vmasculino',
  imports: [CommonModule],
  templateUrl: './vmasculino.html',
  styleUrl: './vmasculino.css',
})
export class Vmasculino {

elementos = [

{
  nome: 'Camisa Polo Preta',
  imagem: 'assets/images/vmasculino/camisa-polo-preta.png',
  $anterior: 'R$ 00,00',
  $posterior: 'R$ 00,00'
},

{
  nome: 'Paletó Cinza',
  imagem: 'assets/images/vmasculino/paleto-cinza.png',
  $anterior: 'R$ 00,00',
  $posterior: 'R$ 00,00'
},

{
  nome: 'Camisa Polo Branca',
  imagem: 'assets/images/vmasculino/camisa-polo-branca.png',
  $anterior: 'R$ 00,00',
  $posterior: 'R$ 00,00'
},

{
  nome: 'Camisa Social Verde',
  imagem: 'assets/images/vmasculino/camisa-social-verde.png',
  $anterior: 'R$ 00,00',
  $posterior: 'R$ 00,00'
}

]

}
