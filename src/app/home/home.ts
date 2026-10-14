import { Component, signal, computed, effect } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected saudacao = "Olá, fatecanos!"
  protected habilitado = false
  protected desabilitado = true
  private flag = true

  protected contador = signal(0)
  protected dobrador = computed(() => this.contador() * 2)
  private readonly registrador = effect(() => {
    console.log('Registrando contador: ', this.contador())
    console.log('Registrando dobrador: ', this.dobrador())
  })

  protected onClick(){
    this.habilitado = !this.habilitado
    this.desabilitado = !this.desabilitado
    if (this.habilitado) {
      console.log("Falei para não clicar!")
    } else {
      console.log("Ok! See you soon!")
    }
    // contador = contador + 1
    if (this.flag){
      this.contador.update(v => v + 1)
      if (this.contador() > 9) {
        this.flag = false
      }
    } else {
      //this.contador.set(0)
      this.contador.update(v => v -1)
      if (this.contador() == 0) {
        this.flag = true
      }
    }
  }
}
