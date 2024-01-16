import { Component, Input, OnInit } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import * as core from '@angular/core';
import { TreeView } from './TreeView';
import { TreeNode } from './TreeNode';
import { TreeDataService } from './TreeDataService';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  inputs: ['height', 'uiClassPrefix', 'url'],
  providers: [TreeDataService],
})
export class TreeComponent implements OnInit {
  
  root: any;
  query: string = '';
  isChecked: Boolean = false;
  height: number;
  url: string;
  uiClassPrefix: string;
  store: any;


public _dataSource : any;

  @Input() set dataSource(value :any ){

    this.root = value;
    //this.SetDataSource()
  }


  constructor(private service: TreeDataService) {
    this.root = new TreeNode('root',0,0,0,0, []);
  }

  ngOnInit() {
    console.log('init');
  
    console.log(this.root);
  }

  onResetClick() {
    this.isChecked = false;
    this.root.nodes.map(node => {
      node.expanded = false;
      node.checked = false;
      node.nodes.map(node => {
        node.expanded = false;
        node.checked = false;

      });
    });
  }

  onShowSelectedClick() {
    console.log(this.root);
    console.log(this.getAllChekcedItemsFlat(this.root.nodes));
  }

  getAllChekcedItemsFlat(nodes) {
    let selectedItems = [];
    nodes.forEach((d) => {
      // console.log('Length of Nodes:' + d.nodes.length);
      if (d.checked && d.nodes.length == 0) {
        console.log('Adding new selcection: ' + d.name);
        selectedItems = [...selectedItems, d.name];
      }
      //d.checked = state;
      const newselectedItems = this.getAllChekcedItemsFlat(d.nodes);
      selectedItems = [...selectedItems, ...newselectedItems];
    });
    return selectedItems;
  }



  setChecked(name, nodes) {
    nodes.forEach((node) => {
      if (node.name === name) {
        node.checked = true;
        return;
      }
      this.setChecked(name, node.nodes);
    });
  }
}
