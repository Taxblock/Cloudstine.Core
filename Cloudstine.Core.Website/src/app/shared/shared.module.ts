import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from 'app/core/services/ensureModuleLoadedOnceGuard';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { ActivePromocodeComponent } from './components/active-promocode/active-promocode.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeDataService } from './components/tree/TreeDataService';
import { TreeNodeCheckedPipe } from './components/tree/TreeNodeCheckedPipe';
import { TreeNodeSearchPipe } from './components/tree/TreeNodeSearchPipe';
import { TreeView } from './components/tree/TreeView';
import { SanitizeHtmlPipe } from './pipes/domsanitizer.pipe';
import { StateService } from '../core/services/state-service.service';
import { UserProfileService } from '../core/services/user-profile.service';
import { AutoLogoutService } from 'app/core/services/autoLogout.service';

@NgModule({
  declarations: [
    ActivePromocodeComponent,
    SanitizeHtmlPipe,
    TreeComponent,
    TreeNodeCheckedPipe,
    TreeNodeSearchPipe,
    TreeView,
  ],

  imports: [CommonModule, NgxTinySliderModule],

  exports: [
    ActivePromocodeComponent,
    SanitizeHtmlPipe,
    TreeComponent,
    TreeNodeCheckedPipe,
    TreeNodeSearchPipe,
    TreeView,
  ],

  providers: [
    StateService,
    UserProfileService,
    TreeDataService,
    AutoLogoutService,
  ],
})
export class SharedModule extends EnsureModuleLoadedOnceGuard {
  //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    super(parentModule);
  }
}
