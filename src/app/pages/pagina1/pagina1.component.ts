import { interval, Subscription } from 'rxjs';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [],
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  nombre: string = 'Alban';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log('Constructor');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('Timer limpiado');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe((i) => {
      console.log(i);
      this.segundos = i;
    });
  }

  guardar() {}
}
