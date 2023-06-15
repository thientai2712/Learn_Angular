import { Component, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent> = new QueryList()

  ngAfterContentInit(): void {
    const acctiveTabs = this.tabs?.filter(
      tab => tab.active
    )
    if(!acctiveTabs || acctiveTabs.length === 0){
        this.selectTabs(this.tabs!.first)
    }
  }

  selectTabs(tab: TabComponent){
    this.tabs?.forEach(tab=>{
      tab.active = false
    })
    tab.active = true

    return false;
  }


}
