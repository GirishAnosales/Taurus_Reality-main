import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Observable, map } from 'rxjs';

interface Urls {
  name: string;
  children?: Urls[];
}

const TREE_DATA: Urls[] = [
  {
    name: 'Services',
    children: [{ name: 'Real Estate' }, { name: 'Home Loan Consultation' }, { name: 'NRI' }],
  },
];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  treeControl = new NestedTreeControl<Urls>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Urls>();

  hasChild = (_: number, node: Urls) => !!node.children && node.children.length > 0;

  isSmall!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
    this.isSmall = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ])
      .pipe(
        map(res => res.matches)
      )
  }
}
